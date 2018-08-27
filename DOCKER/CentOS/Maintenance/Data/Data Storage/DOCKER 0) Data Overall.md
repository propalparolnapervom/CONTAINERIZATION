# DOCKER DATA OVERALL

## DATA MANAGING

[Docs](https://docs.docker.com/storage/)

By default all files created inside a container are stored on a writable container layer. 

This means that:

  - The data doesn’t persist when that container is no longer running, and it can be difficult to get the data out of the container if another process needs it.
  - A container’s writable layer is tightly coupled to the host machine where the container is running. You can’t easily move the data somewhere else.
  - Writing into a container’s writable layer requires a [storage driver](https://docs.docker.com/storage/storagedriver/) to manage the FS. The storage driver provides a union filesystem, using the Linux kernel. This extra abstraction reduces performance as compared to using *data volumes*, which write directly to the host filesystem.


Docker has options for containers to store files in the host machine, so that the files are persisted even after the container stops:   
  - **Volumes**: are stored in a part of the host FS which is managed by Docker (`/var/lib/docker/volumes/` on Linux). Non-Docker processes should not modify this part of the filesystem. *Volumes are the best way to persist data in Docker*.

  - **Bind mounts**: may be stored anywhere on the host system. They may even be important system files or directories. Non-Docker processes on the Docker host or a Docker container can modify them at any time.

  - **tmpfs** (only on Linux): mounts are stored in the host system’s memory only, and are never written to the host system’s filesystem.
  
No matter which type of mount you choose to use, the data looks the same from within the container. 




## USECASES

### USECASES FOR VOLUMES


Volumes are the **preferred way to persist data in Docker containers and services**. 

Some use cases for volumes include:

  - Sharing data among multiple running containers. If you don’t explicitly create it, a volume is created the first time it is mounted into a container. When that container stops or is removed, the volume still exists. Multiple containers can mount the same volume simultaneously, either read-write or read-only. Volumes are only removed when you explicitly remove them.

  - When the Docker host is not guaranteed to have a given directory or file structure. Volumes help you decouple the configuration of the Docker host from the container runtime.

  - When you want to store your container’s data on a remote host or a cloud provider, rather than locally.

  - When you need to back up, restore, or migrate data from one Docker host to another, volumes are a better choice. You can stop containers using the volume, then back up the volume’s directory (such as /var/lib/docker/volumes/<volume-name>).



## USECASES FOR BIND MOUNTS

In general, **you should use volumes where possible**. 

Bind mounts are appropriate for the following types of use case:

  - Sharing configuration files from the host machine to containers. This is how Docker provides DNS resolution to containers by default, by mounting `/etc/resolv.conf` from the host machine into each container.

  - Sharing source code or build artifacts between a development environment on the Docker host and a container. For instance, you may mount a Maven target/ directory into a container, and each time you build the Maven project on the Docker host, the container gets access to the rebuilt artifacts.

  - If you use Docker for development this way, your production Dockerfile would copy the production-ready artifacts directly into the image, rather than relying on a bind mount.

  - When the file or directory structure of the Docker host is guaranteed to be consistent with the bind mounts the containers require.

### USERCASES FOR TMPFS MOUNTS

tmpfs mounts are best used for cases when you do not want the data to persist either on the host machine or within the container. 

This may be for security reasons or to protect the performance of the container when your application needs to write a large volume of non-persistent state data.



## TIPS FOR USING BIND MOUNTS OR VOLUMES

If you use either bind mounts or volumes, keep the following in mind:

  - If you mount an empty volume into a directory in the container in which files or directories exist, these files or directories are propagated (copied) into the volume. Similarly, if you start a container and specify a volume which does not already exist, an empty volume is created for you. This is a good way to pre-populate data that another container needs.

  - If you mount a bind mount or non-empty volume into a directory in the container in which some files or directories exist, these files or directories are obscured by the mount, just as if you saved files into /mnt on a Linux host and then mounted a USB drive into /mnt. The contents of /mnt would be obscured by the contents of the USB drive until the USB drive were unmounted. The obscured files are not removed or altered, but are not accessible while the bind mount or volume is mounted.
















































