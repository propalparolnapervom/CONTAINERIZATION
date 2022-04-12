# API-SERVER COMMANDS

## Options

There are a lot of different options that migth be configured for `api-server`.

If you're looking at the already existing K8S cluster, those options could be found as keys for running process.
```
ps -ef | grep kube-apiserver
```

As an alternate, those options are contained within a corresponding config file.

The location of the config file depends on how K8S cluster was installed initially.

### kubeadm

If K8S cluster was installed via `kubeadm` tool, `api-server` is installed as a Pod on the master node.
```
# Find the Pod
kubectl get pods -n kube-system

  ...
  ... kube-apiserver-master ...
  ...

# Go to the Pod
kubectl exec -it -n kube-system kube-apiserver-master bash

# See the config file for API-Server
cat /etc/kubernetes/manifests/kube-apiserver.yaml
```

### manually

If K8S cluster was installed manually, then `api-server` was started manually as well, with config file located at
```
cat /etc/systemd/system/kube-apiserver.service
```



































