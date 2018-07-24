
# DOCKER COMMANDS (CentOS)


## OVERALL INFO

The `docker` daemon always runs as the root user.


## RE-BOOT DOCKER DAEMON

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
Ctrl+C
```

**Verification**

Verify that `docker` is installed correctly by running the `hello-world` image.
```
docker run hello-world
```



## IMAGES

[Docker Hub](https://hub.docker.com/explore/)

**List images**

See a list of all images on your system
```
docker images

      REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
      hello-world         latest              2cb0d9787c4d        13 days ago         1.85kB
```


**Download images**

```
docker pull busybox

      Using default tag: latest
      latest: Pulling from library/busybox
      75a0e65efd51: Pull complete
      Digest: sha256:d21b79794850b4b15d8d332b451d95351d14c951542942a816eea69c9e04b240
      Status: Downloaded newer image for busybox:latest
```















