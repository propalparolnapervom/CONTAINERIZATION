# Overall

The `scheduler` only decides, which Pod goes on which Node. It doesn't actually places the Pod on the Node - that's the job for the `kubelet`.

# Options

You can specify options for the process of `scheduler` during its start.

You can find options for already running `scheduler` in the following files, depending on how K8S cluster was initially installed.

## kubeadm

The `kubeadm` tool installs `scheduler` as a Pod on the master Node
```
# Find corresponding Pod 
kubectl get pod -n kube-system

# Connect to the Pod
kubectl exec -it -n kube-system <pod_name> bash

# View the file with options
cat /etc/kubernetes/manifests/kube-scheduler.yaml
```

## manually

See options for the running process
```
ps -ef | grep kube-scheduler
```









































