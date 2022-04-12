# Overall

`etcd` is a distributed key-value store.

Once `etcd` is installed and started, it listens on port (`2379` by default).

It is used by Kubernetes.

If you install Kubernetes:
- manually (from the scratch) - then you have to download the bin for `etcdctl` and start it, to make it listen a port;
- via `kubeadm` (tool for installing k8s) - then the tool installs `etcdctl` for you, by starting a `etcd-master` Pod within `kube-system` NS.

# NOTE!!!

## Version

`etcdctl` can interact with ETCD Server using 2 API versions - Version 2 and Version 3.  By default its set to use Version 2. Each version has different sets of commands.

To set the right version of API set the environment variable ETCDCTL_API command
```
export ETCDCTL_API=3
```

## Certificate

Apart from that, you must also specify path to certificate files so that ETCDCTL can authenticate to the ETCD API Server. The certificate files are available in the etcd-master at the following path. We discuss more about certificates in the security section of this course. So don't worry if this looks complex:
```
--cacert /etc/kubernetes/pki/etcd/ca.crt     
--cert /etc/kubernetes/pki/etcd/server.crt     
--key /etc/kubernetes/pki/etcd/server.key
```

## So 

So for the commands below to work you must specify the ETCDCTL API version and path to certificate files:
```
kubectl exec etcd-master -n kube-system -- sh -c "ETCDCTL_API=3 etcdctl get / --prefix --keys-only --limit=10 --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/server.crt  --key /etc/kubernetes/pki/etcd/server.key"
```


# Get

List the value of specific key
```
etcdctl get key1
```

List all keys
```
etcdctl get / --prefix -keys-only
```

# Set

Add key-value pair (for example, `key1` key with its value `value1`)
```
etcdctl set key1 value1
```









































