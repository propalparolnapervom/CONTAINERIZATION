# Kube Controller Manager

## Overall

The `controller manager` manages different `controllers` within Kubernetes cluster.

In terms of Kubernetes, a `controller` is a process that:
- continiously monitors the state of various components within the system;
- works towards bringing the whole system to the desired state;

Whatever logic is implemented within a Kubernetes cluster, it's implemented via corresponding `controller`:
- Deployment-Controller;
- Namespace-Controller;
- Endpoint-Controller;
- Job-controller;
- Statefule-Set;
- Replicaset;
- PV Protection-Controller;
- etc


> **NOTE**: All those `controllers` are packaged within a single process, which is called a `Kube-Controll-Manager`.

When you install `Kube-Controll-Manager`, the different `controllers` are installed as well.



## Options

The necessary parameters of `Kube-Controll-Manager` are specified during its installation. 

For example, how long node-controller should wait before marking the node as unreachable.

> **NOTE**: By default, (almost) **all** `controllers` are enabled within `Kube-Controll-Manager` during its installation.
> But you can specify a list, which contains only those `controller` that should be enabled eventually.

To view options, that were used for already running Kubernetes cluster, you can check corresponding process:
```
ps -ef | grep kube-controller-manager
```

As an alternate, you can check the corresponding config file (you have to know how the cluster was installed initially).

### kubeadm

The `kubeadm` tool installs `Kube-Controll-Manager` as a Pod on the master node.
```
# Find the Pod
kubectl get pod -n kube-system
  ...
  ... kube-controller-manager-master ...
  ...

# Go to the Pod
kubectl exec -it -n kube-system kube-controller-manager-master bash

# View the config file for the Kube Controller Manager 
cat /etc/kubernetes/manifests/kube-controller-manager.yaml
```

### manually

View the config file for the Kube Controller Manager 
```
cat /etc/systemd/system/kube-controller-manager.system
```






















































