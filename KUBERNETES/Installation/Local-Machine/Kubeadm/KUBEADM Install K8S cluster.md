# KUBEADM INSTALL K8S CLUSTER

K8S cluster installation steps via Kubeadm

![K8S cluster installation steps](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_cluster_inst_steps.png "K8S cluster installation steps")

# 1. Nodes

Create 3 hosts (VMs, etc) with following hostnames and static (!!!) IPs:

HOSTNAME  STATIC IP
master
worker1
worker2

| HOSTNAME        | STATIC IP | 
| ------------- |:-------------:| 
| master        | 172.31.40.84 | 
| worker1      | 172.31.46.9      | 
| worker2      | 172.31.33.97      | 


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
echo "echo 172.31.40.84 master >> /etc/hosts" >> /tmp/add_host_name
echo "echo 172.31.46.9 worker1 >> /etc/hosts" >> /tmp/add_host_name
echo "echo 172.31.33.97 worker2 >> /etc/hosts" >> /tmp/add_host_name
bash /tmp/add_host_name
rm -f /tmp/add_host_name

yum update -y
```



# 2. Docker

Go through the [Docker installation steps](https://github.com/propalparolnapervom/CONTAINERIZATION/blob/master/DOCKER/CentOS/Installation/DOCKER%20Installation%20(CentOS).md).

Make sure Docker is installed on all nodes.


# 3. Kubeadm

[Intall kubeadm](https://kubernetes.io/docs/setup/independent/install-kubeadm/)

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

Currently we're gonna specify our static IP, which has been specially configured earlier for master node, so `--apiserver-advertise-address=192.168.50.10` will be added.


## 4.3. Optional

Run following prior to verify connectivity to **gcr.io** registries.
```
kubeadm config images pull

      [config/images] Pulled k8s.gcr.io/kube-apiserver:v1.12.2
      [config/images] Pulled k8s.gcr.io/kube-controller-manager:v1.12.2
      [config/images] Pulled k8s.gcr.io/kube-scheduler:v1.12.2
      [config/images] Pulled k8s.gcr.io/kube-proxy:v1.12.2
      [config/images] Pulled k8s.gcr.io/pause:3.1
      [config/images] Pulled k8s.gcr.io/etcd:3.2.24
      [config/images] Pulled k8s.gcr.io/coredns:1.2.2
```

## 4.4. Initialize Master node

Only on Master node
```
sudo su


  #Disable swap (running with swap on is not supported)
  
swapoff -a


  #Run initialization
  
kubeadm init --pod-network-cidr=10.244.0.0/16 --apiserver-advertise-address=192.168.50.10


  #Enable swap (to make it once again enabled)
  
swapon -a
```
























