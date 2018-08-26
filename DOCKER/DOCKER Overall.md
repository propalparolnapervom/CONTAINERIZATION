# DOCKER OVERALL

## USEFUL INFO
  - [Docker Overview](https://docs.docker.com/engine/docker-overview/)
  - [Docker Hub](https://hub.docker.com/) - repository of Docker images
  - [UnionFS and Docker](https://medium.com/@paccattam/drooling-over-docker-2-understanding-union-file-systems-2e9bf204177c)


## TUTORIALS

  - [Docker Classroom](https://training.play-with-docker.com/)
  - [http://docker-curriculum.com/](http://docker-curriculum.com/)




## ARCHITECTURE

Docker Engine is a client-server application with these major components:

  - A server which is a type of long-running program called a daemon process (the `dockerd` command).

  - A **REST API** which specifies interfaces that programs can use to talk to the daemon and instruct it what to do.

  - A command line interface (CLI) client (the `docker` command).



## THE UNERLYING TECHNOLOGY

Docker is written in `Go` and takes advantage of several features of the Linux kernel to deliver its functionality.

### NAMESPACES

Docker uses a technology called **namespaces** to provide the isolated workspace called the **container**. 

> When you run a container, Docker creates a set of namespaces for that container.

These namespaces provide a layer of isolation. 

Each aspect of a container runs in a separate namespace and its access is limited to that namespace.

Docker Engine uses namespaces such as the following on Linux:

  - **The `pid` namespace**: Process isolation (PID: Process ID).
  - **The `net` namespace**: Managing network interfaces (NET: Networking).
  - **The `ipc` namespace**: Managing access to IPC resources (IPC: InterProcess Communication).
  - **The `mnt` namespace**: Managing filesystem mount points (MNT: Mount).
  - **The `uts` namespace**: Isolating kernel and version identifiers. (UTS: Unix Timesharing System).


### CONTROL GROUPS

Docker Engine on Linux also relies on another technology called **control groups** (`cgroups`). 

A `cgroup` limits an application to a specific set of resources. 

`cgroups` allow Docker Engine to share available hardware resources to containers and optionally enforce limits and constraints. 

For example, you can limit the memory available to a specific container.


### UNION FILE SYSTEMS

Union FS, or `UnionFS`, are FSs that operate by creating layers, making them very lightweight and fast. 

Docker Engine uses `UnionFS` to provide the building blocks for containers. 

Docker Engine can use multiple UnionFS variants, including `AUFS`, `btrfs`, `vfs`, and `DeviceMapper`.


### CONTAINER FORMAT

Docker Engine combines the namespaces, control groups, and UnionFS into a wrapper called a **container format**. 

The default container format is `libcontainer`. 

In the future, Docker may support other container formats by integrating with technologies such as `BSD Jails` or `Solaris Zones`.






## OVERALL

The `docker` daemon always runs as the root user.
____________________

Docker creates a new container from the image every time it runs. So no changes will be available after container booting.

____________________

What happens each time you run following command
```
docker run -i -t ubuntu /bin/bash
```

When you run this command, the following happens (assuming you are using the default registry configuration):

  1. If you do not have the ubuntu image locally, Docker pulls it from your configured registry, as though you had run docker pull ubuntu manually.

  2. Docker creates a new container, as though you had run a docker container create command manually.

  3. Docker allocates a read-write filesystem to the container, as its final layer. This allows a running container to create or modify files and directories in its local filesystem.

  4. Docker creates a network interface to connect the container to the default network, since you did not specify any networking options. This includes assigning an IP address to the container. By default, containers can connect to external networks using the host machine’s network connection.

  5. Docker starts the container and executes /bin/bash. Because the container is running interactively and attached to your terminal (due to the -i and -t flags), you can provide input using your keyboard while the output is logged to your terminal.

  6. When you type exit to terminate the /bin/bash command, the container stops but is not removed. You can start it again or remove it.

___________________

**Docker Images Layers**


A docker container image is created using a `dockerfile`. Every line in a `dockerfile` will create a *layer*. Consider the following dummy example. This will create a final image where the total number of layers will be X+3.
```
FROM ubuntu             #This has its own number of layers say "X"
MAINTAINER FOO          #This is one layer 
RUN mkdir /tmp/foo      #This is one layer 
RUN apt-get install vim #This is one layer 
```

Basically, a *layer*, or *image layer* is a change on an image, or an **intermediate image**. Every command you specify (`FROM`, `RUN`, `COPY`, etc.) in your `Dockerfile` causes the previous image to change, thus creating a new layer.

The concept of layers comes in handy at the time of building images. Because layers are intermediate images, if you make a change to your Dockerfile, docker will build only the layer that was changed and the ones after that. This is called *layer caching*.

____________________

**VM vs. Container**
  - The VM is a *hardware abstraction*: it takes physical CPUs and RAM from a host, and divides and shares it across several smaller virtual machines. There is an OS and application running inside the VM, but the virtualization software usually has no real knowledge of that.
  - A container is an *application abstraction*: the focus is really on the OS and the application, and not so much the hardware abstraction. Many customers actually use both VMs and containers today in their environments and, in fact, may run containers inside of VMs.

____________________

**Therminology**

  - **Images** - The blueprints of our application which form the basis of containers. In the demo above, we used the docker pull command to download the busybox image.
  - **Containers** - Created from Docker images and run the actual application. We create a container using `docker run` which we did using the busybox image that we downloaded. A list of running containers can be seen using the `docker ps` command.
  - **Docker Daemon** - The background service running on the host that manages building, running and distributing Docker containers. The daemon is the process that runs in the OS to which clients talk to.
  - **Docker Client** - The command line tool that allows the user to interact with the daemon. More generally, there can be other forms of clients too - such as Kitematic which provide a GUI to the users.
  - **Docker Hub** - A registry of Docker images. You can think of the registry as a dir of all available Docker images. If required, one can host their own Docker registries and can use them for pulling images.
  
____________________

**Processes**

  - **dockerd** - The Docker daemon itself. The highest level component in your list and also the only 'Docker' product listed. Provides all the nice UX features of Docker.

  - **(docker-)containerd** - Also a daemon, listening on a Unix socket, exposes gRPC endpoints. Handles all the low-level container management tasks, storage, image distribution, network attachment, etc...

  - **(docker-)containerd-ctr** - A lightweight CLI to directly communicate with containerd. Think of it as how 'docker' is to 'dockerd'.

  - **(docker-)runc** - A lightweight binary for actually running containers. Deals with the low-level interfacing with Linux capabilities like cgroups, namespaces, etc...

  - **(docker-)containerd-shim** - After runC actually runs the container, it exits (allowing us to not have any long-running processes responsible for our containers). The shim is the component which sits between containerd and runc to facilitate this. Also:
    - It allows you to run daemonless containers.
    - STDIO and other FDs are kept open in the event that containerd and docker die.
    - Reports the containers exit status to containerd.
____________________

How the docker container creation process works (from docker run to runc)

  - [Explanation](https://prefetch.net/blog/2018/02/19/how-the-docker-container-creation-process-works-from-docker-run-to-runc/)


____________________

**Ecosystem**

In the Docker ecosystem cxcept Docker Client there are a bunch of other open-source tools which play very nicely with Docker. A few of them are
  - [Docker Machine](https://docs.docker.com/machine/) - Create Docker hosts on your computer, on cloud providers, and inside your own data center
  - [Docker Compose](https://docs.docker.com/compose/) - A tool for defining and running multi-container Docker applications.
  - [Docker Swarm](https://docs.docker.com/swarm/) - A native clustering solution for Docker





