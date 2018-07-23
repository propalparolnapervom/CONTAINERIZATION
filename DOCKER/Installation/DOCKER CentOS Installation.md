# DOCKER CENTOS INSTALLATION


## OVERALL INFO

Docker Community Edition (CE) is ideal for developers and small teams looking to get started with Docker and experimenting with container-based apps. Docker CE has three types of update channels, stable, test, and nightly:

  - Stable gives you latest releases for general availability.
  - Test gives pre-releases that are ready for testing before general availability.
  - Nightly gives you latest builds of work in progress for the next major release.



## INSTALLATION


[Documentation for CentOS](https://docs.docker.com/install/linux/docker-ce/centos/)


### 1. Uninstall old Docker version

Older versions of Docker were called docker or docker-engine. If these are installed, uninstall them, along with associated dependencies.

```
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
                  
      Loaded plugins: fastestmirror
      No Match for argument: docker
      No Match for argument: docker-client
      No Match for argument: docker-client-latest
      No Match for argument: docker-common
      No Match for argument: docker-latest
      No Match for argument: docker-latest-logrotate
      No Match for argument: docker-logrotate
      No Match for argument: docker-selinux
      No Match for argument: docker-engine-selinux
      No Match for argument: docker-engine
      No Packages marked for removal
```



















