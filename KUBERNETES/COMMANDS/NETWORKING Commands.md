# NETWORKING

[Docs: `ip` tool cheat sheet](https://access.redhat.com/sites/default/files/attachments/rh_ip_command_cheatsheet_1214_jcs_print.pdf)


## Layer 2 (MAC Address)

You are on the `controlplane` server, which is communicating with `node01` server. Get `MAC adress`, assigned to `node01` server.
> **NOTE**: This is info from ARP table for IPv4
```
# While you are on the `controlplane` server

ip neigh

arp node01
```

### Show

Show link state
```
ip link show docker0
```


## Layer 3 (IP Address)

### List

Get info for `eth0` interface
```
ip addr show eth0
```

Show routing table info
```
ip route

   # OR
   
route
```

Show default gateway
```
ip route show default
```

Check if `ip_forward` is enabled
```
# If this file is updated, it applies till next OS reboot
cat /proc/sys/net/ipv4/ip_forward

   # OR
   
sysctl net.ipv4.ip_forward
```

### Add

Add `192.168.1.10` IP to `eth0` interface
```
ip addr add 192.168.1.10/24 dev eth0
```

## Layer 4 (Transport)

[Docs: `netstat` output explained](https://www.howtogeek.com/513003/how-to-use-netstat-on-linux/)



### Sockets

List all sockets
- The “Active Internet” section lists the connected external connections and local sockets listening for remote connection requests.
- The “UNIX domain” section lists the connected and listening internal connections. 
```
netstat -a | less
```

Listing Sockets by `Type`
```
# TCP only
netstat -at | less

# UDP only
netstat -au | less
```

Listing Sockets by `State`
```
# Listening or Waiting state (all)
netstat -l | less

# Listening or Waiting state (TCP only)
netstat -lt | more

```

Listing Sockets with `PID/Program name`
```
# PID/Program_name (all)
netstat -p | less

# PID/Program_name (TCP only)
netstat -pat | less
```

Listing `Numeric Addresses`
> **NOTE**: display the local and remote addresses as IP addresses instead of their resolved domain and hostnames
```
netstat -an | less
```


### Specific Requests

Finding the Port Used by a Process
```
netstat -tulpn | grep scheduler
```

List all connections, which are connected to the `etcd` via `2380` port
```
netstat -anp | grep etcd | grep 2380
```









## Namespace

> **NOTE**: By default, you can't see `network NS`, created by `Docker`.

The `ip` tool gets info from `/var/run/netns` dir. 

`Docker` puts corresponding info to `/var/run/docker/netns` dir, but never creates a symlink to `/var/run/netns` dir.

Thus, namespaces, created by `Docker`, can't be seen via `ip` tool by default.

To fix this, create the symlink instead of Docker

```
ln -s /var/run/docker/netns  /var/run/netns 
```

### List

List current network namespaces
```
ip netns
```

### Create

Create NS `red`
```
ip netns add red
```



### Exec

Run command within `red` network NS
```
# Run any command
#   ip netns exec <NS_NAME> <ANY_COMMAND>
ip netns exec red ip link
ip netns exec red ping www.google.com

# Run `ip` command
#   ip -n <NS_NAME> <KEYS_FOR_IP_COMMAND>
ip -n red link
```


































