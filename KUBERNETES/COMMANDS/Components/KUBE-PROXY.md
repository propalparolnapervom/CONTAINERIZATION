# Overall

In the K8S cluster each Pod can reach any other Pod. This is due to deploying a Pod Networking solution to the cluster.

A `Pod Network` is internal virtual network which spands across all Nodes in the cluster.

The Service is used in front of the Pod, to let the Pod changing its IP, for example. To do that, Sevice:
- has its own IP
- forwards traffic to the Pod

But the Service is not an actual thing, so it's can't join the `Pod Network` - it's not a container (like Pod), it doesn't have an interfaces or activaly listening processes.

The Service is virtual component that only lives in the memory of cluster. 

But how the Service can be reached from any Node then? That's when `kube-proxy` comes in.

The `kube-proxy` is the process on the each Node, which job is:
- listen to the new Services added;
- each time a Service is added, create a new rule on the Node to forward traffic from those Services to backend Pod:
  - for example, updating `iptables` by adding line `<IP_SERVICE> <IP_BACKEND_POD>`, which would forward all traffic that goes to specific Service, to corresponding Pod.


# Options

You can check the options for the `kube-proxy`, depending on how K8S cluster was installed initially.

## kubeadm
The `kubeadm` tool installs `kube-proxy` as a Pod on **each** Node, as a `DeamonSet`.
```
# Find the Pod
kubectl get pods -n kube-system 
  ...
  ... kube-proxy-lxtfl ...
  ... kube-proxy-fkdke ...
  ...

# Connect to the Pod
kubectl exec -it -n kube-system kube-proxy-lxtfl bash

# View the file with options
cat /etc/kubernetes/manifests/kube-proxy.yaml
```

## manually
View options for running process
```
ps -ef | grep kube-proxy
```










































