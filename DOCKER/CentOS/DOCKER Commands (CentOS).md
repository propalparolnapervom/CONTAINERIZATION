
# DOCKER COMMANDS (CentOS)


## OVERALL

**Docker version**
```
docker --version

      Docker version 1.12.1, build 23cf638
```

**Usefull info**
```
docker info
```


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

By viewing status
```
sudo systemctl status docker
```

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

**List images (with full image ID)**
```
docker images --no-trunc

      REPOSITORY                          TAG                 IMAGE ID                                                                  CREATED             SIZE
      hello-world                         latest              sha256:2cb0d9787c4dd17ef9eb03e512923bc4db10add190d3f84af63b744e353a9b34   2 weeks ago         1.848 kB
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

Specific one
```
docker rmi hello-world
```

All ones
```
docker rmi *
```

Multiply ones
```
docker rmi $(docker images -f "label=com.example.version" -q)

      8abc22fbb042
      48e5f45168b9
```


**Filter images**

[Filter docs](https://docs.docker.com/engine/reference/commandline/images/#filtering)

By time (with REPOSITORY name specifying)
```
docker images --filter "before=image1"

docker images --filter "since=image3"
```

**Format output**

[Formatting docs](https://docs.docker.com/engine/reference/commandline/images/#format-the-output)


**Publish image on a registry (Docker Hub, for example**

Authorize
```
docker login

      Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
      Username: ppnp
      Password:
      Login Succeeded
```

Put image to [Docker Hub](https://hub.docker.com/)
```
docker push ppnp/my_first_image
```




## CONTAINERS

### LIST

**List currently running containers**
```
docker ps
```

**List ALL containers (running + stopped)**

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

Execute a command in the already running Docker container
```
docker exec -it gloomy_williams bash
```

**Run container in detach mode**
```
docker run -d prakhar1989/static-site

      4fa8fb2ab6a08b03414056c170ade3aa1a4c76a01de19532e7032a9a51ec1981
```

**Run container in specific network**

Run `ppnp/my_first_image` container in `my_first_network` network via `--net` key
```
docker run --net my_first_network ppnp/my_first_image
```




### STOP

Stop specific container (by its CONTAINER ID or NAMES)
```
docker stop my_name
```



### START

Start specific container (by its CONTAINER ID or NAMES)
```
docker start my_name
```



### REMOVE


**Automatically remove the container when it exits**
```
docker run --rm hello-world
```


**Remove container**

Free diskspace by removing old containers.

Single one (by its CONTAINER ID or NAMES)
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

### LOGS

```
docker logs b36d62f81e30
```

### NAMES

> Name has to be unique for existing containers

Name container during prior its starting
```
docker run --name my_first_name prakhar1989/static-site
```

Name already running container
```
docker rename 54e1d34e7568 my_second_name
```


### PORT HANDLING

See port mapping for specific container (by its CONTAINER ID or NAMES)
```
docker port my_name

      443/tcp -> 0.0.0.0:32772
      80/tcp -> 0.0.0.0:32773
```


Make mapping of container's port 80 to any **random port** of host machine: use `-P` key
```
docker run -P prakhar1989/static-site
```


Make mapping of container's port 80 to **specific port** 2020 of host machine: use `-p` key
```
docker run -p 2020:80 prakhar1989/static-site
```


## NETWORKING

[Networking Docs](https://docs.docker.com/network/)


**View available networks**
```
      #In this example 3 networks shown that are created automatically during Docker installation process
      
docker network ls

      NETWORK ID          NAME                DRIVER              SCOPE
      740ea3f0804c        bridge              bridge              local       <== The bridge network is the network 
                                                                              in which containers are run by default.
      aa18ba83beac        host                host                local
      3db803a66f6d        none                null                local
```


**Display detailed information on network**

Show info regarding `bridge` network
```
docker network inspect bridge
```

**Create a new network**

Create a new bridge network
```
docker network create my_first_network
```

**Remove network**

Remove specific network
```
docker network rm foodtrucks
```

**Run a container in specific network**

Run `ppnp/my_first_image` container in `my_first_network` network via `--net` key
```
docker run --net my_first_network ppnp/my_first_image
```



## VARIABLES

[Default Env vars](https://docs.docker.com/compose/env-file/)


These syntax rules apply to the .env file:
      - Compose expects each line in an env file to be in VAR=VAL format.
      - Lines beginning with # are processed as comments and ignored.
      - Blank lines are ignored.
      - There is no special handling of quotation marks. This means that they are part of the VA

**Use env file with Docker container**

Create env file with random name in following format
```
NAME=sergii
SONAME=not_sergii
```

Use it during Docker container creating:
```
docker run --env-file=env.env hello-world
```

## COPY FILES FROM CONTAINER TO HOST

**Copy file from container to host**
```
docker cp <containerId>:/file/path/within/container /host/path/target
```





