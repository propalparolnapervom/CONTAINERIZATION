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







## Container Network

### Overall

When `container` is created, it's placed to the `network namespace`, so it doesn't see other network info on the `host`.

Within a `network NS`, it can have its own:
- veth0 (virtual network interface)
- routing table
- arp table


### Network NS: Create

Create 2 network NS: `red` and `blue`
```
ip netns add red
ip netns add blue
```

Check created network NS
> **NOTE**: By default, you can't see `network NS`, created by `Docker`, as `ip` tool gets info from `/var/run/netns` dir and `Docker` puts corresponding info to `/var/run/docker/netns`. 
> 
> Run: `ln -s /var/run/docker/netns  /var/run/netns`

```
ip netns
```

Check network info: on the `host`
```
ip link
   1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 9001 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
       link/ether 0a:d8:c1:57:fb:a8 brd ff:ff:ff:ff:ff:ff
   3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default 
       link/ether 02:42:c4:db:92:41 brd ff:ff:ff:ff:ff:ff
       
arp
   Address                  HWtype  HWaddress           Flags Mask            Iface
   ip-172-31-0-2.eu-centra  ether   0a:3c:ef:0b:8c:36   C                     eth0
   ip-172-31-0-1.eu-centra  ether   0a:3c:ef:0b:8c:36   C                     eth0

route
   Kernel IP routing table
   Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
   default         ip-172-31-0-1.e 0.0.0.0         UG    100    0        0 eth0
   172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0
   172.31.0.0      0.0.0.0         255.255.240.0   U     0      0        0 eth0
   ip-172-31-0-1.e 0.0.0.0         255.255.255.255 UH    100    0        0 eth0
```

Check network info: within `network NS`
```
ip netns exec red ip link

   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
       
ip netns exec red arp

ip netns exec red route
```

As you can see, from within a `network NS` it's not possible to see current `host` info:
- `eth0` interface;
- `arp` table content;
- `route` table content.

That's becase `network NS` has its own network environment, which is empty (unconfigured) as of now.


### Network NS: Configure Network Connectivity

As of now, `network NS` `red` and `blue` don't have network connectivity:
- between themselves;
- between them and host;
- between them and internet.


#### Config Net Connectivity: Between 2 NS Only (not recommended)

> **NOTE**: This is not recommended way, as it only connects 2 NS.
> 
> This is only for learning purposes.

Just like you connect 2 physical machines using a cable and `eth` interface on each machine, you can connect 2 NS together using something called:
- virtual eth pair;
- virtual cable;
- pipe.

Let's name this a `virtual cable with 2 interfaces on its ends`.

Create `virtual cable` with 2 interfaces on its ends
```
# ip link add <NAME OF INTERF ON CABLE END #1> type veth peer name <NAME OF INTERF ON CABLE END #2>
ip link add veth-red type veth peer name veth-blue
```

Attach 1st end of the `virtual cable` to 1st NS
```
# ip link set <NAME OF INTERF ON CABLE END #1> netns <NS #1>
ip link set veth-red netns red
```

Attach 2nd end of the `virtual cable` to 2nd NS
```
# ip link set <NAME OF INTERF ON CABLE END #2> netns <NS #2>
ip link set veth-blue netns blue
```

Now you can see attached interfaces within each `network NS`
```
ip netns exec red ip link 
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   5: veth-red@if4: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/ether 22:25:1f:70:a9:aa brd ff:ff:ff:ff:ff:ff link-netnsid 1

ip netns exec blue ip link 
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   4: veth-blue@if5: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/ether 66:10:01:d8:0a:c7 brd ff:ff:ff:ff:ff:ff link-netnsid 0
```

As now both `network NS` have network interfaces, we can attach IP to them
> **NOTE**: Add IPs with some network mask only!!!
```
# ip netns exec <NS NAME> ip addr add <IP> dev <INTERF>
ip netns exec red ip addr add 192.168.15.1/24 dev veth-red
ip netns exec blue ip addr add 192.168.15.2/24 dev veth-blue
```

Set both newly configured links up 
```
# ip netns exec <NS> ip link set <INTERF> up
ip netns exec red ip link set veth-red up
ip netns exec blue ip link set veth-blue up
```

Now each `network NS` has links in UP
```
ip netns exec red ip addr
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   5: veth-red@if4: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
       link/ether 22:25:1f:70:a9:aa brd ff:ff:ff:ff:ff:ff link-netnsid 1
       inet 192.168.15.1/32 scope global veth-red
          valid_lft forever preferred_lft forever
       inet6 fe80::2025:1fff:fe70:a9aa/64 scope link 
          valid_lft forever preferred_lft forever

ip netns exec blue ip addr
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   4: veth-blue@if5: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
       link/ether 66:10:01:d8:0a:c7 brd ff:ff:ff:ff:ff:ff link-netnsid 0
       inet 192.168.15.2/32 scope global veth-blue
          valid_lft forever preferred_lft forever
       inet6 fe80::6410:1ff:fed8:ac7/64 scope link 
          valid_lft forever preferred_lft forever 
```

Thus, you can ping 
```
# red -> blue
ip netns exec red ping 192.168.15.2

# blue -> red
ip netns exec blue ping 192.168.15.1
```






Create a bridge network
```
# ip link add <BRIDGE_NETWORK_NAME> type bridge
ip link add v-net-0 type bridge
```

Bring it up
```
ip link set dev v-net-0 up
```

Assign Network CIDR to the Bridge Network
```
ip addr add 10.244.1.1/24 dev v-net-0
```

To attach a network NS (where container is created) to the bridge, we need somethin like pipe: 1 end within a bridge network, 1 end is a container

```
# Create veth pair
ip link add ...

# Attach 1 end to the container
ip link set ...

# Attach other end to the Bridge network
ip link set ...


# Assign IP address
ip -n <namespace> addr add
ip -n <namespace> route add
```




























