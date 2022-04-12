# Overall


Once `etcd` is installed and started, it listens on port (`2379` by default).


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









































