# Overall

> **NOTE**: You must always install `kubelet` manually on Worker Node.
> If you use `kubeadm` tool to install K8S cluster, it doesn't install `kubelet`.
 
# Options

## manually
As you always install `kubelet` manually (`kubeadm` doesn't do it for you, unlike for other components), it's options might be seen via running process.
```
# On the Worker Node
ps -ef | grep kubelet
```










































