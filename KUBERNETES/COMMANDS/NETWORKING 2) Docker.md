
# Overall


Start a container within different types of network attached.

## none

No network is attached to the `container` in this approach.

Multiple `containers` started in this way are not part of any network, so:
- they can't talk to each other;
- they can't talk to outside world.
```
docker run --network none nginx
```

## host

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








































