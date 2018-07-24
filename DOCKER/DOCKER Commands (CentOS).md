
# DOCKER COMMANDS (CentOS)


## OVERALL INFO

The `docker` daemon always runs as the root user.


## RE-BOOT

**Start**

1. Via system utility, in background.
```
sudo systemctl start docker
```

2. Manually, in foreground.
```
sudo dockerd
```

**Stop**

1. Via system utility
```
sudo systemctl stop docker
```

2. Manually (if it was started via `dockerd` in foreground)
```
just hit Ctl-C
```

**Verification**

Verify that `docker` is installed correctly by running the `hello-world` image.
```
sudo docker run hello-world
```





















