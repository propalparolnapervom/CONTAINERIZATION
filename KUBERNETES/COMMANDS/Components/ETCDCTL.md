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



# Backup & Restore

This is example for the case, when K8S is installed with help of `kubeadm` tool. 

Thus, controlplane components (including `etcd`) are installed as Pods via manifest file.

## Backup

Make a backup of `etcd`
```
  # ETCDCTL_API=<which API to use> etcdctl \
  # --endpoints=<Optional Flag, points to the address where ETCD is running (127.0.0.1:2379)> \
  # --cacert=<Mandatory Flag (Absolute Path to the CA certificate file)>
  # --cert=<Mandatory Flag (Absolute Path to the Server certificate file)> \
  # --key=<Mandatory Flag (Absolute Path to the Key file) > \
  # snapshot save <path-where-to-save-snapshot>

ETCDCTL_API=3 etcdctl \
--endpoints=https://[127.0.0.1]:2379 \
--cacert=/etc/kubernetes/pki/etcd/ca.crt \
--cert=/etc/kubernetes/pki/etcd/server.crt \
--key=/etc/kubernetes/pki/etcd/server.key \
snapshot save /opt/snapshot-pre-boot.db
```




## Restore

Restore the `etcd` to a new directory from the snapshot

> **Note**: In this case, we are restoring the snapshot to a different directory but in the same server where we took the backup (the controlplane node) As a result, the only required option for the restore command is the `--data-dir`.
```
  # ETCDCTL_API=<which API to use> etcdctl \
  # --data-dir <new directory, where restored data is gonna be placed> \
  # snapshot restore <path to snapshot>

ETCDCTL_API=3 etcdctl \
--data-dir /var/lib/etcd-restored-from-backup \
snapshot restore /opt/snapshot-pre-boot.db
```

Once the directory is restored, update the ETCD configuration to use the restored directory.

> **NOTE**: As `kubeadm` installed this component, we are talking about `/etc/kubernetes/manifests/etcd.yaml` file

Only this path should be updated, as it specifies to which Host dir to look from the container, to save etcd data
```
# old version
  ...
    volumes:
    - hostPath:
        path: /var/lib/etcd
        type: DirectoryOrCreate
      name: etcd-data
  ...

# new version
  ...
    volumes:
    - hostPath:
        path: /var/lib/etcd-restored-from-backup
        type: DirectoryOrCreate
      name: etcd-data
  ...
```

When this file is updated, the ETCD pod is automatically re-created as this is a static pod placed under the `/etc/kubernetes/manifests` directory.

You can't work with it, until it will be up and running (including `kubectl` requests to API).






























