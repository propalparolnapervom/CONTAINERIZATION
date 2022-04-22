

# Container Network

# Overall

When `container` is created, it's placed to the `network namespace`, so it doesn't see other network info on the `host`.

Within a `network NS`, it can have its own:
- veth0 (virtual network interface)
- routing table
- arp table


# 1. Network NS: Create

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


# 2. Network NS: Configure Network Connectivity

As of now, `network NS` `red` and `blue` don't have network connectivity:
- between themselves;
- between them and host;
- between them and internet.


## 2.1. Config Net Connectivity: Between 2 NS Only (NOT RECOMMENDED)

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

Now, you can ping each other NS
```
# red -> blue
ip netns exec red ping 192.168.15.2

# blue -> red
ip netns exec blue ping 192.168.15.1
```

Pay attention, that now both NS have `arp` info, which is 1) exist 2) differs from host
```
# host
arp
   Address                  HWtype  HWaddress           Flags Mask            Iface
   ip-172-31-0-2.eu-centra  ether   0a:3c:ef:0b:8c:36   C                     eth0
   ip-172-31-0-1.eu-centra  ether   0a:3c:ef:0b:8c:36   C                     eth0

# red
ip netns exec red arp
   Address                  HWtype  HWaddress           Flags Mask            Iface
   192.168.15.2             ether   66:10:01:d8:0a:c7   C                     veth-red

# blue
ip netns exec blue arp
   Address                  HWtype  HWaddress           Flags Mask            Iface
   192.168.15.1             ether   22:25:1f:70:a9:aa   C                     veth-blue
```

Yes, we now have network connectivity betwee `red` and `blue` NS.

But what if there are a lot of such `network NS` (containers)?

Like in a real world, they should be connected to a `private network`.




## 2.2. Config Net Connectivity: NS <-> NS (RECOMMENDED)

> **NOTE**: The `bridge network` is used as a `switch` to connect many NS, instead of direct connection between 2 NS.

So we have many `network NS`, that should be connected into `private network`.

To create a `physical network`, you need a `Switch`.

To create a `virtual network`, you need a `virtual Switch`.

Let's create a `virtual switch` inside of our `host`, then and connect all `network NS` to it.

To create a `virtual switch` there're some native solutions like:
- Linux Bridge;
- Open vSwitch.

We will use `Linux Bridge` in our case.

To create a `virtual switch` on the host, we create a new interface
```
# Create 
#   ip link add <INTERF NAME> type bridge
ip link add v-net-0 type bridge

# Bring it up
ip link set dev v-net-0 up

# Check the bridge network, no interfaces so far
brctl show
   bridge name	bridge id		STP enabled	interfaces
   v-net-0		8000.000000000000	no
```

> **NOTE**: 
> 
> From point of view of:
>    - `host` - it's just another `interface` (just like `eth0` interface);
>    - `network NS` - it's a `switch`, to which it can connect to;

Now we have to connect `network NS` to this interface/switch (`bridge network`).

We have to use `virtual cables`.

Create `virtual cable` with 2 interfaces on its ends, between each NS and `bridge network`.
```
# ip link add <NAME OF INTERF ON CABLE END #1> type veth peer name <NAME OF INTERF ON CABLE END #2>

# NS red <-> bridge network
ip link add veth-red type veth peer name veth-red-brdg

# NS blue <-> bridge network
ip link add veth-blue type veth peer name veth-blue-brdg
```


Use `virtual cable` to attach NS to `bridge network`
```
#############################
# NS red <-> bridge network
#############################

# ip link set <NAME OF INTERF ON CABLE END #1> netns <NS `red`>
ip link set veth-red netns red

# ip link set <NAME OF INTERF ON CABLE END #2> master <BRIDGE NETWORK (NEW INTERF ON HOST)>
ip link set veth-red-brdg master v-net-0


#############################
# NS blue <-> bridge network
#############################

# ip link set <NAME OF INTERF ON CABLE END #1> netns <NS `blue`>
ip link set veth-blue netns blue

# ip link set <NAME OF INTERF ON CABLE END #2> master <BRIDGE NETWORK (NEW INTERF ON HOST)>
ip link set veth-blue-brdg master v-net-0
```


Check that `bridge network` now has 2 interfaces attached
```
# Check the bridge network, no interfaces so far
brctl show

   bridge name	bridge id		   STP enabled	  interfaces
   docker0		8000.02420e7e6456	no		
   v-net-0		8000.2ea1e41a9519	no		        veth-blue-brdg
                                               veth-red-brdg
```

Check that NS now has interface attached
```
ip netns exec red ip link 
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   12: veth-red@if11: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/ether 3e:e9:d8:e1:a7:ab brd ff:ff:ff:ff:ff:ff link-netnsid 0

ip netns exec blue ip link
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   10: veth-blue@if9: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
       link/ether c6:a5:d6:8e:fb:31 brd ff:ff:ff:ff:ff:ff link-netnsid 1
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
# On the host
ip link set veth-red-brdg up
ip link set veth-blue-brdg up

# Within NS
#   ip netns exec <NS> ip link set <INTERF> up
ip netns exec red ip link set veth-red up
ip netns exec blue ip link set veth-blue up
```

Now each `network NS` has links in UP
```
ip netns exec red ip addr
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   12: veth-red@if11: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
       link/ether 3e:e9:d8:e1:a7:ab brd ff:ff:ff:ff:ff:ff link-netnsid 0
       inet 192.168.15.1/24 scope global veth-red
          valid_lft forever preferred_lft forever
       inet6 fe80::3ce9:d8ff:fee1:a7ab/64 scope link 
          valid_lft forever preferred_lft forever

ip netns exec blue ip addr
   1: lo: <LOOPBACK> mtu 65536 qdisc noop state DOWN group default qlen 1000
       link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
   10: veth-blue@if9: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
       link/ether c6:a5:d6:8e:fb:31 brd ff:ff:ff:ff:ff:ff link-netnsid 1
       inet 192.168.15.2/24 scope global veth-blue
          valid_lft forever preferred_lft forever
       inet6 fe80::c4a5:d6ff:fe8e:fb31/64 scope link 
          valid_lft forever preferred_lft forever
```


Check the policy for `FORWARD` chain within `iptables`
```
# If it's DROP for FORWARD chain
iptables -L | grep policy
   Chain INPUT (policy ACCEPT)
   Chain FORWARD (policy DROP)
   Chain OUTPUT (policy ACCEPT)

# Make it ACCEPT
iptables --policy FORWARD ACCEPT

# Check again
iptables -L | grep policy
```


Now, you can ping each other NS
```
# red -> blue
ip netns exec red ping 192.168.15.2

# blue -> red
ip netns exec blue ping 192.168.15.1
```


Pay attention, that now both NS have `arp` info, which is 1) exist 2) differs from host
```
# host
arp
   Address                  HWtype  HWaddress           Flags Mask            Iface
   ip-172-31-0-2.eu-centra  ether   0a:3c:ef:0b:8c:36   C                     eth0
   ip-172-31-0-1.eu-centra  ether   0a:3c:ef:0b:8c:36   C                     eth0

# red
ip netns exec red arp
   Address                  HWtype  HWaddress           Flags Mask            Iface
   192.168.15.2             ether   66:10:01:d8:0a:c7   C                     veth-red

# blue
ip netns exec blue arp
   Address                  HWtype  HWaddress           Flags Mask            Iface
   192.168.15.1             ether   22:25:1f:70:a9:aa   C                     veth-blue
```


## 2.3. Config Net Connectivity: NS <-> Host

Yes, now we have network connectivity between `red` and `blue` NS via `bridge network`.

But all of them form `private network`, which is not reachable for `host`.

```
# host -> blue
ping 192.168.15.2
```

To be able to reach the `private network` from `host` we can assign IP for the interface, as it is present both within `host` and `private network` 
```
ip addr add 192.168.15.3/24 dev v-net-0
```

We can now ping NS and `host`
```
# host -> blue
ping 192.168.15.2

# blue -> host
ip netns exec blue ping 192.168.15.3
```



## 2.4. Config Net Connectivity: NS <-> Internet

Yes, now we have network connectivity between NS and `host`.

But Internet is still unreachable from the NS.
```
ip netns exec red ping 8.8.8.8

   connect: Network is unreachable
```

The Internet available from the `host`, tho.

Thus, route table within each NS must point to the GW, from which Internet is reachable.
```
# Add default GW to all NS, that will point to the IP which is:
#    - real interface on the host
#    - within bridge private network
ip netns exec red ip route add default via 192.168.15.3
ip netns exec blue ip route add default via 192.168.15.3
```

But it's still not enough: network is no longer "unreachable", but there's still time out.
```
ip netns exec red ping 8.8.8.8


```

That's because when you try to reach external network from your private network, external network doesn't know your private adresses.

The `NAT` should be used between `private network` and `external network` in order to let external network know, where to send responces.

Thus, enable `NAT` on the `host` for your `private network`, which is `bridge network`.
```
iptables -t nat -A POSTROUTING -s 192.168.15.0/24 -j MASQUERADE
```

Now Internet is reachable from the both NS.
```
ip netns exec red ping 8.8.8.8
ip netns exec blue ping 8.8.8.8
```
































