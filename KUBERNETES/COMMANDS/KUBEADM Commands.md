# KUBEADM COMMANDS



# TOKENS

The **token** is used for mutual authentication between the master and the joining nodes. 

The token included here is secret. 

Keep it safe, because anyone with this token can add authenticated nodes to your cluster.


**List**

```
kubeadm token list
```


# UPGRADE (If K8S cluster was installed via `kubeadm` tool)


> **NOTE**: 1.19 -> 1.20


[Docs](https://v1-20.docs.kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-upgrade/)



## Upgrade Master Node

Find the latest stable 1.20 version for `kubeadm` using the OS package manager
```
apt update
apt-cache madison kubeadm

  ...
  kubeadm | 1.20.15-00 | http://apt.kubernetes.io kubernetes-xenial/main amd64 Packages
  ...
```

Upgrade `kubeadm`
```
apt-mark unhold kubeadm && \
apt-get update && apt-get install -y kubeadm=1.20.15-00 && \
apt-mark hold kubeadm
```

Verify that the download works and has the expected version:
```
kubeadm version
```

Verify the upgrade plan:
```
kubeadm upgrade plan
```

Make an upgrade
```
kubeadm upgrade apply v1.20.15
```

Manually upgrade your CNI provider plugin.


Drain the master node of workloads and mark it 
```
kubectl drain controlplane --ignore-daemonsets
```

Upgrade the kubelet and kubectl
```
apt-mark unhold kubelet kubectl && \
    apt-get update && apt-get install -y kubelet=1.20.15-00 kubectl=1.20.15-00 && \
    apt-mark hold kubelet kubectl
```

Restart the kubelet:
```
systemctl daemon-reload
systemctl restart kubelet
```

Bring the node back online by marking it schedulable:
```
kubectl uncordon controlplane
```


## Upgrade Worker Nodes

Upgrade kubeadm
```
apt-mark unhold kubeadm && \
apt-get update && apt-get install -y kubeadm=1.20.15-00 && \
apt-mark hold kubeadm
```

For worker nodes this upgrades the local kubelet configuration:
```
kubeadm upgrade node
```

Drain the node

```
# Do it from Master node, for example (where kubectl is installed)
kubectl drain node01 --ignore-daemonsets
```

Upgrade kubelet and kubectl
```
apt-mark unhold kubelet kubectl && \
apt-get update && apt-get install -y kubelet=1.20.15-00 kubectl=1.20.15-00 && \
apt-mark hold kubelet kubectl
```

Restart the kubelet:
```
systemctl daemon-reload
systemctl restart kubelet
```

Uncordon the node
```
# Do it from Master node, for example (where kubectl is installed)
kubectl uncordon node01
```























