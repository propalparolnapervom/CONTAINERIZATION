

# Container Network

# Overall

When `container` is created, it's placed to the `network namespace`, so it doesn't see other network info on the `host`.

Within a `network NS`, it can have its own:
- veth0 (virtual network interface)
- routing table
- arp table


# Network NS: Create

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


# Network NS: Configure Network Connectivity

As of now, `network NS` `red` and `blue` don't have network connectivity:
- between themselves;
- between them and host;
- between them and internet.


## Config Net Connectivity: Between 2 NS Only (not recommended)

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


## Config Net Connectivity: Between Many NS (recommended)

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
```

> **NOTE**: 
> 
> From point of view of:
>    - `host` - it's just another `interface` (just like `eth0` interface);
>    - `network NS` - it's a `switch`, to which it can connect to;

Now we have to connect `network NS` to this interface/switch (`bridge network`).

We have to use `virtual cables` again.

Delete already existing `virtual cable`, created earlier to connect 2 NS (if any).
```
# If you delete 1 end of virtual cable, the cable is deleted
ip netns exec red ip link delete veth-red
```

Create `virtual cable` with 2 interfaces on its ends, between each NS and `bridge network`.
```
# ip link add <NAME OF INTERF ON CABLE END #1> type veth peer name <NAME OF INTERF ON CABLE END #2>

# NS red <-> bridge network
ip link add veth-red type veth peer name veth-red-brdg

# NS blue <-> bridge network
ip link add veth-blue type veth peer name veth-blue-brdg
```



Use `virtual cable` to attach `red` NS to `bridge network`
```
# ip link set <NAME OF INTERF ON CABLE END #1> netns <NS `red`>
ip link set veth-red netns red

# ip link set <NAME OF INTERF ON CABLE END #2> master <BRIDGE NETWORK (NEW INTERF ON HOST)>
ip link set veth-red-brdg master v-net-0
```

Use `virtual cable` to attach `blue` NS to `bridge network`
```
# ip link set <NAME OF INTERF ON CABLE END #1> netns <NS `blue`>
ip link set veth-blue netns blue

# ip link set <NAME OF INTERF ON CABLE END #2> master <BRIDGE NETWORK (NEW INTERF ON HOST)>
ip link set veth-blue-brdg master v-net-0
```

Now you can see attached interfaces within each `network NS`
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




To be able to reach private network from host
```
ip addr add 192.168.15.3/24 dev v-net-0
```

We can now ping NS `blue` from a `host`
```
ping 192.168.15.2
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
