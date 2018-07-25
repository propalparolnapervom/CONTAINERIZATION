
# DOCKER COMMANDS (CentOS)


## OVERALL INFO

The `docker` daemon always runs as the root user.

Docker creates a new container from the image every time it runs. So no changes will be available after container booting.



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

ps -ef | grep docker

      root      5648     1  3 14:27 ?        00:00:00 /usr/bin/dockerd
      root      5654  5648  0 14:27 ?        00:00:00 docker-containerd --config /var/run/docker/containerd/containerd.toml
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


**Delete images**
```
docker rmi hello-world
```




## CONTAINERS

### LIST

**List currently running containers**
```
docker ps
```

**List history of running containers**

All of them left on the disk, so some diskspace is wasted.
```
docker ps -a

      CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                          PORTS               NAMES
      cf3638170830        busybox             "echo 'hello from bu…"   About a minute ago   Exited (0) About a minute ago                       unruffled_wright
      1a3b01f12d75        busybox             "echo 'hello from bu…"   About a minute ago   Exited (0) About a minute ago                       cocky_jang
      51b78eb83420        busybox             "uname -a"               11 minutes ago       Exited (0) 11 minutes ago                           elegant_meninsky
      47f12249f648        busybox             "pwd"                    12 minutes ago       Exited (0) 12 minutes ago                           pensive_brown
```


### RUN

**Run container**

Run a Docker container based on specific image (busybox, for instance)
```
docker run busybox
```

During this process Docker client:

      - finds the image (busybox in this case)
      
      - loads up the container
      
      - runs a command in that container
      
      - exits
      
      
**Run container and single command whithin it**

So the same with some command will run that command in container
```
docker run busybox echo "hello from busybox"

      hello from busybox
```

**Run container and multiply commands whithin it**

Running the run command with the -it flags attaches us to an interactive tty in the container. 
```
docker run -it busybox
```

### REMOVE

**Remove container**

Free diskspace by removing old containers.

Single one
```
docker rm 54f1dceca0a7
```

Multiply ones
```
      #Flags
      # -q: only returns the numeric IDs
      # -f: filters output based on conditions provided
      # -a: show all
      
docker rm $(docker ps -a -q -f status=exited)
```









