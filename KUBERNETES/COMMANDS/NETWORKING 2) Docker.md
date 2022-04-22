
# Network Types

When Docker is installed, it creates 3 types of network
```
docker network ls

  842770696b76   bridge    bridge    local
  4fa0e0187a85   host      host      local
  08335defe53c   none      null      local
```

Start a container within different types of network attached.

## Type #1: none

No network is attached to the `container` in this approach.

Multiple `containers` started in this way are not part of any network, so:
- they can't talk to each other;
- they can't talk to outside world.
```
docker run --network none nginx
```

## Type #2: host

The `container` is attached to the `host` network.

There's no network isolation between `host` and `container`.

```
docker run --network host nginx 
```

In this case, if you start a `container` that listens to the port `80`, it will be available on the `host` on the port `80` - with no additional configuration.

```
docker run --network host nginx 

netstat -tulpn | grep :80
  tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      784/nginx: master p 
  tcp6       0      0 :::80                   :::*                    LISTEN      784/nginx: master p
```

But you can not start multiple similar `containers`, all of each listen to port `80`, as each of them will try to take this port on the `host`.

```
# If you try to run the same container (2nd on the same host)
docker run --network host nginx

  ...
  /docker-entrypoint.sh: Configuration complete; ready for start up
  2022/04/22 11:27:07 [emerg] 1#1: bind() to 0.0.0.0:80 failed (98: Address already in use)
  nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
  ...
```

## Type #3: bridge

A `bridge network` is a `internal private network`, created by Docker, to which each `container` can connect and get IP adress.
```
docker run nginx
```

By default, the `bridge network` created by Docker is `172.17.0.0`



# How Created: Bridge Network

When Docker is installed, it creates 3 types of network - `bridge` among them
```
docker network ls

  842770696b76   bridge    bridge    local
  4fa0e0187a85   host      host      local
  08335defe53c   none      null      local
```

Docker calls this network `bridge`, but on the Host its called `docker0`
```
ip link

  ...
  3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN mode DEFAULT group default 
      link/ether 02:42:0e:7e:64:56 brd ff:ff:ff:ff:ff:ff
  ...
```

Thats because following command is in use by Docker during installation:
```
ip link add docker0 type bridge
```

This is the same process, as was described in the `Network Namespaces` block.

So, as always in case of bridge networks, at the same time it is:
- just another `interface` from the p.o.v. of `host` (and its name is `docker0`);
- a `switch` to the `NS`/`containers` within the `host` (and its name is `bridge`);

As this is just an interface, the IP was assigned to it by default during Docker installation:
```
ip add show docker0

  3: docker0: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc noqueue state DOWN group default 
      link/ether 02:42:0e:7e:64:56 brd ff:ff:ff:ff:ff:ff
      inet **172.17.0.1**/16 brd 172.17.255.255 scope global docker0
         valid_lft forever preferred_lft forever
      inet6 fe80::42:eff:fe7e:6456/64 scope link 
         valid_lft forever preferred_lft forever
```


# How Created: NS

## NS Creation

Whenever a `container` is created, Docker creates a NS for it.
> **NOTE**: Some additional steps must be done for each new container to make NS created by Docker visible to `ip` tool
```
##########
# Tab: 1st
##########

# See NS
ip netns 


##########
# Tab: 2nd
##########

# Start container in 2nd tab
docker run nginx


##########
# Tab: 1st
##########

# Find the ID of the container
docker ps
CONTAINER_ID="0fa76a99b97e"

# Get PID of the container's process on the Host level
PID_OF_CONTAINER_PROCESS=$(docker inspect -f '{{.State.Pid}}' ${CONTAINER_ID}) && echo ${PID_OF_CONTAINER_PROCESS}

# Create netns directory, which `ip` tool is looking to
mkdir -p /var/run/netns/

# Create the namespace softlink
ln -sfT /proc/${PID_OF_CONTAINER_PROCESS}/ns/net /var/run/netns/${CONTAINER_ID}

# See NS
ip netns 
  0fa76a99b97e (id: 0)

# See info within this NS
ip netns exec ${CONTAINER_ID} ip addr
  1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
      link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
      inet 127.0.0.1/8 scope host lo
         valid_lft forever preferred_lft forever
  13: eth0@if14: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
      link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
      inet 172.17.0.2/16 brd 172.17.255.255 scope global eth0
         valid_lft forever preferred_lft forever
         
ip netns exec ${CONTAINER_ID} route
  Kernel IP routing table
  Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
  default         172.17.0.1      0.0.0.0         UG    0      0        0 eth0
  172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 eth0
```


## NS Attachment to the Bridge Network

> **NOTE**: In this context, `network NS` = `container`


As we saw it within `Network Namespaces` block, a `virtual cable` has to be created for the start.

Here its one end, attached to the `bridge network`:
```
# 1st end of `virtual cabel`, on `bridge network`
ip link
  ...
  14: **veth5a39484@if13**: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master docker0 state UP mode DEFAULT group default 
      link/ether 16:51:93:be:52:b9 brd ff:ff:ff:ff:ff:ff link-netnsid 0
  ...

# 2nd end of `virtual cabel`, on `container`
ip netns exec ${CONTAINER_ID} ip link
  ...
  13: **eth0@if14**: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT group default 
      link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
  ...
  
  
# P.S. Here you can even see the IP, assigned to the container
ip netns exec ${CONTAINER_ID} ip addr
  ...
  13: eth0@if14: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
      link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0
      inet **172.17.0.2**/16 brd 172.17.255.255 scope global eth0
         valid_lft forever preferred_lft forever
  ...
```


## NS Port Forwarding

So all `containers` started on the same `host`, are running within a `private network` with help of `bridge network`.

Let assume all of them are running `nginx`
```
docker run nginx
```

It is available from within a private network
```
# curl http://<PRIVATE-IP-OF-POD>:<POD-PORT>

# From another container (part of bridge network)
curl http://172.17.0.2:80

# From host (part of bridge network)
curl http://172.17.0.2:80
```

But it's not available from the outside
```
# curl http://<PUBLIC-IP-OF-HOST-WHERE-POD-IS-RUNNING>:<POD-PORT>

# It's not available from outside of the host server
curl http://3.71.33.236:80
  curl: (7) Failed to connect to 3.71.33.236 port 80: Connection refused

# There's nothing on the `host`, listening to port 80
netstat -tulpn | grep :80
```

Docker has a command, which maps `pod port` to `host port`
```
# docker run -p <HOST-PORT-MAPPED-TO-POD-PORT>:<POD-PORT> nginx
docker run -p 8080:80 nginx
```

Now the Pod available outside, via `host` port
```
# curl http://<PUBLIC-IP-OF-HOST-WHERE-POD-IS-RUNNING>:<HOST-PORT>
curl http://3.71.33.236:8080

# There's a process listening to `host` port
netstat -tulpn | grep :8080
  tcp        0      0 0.0.0.0:8080            0.0.0.0:*               LISTEN      3504/docker-proxy   
  tcp6       0      0 :::8080                 :::*                    LISTEN      3510/docker-proxy
```

But what Docker did under the hood?

It added `iptables` rule, that forwards traffic on the `host`: `<HOST-PORT>` -> `<PRIVATE-IP-OF-POD>:<POD-PORT>`
```
# iptables \
# -t nat \
# -A DOCKER \
# -j DNAT \
# -p tcp \
# --dport <HOST-PORT> \
# --to-destination <PRIVATE-IP-OF-POD>:<POD-PORT>

iptables \
-t nat \
-A DOCKER \
-j DNAT \
-p tcp \
--dport 8080 \
--to-destination 172.17.0.3:80
```

You can see the `iptables` rule, created by Docker, in the list of `iptables` rules
```
iptables -nvL -t nat

  Chain DOCKER (2 references)
   pkts bytes target     prot opt in     out     source               destination         
      0     0 RETURN     all  --  docker0 *       0.0.0.0/0            0.0.0.0/0           
      0     0 DNAT       tcp  --  !docker0 *       0.0.0.0/0            0.0.0.0/0            **tcp dpt:8080 to:172.17.0.3:80**
```
















