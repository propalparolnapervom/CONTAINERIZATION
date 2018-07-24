## DOCKER OVERALL


### TUTORIALS

  - [Docker Classroom](https://training.play-with-docker.com/)
  - [http://docker-curriculum.com/](http://docker-curriculum.com/)


### USEFUL INFO

  - [Docker Hub](https://hub.docker.com/) - repository of Docker images



### OVERALL INFO

VM vs. Container:
  - The VM is a *hardware abstraction*: it takes physical CPUs and RAM from a host, and divides and shares it across several smaller virtual machines. There is an OS and application running inside the VM, but the virtualization software usually has no real knowledge of that.
  - A container is an *application abstraction*: the focus is really on the OS and the application, and not so much the hardware abstraction. Many customers actually use both VMs and containers today in their environments and, in fact, may run containers inside of VMs.


  - **Images** - The blueprints of our application which form the basis of containers. In the demo above, we used the docker pull command to download the busybox image.
  - **Containers** - Created from Docker images and run the actual application. We create a container using `docker run` which we did using the busybox image that we downloaded. A list of running containers can be seen using the `docker ps` command.
  - **Docker Daemon** - The background service running on the host that manages building, running and distributing Docker containers. The daemon is the process that runs in the OS to which clients talk to.
  - **Docker Client** - The command line tool that allows the user to interact with the daemon. More generally, there can be other forms of clients too - such as Kitematic which provide a GUI to the users.
  - **Docker Hub** - A registry of Docker images. You can think of the registry as a dir of all available Docker images. If required, one can host their own Docker registries and can use them for pulling images.






