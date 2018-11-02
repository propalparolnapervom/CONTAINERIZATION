# KUBEADM INSTALL K8S CLUSTER

[Official](https://kubernetes.io/docs/setup/independent/create-cluster-kubeadm/) steps of single master cluster creation with kubeadm.

K8S cluster installation steps via Kubeadm

![K8S cluster installation steps](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_cluster_inst_steps.png "K8S cluster installation steps")

# 1. Nodes

Create 3 hosts (VMs, etc) with following hostnames:
  - master
  - worker1
  - worker2

They have to have static IPs and hostnames.


# 2. Docker

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

























