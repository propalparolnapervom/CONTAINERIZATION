# KUBEADM INSTALL K8S CLUSTER

K8S cluster installation steps via Kubeadm

![K8S cluster installation steps](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_cluster_inst_steps.png "K8S cluster installation steps")

# 1. Nodes

Create 3 hosts (VMs, etc) with following hostnames and static (!!!) IPs:


| HOSTNAME        | STATIC IP | 
| ------------- |:-------------:| 
| master        | 172.31.34.236 | 
| worker1      | 172.31.32.188      | 
| worker2      | 172.31.40.172      | 


Hosts should have:
  - 2 GB or more of RAM per machine. Any less leaves little room for your apps.
  - 2 CPUs or more on the master
  - Full network connectivity among all machines in the cluster. A public or private network is fine.
  
  
## If this is AWS

### SG

Place hostnames to SG, where traffic is allowed between this IPs.

### HOSTNAMES

On each nodes do following
```
sudo su

echo "echo 127.0.0.1   localhost > /etc/hosts" >> /tmp/add_host_name
echo "echo 255.255.255.255 broadcasthost >> /etc/hosts" >> /tmp/add_host_name
echo "echo ::1         localhost >> /etc/hosts" >> /tmp/add_host_name
echo "echo 172.31.34.236 master >> /etc/hosts" >> /tmp/add_host_name
echo "echo 172.31.32.188 worker1 >> /etc/hosts" >> /tmp/add_host_name
echo "echo 172.31.40.172 worker2 >> /etc/hosts" >> /tmp/add_host_name
bash /tmp/add_host_name
rm -f /tmp/add_host_name

yum update -y
```





# 2. Docker

Go through the [Docker installation steps](https://github.com/propalparolnapervom/CONTAINERIZATION/blob/master/DOCKER/CentOS/Installation/DOCKER%20Installation%20(CentOS).md).

Make sure Docker is installed on all nodes.


# 3. Kubeadm

[kubeadm installation steps](https://kubernetes.io/docs/setup/independent/install-kubeadm/)

You will install these packages on all of your machines:

  - `kubeadm`: the command to bootstrap the cluster.
  - `kubelet`: the component that runs on all of the machines in your cluster and does things like starting pods and containers.
  - `kubectl`: the command line util to talk to your cluster


`kubeadm` **will not** install or manage `kubelet` or `kubectl` for you, so you will need to ensure they match the version of the Kubernetes control panel you want `kubeadm` to install for you. 

If you do not, there is a risk of a version skew occurring that can lead to unexpected, buggy behaviour. 

However, one minor version skew between the `kubelet` and the control plane is supported, but the `kubelet` version may never exceed the API server version. 

> For example, `kubelets` running 1.7.0 should be fully compatible with a 1.8.0 API server, but not vice versa.


On all 3 nodes (for CentOS)
```
sudo su
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
exclude=kube*
EOF

setenforce 0
sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config

yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes

systemctl enable kubelet && systemctl start kubelet

systemctl enable kubelet.service
```

Check
```
which kubeadm && which kubelet && which kubectl
```

> NOTE: Setting SELinux in permissive mode by running `setenforce 0` and `sed ...` effectively disables it. This is required to allow containers to access the host filesystem, which is needed by pod networks for example. You have to do this until SELinux support is improved in the kubelet.

> NOTE: Some users on RHEL/CentOS 7 have reported issues with traffic being routed incorrectly due to iptables being bypassed. You should ensure net.bridge.bridge-nf-call-iptables is set to 1 in your sysctl config, e.g.
```
cat <<EOF >  /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
EOF
sysctl --system
```


# 4. Initialize Master

[Initialize Master](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/#initializing-your-master)

The **master** is the machine where the control plane components run, including:
  - `etcd` (the cluster database)
  - `API server` (which the `kubectl` CLI communicates with).

## 4.1. Choose a pod network add-on

Choose a pod network add-on, and verify whether it requires any arguments to be passed to `kubeadm` initialization. 

Depending on which third-party provider you choose, you might need to set the **--pod-network-cidr** to a provider-specific value. 

See [Installing a pod network add-on](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/#pod-network).

Currently we're going to use **Flannel**, so `--pod-network-cidr=10.244.0.0/16` will be added.


## 4.2. Specify IP for Master node

Unless otherwise specified, `kubeadm` uses the network interface associated with the default gateway to advertise the master’s IP. 

To use a different network interface, specify the **--apiserver-advertise-address=<ip-address>** argument to `kubeadm init`. 

Currently we're gonna specify our static IP, which has been specially configured earlier for master node, so `--apiserver-advertise-address=172.31.34.236` will be added.


## 4.3. Optional

Run following prior to verify connectivity to **gcr.io** registries.
```
sudo su

kubeadm config images pull
```

Following Docker images will be downloaded as a result:
```
docker images

      REPOSITORY                           TAG                 IMAGE ID            CREATED             SIZE
      k8s.gcr.io/kube-proxy                v1.12.2             15e9da1ca195        12 days ago         96.5MB
      k8s.gcr.io/kube-apiserver            v1.12.2             51a9c329b7c5        12 days ago         194MB
      k8s.gcr.io/kube-controller-manager   v1.12.2             15548c720a70        12 days ago         164MB
      k8s.gcr.io/kube-scheduler            v1.12.2             d6d57c76136c        12 days ago         58.3MB
      k8s.gcr.io/etcd                      3.2.24              3cab8e1b9802        6 weeks ago         220MB
      k8s.gcr.io/coredns                   1.2.2               367cdc8433a4        2 months ago        39.2MB
      k8s.gcr.io/pause                     3.1                 da86e6ba6ca1        10 months ago       742kB
```


## 4.4. Initialize Master node

Only on Master node
```
sudo su


  #Disable swap (running with swap on is not supported)
  
swapoff -a


  #Run initialization
  
kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=172.31.34.236


  #Enable swap (to make it once again enabled)
  
swapon -a
```

Remember a command for joining to the Master.


## 4.5. Post-initialization steps

To make `kubectl` work for your non-root user, run on Master node these commands, which are also part of the kubeadm init output:
```
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```



# 5. Installing a pod network add-on

You must install a pod network add-on so that your pods can communicate with each other.

The network must be deployed before any applications. 

Also, **CoreDNS** will not start up before a network is installed. 

`kubeadm` only supports **Container Network Interface (CNI**) based networks (and does not support **kubenet**).


## Install network

**Flannel** has been chosen earlier, so for this POD network do following:

On the Master node, as regular user:
```
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/bc79dd1505b0c8681ece4de4c0d86c5cd2643275/Documentation/kube-flannel.yml
```

Necessary set of Kubernetes services will be installed to setup internal networking:
```
      clusterrole.rbac.authorization.k8s.io/flannel created
      clusterrolebinding.rbac.authorization.k8s.io/flannel created
      serviceaccount/flannel created
      configmap/kube-flannel-cfg created
      daemonset.extensions/kube-flannel-ds-amd64 created
      daemonset.extensions/kube-flannel-ds-arm64 created
      daemonset.extensions/kube-flannel-ds-arm created
      daemonset.extensions/kube-flannel-ds-ppc64le created
      daemonset.extensions/kube-flannel-ds-s390x created
```

Once a pod network has been installed, you can confirm that it is working by checking that the CoreDNS pod is Running in the output of following command. And once the CoreDNS pod is up and running, you can continue by joining your nodes.
```
kubectl get pods --all-namespaces

    NAMESPACE     NAME                                                                     READY   STATUS    RESTARTS   AGE
    kube-system   coredns-576cbf47c7-2v9kw                                                 1/1     Running   0          100s
    kube-system   coredns-576cbf47c7-dcnkx                                                 1/1     Running   0          100s
    kube-system   etcd-ip-172-31-34-236.eu-central-1.compute.internal                      1/1     Running   0          61s
    kube-system   kube-apiserver-ip-172-31-34-236.eu-central-1.compute.internal            1/1     Running   0          59s
    kube-system   kube-controller-manager-ip-172-31-34-236.eu-central-1.compute.internal   1/1     Running   0          55s
    kube-system   kube-flannel-ds-amd64-m4f6f                                              1/1     Running   0          20s
    kube-system   kube-proxy-n525n                                                         1/1     Running   0          100s
    kube-system   kube-scheduler-ip-172-31-34-236.eu-central-1.compute.internal            1/1     Running   0          39s
```

If your network is not working or CoreDNS is not in the Running state, check out our [troubleshooting docs](https://kubernetes.io/docs/setup/independent/troubleshooting-kubeadm/).



# 6. Join Worker nodes to Master

On each Worker node, use command that was remembered from run of Master initialization.
```
sudo kubeadm join 172.21.32.226:7443 --token zwrf.ufy85eolf6rx --discovery-token-ca-cert-hash sha256:0ff3dbb8efc092ea80bda8
```


# 7. RESULT TESTING 

For example, [this](https://www.howtoforge.com/tutorial/centos-kubernetes-docker-cluster/) step.


Let's test by deploying the Nginx pod to the kubernetes cluster.


Master node, create new deployment named `nginx` using the `kubectl` command.
```
kubectl create deployment nginx --image=nginx
```


To see details of the `nginx` deployment specification, run the following command.
```
kubectl describe deployment nginx
```


Expose the `nginx` pod accessible via the internet. And we need to create new service NodePort for this.
```
kubectl create service nodeport nginx --tcp=80:80
```


Make sure there is no error.

Now check the nginx service nodeport and IP using the kubectl command below.
```
kubectl get pods

      NAME                    READY   STATUS    RESTARTS   AGE
      nginx-55bd7c9fd-47gxn   1/1     Running   0          11m


kubectl get svc

      NAME         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
      kubernetes   ClusterIP   10.96.0.1        <none>        443/TCP        63m
      nginx        NodePort    10.102.175.105   <none>        80:31813/TCP   9m55s
```


Now you will get the `nginx` pod is running under cluster IP address '10.102.175.105' port 80, and the node main IP address ('172.31.x.x' in ousr case) on port '31813'.


From the Master, test Worker nodes
```
curl worker1:31813

curl worker2:31813
```

The Nginx Pod has now been deployed under the Kubernetes cluster and it's accessible via the internet.



Now access from the web browser (public IP of the Master node):
  - From Master: [http://3.120.26.103:31813](http://3.120.26.103:31813/)
  - From Worker1: [http://18.184.60.46:31813](http://18.184.60.46:31813/)
  - From Worker2: [http://18.196.136.158:31813](http://18.196.136.158:31813/)


The Kubernetes cluster Installation and configuration on CentOS 7 has been completed successfully.














