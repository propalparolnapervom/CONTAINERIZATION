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


### 2. Install new Docker (using the repo)

#### 2.1 Set up the repo

1. Install required packages. 

`yum-utils` provides the `yum-config-manager` utility

`device-mapper-persistent-data` and `lvm2` are required by the `devicemapper` storage driver.
```
sudo yum install -y yum-utils \
  device-mapper-persistent-data \
  lvm2
```


2. Use the following command to set up the stable repo. You always need the stable repo, even if you want to install builds from the edge or test repos as well.
```
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
    
      Loaded plugins: fastestmirror
      adding repo from: https://download.docker.com/linux/centos/docker-ce.repo
      grabbing file https://download.docker.com/linux/centos/docker-ce.repo to /etc/yum.repos.d/docker-ce.repo
      repo saved to /etc/yum.repos.d/docker-ce.repo
```

3. Optional: Enable the edge and test repos. These repos are included in the docker.repo file above but are disabled by default. You can enable them alongside the stable repository.
```
sudo yum-config-manager --enable docker-ce-edge
sudo yum-config-manager --enable docker-ce-test
```

To disable:

```
sudo yum-config-manager --disable docker-ce-edge
sudo yum-config-manager --disable docker-ce-test
```

#### Avoid Errors

To avoid “Requires: container-selinux >= 2.9”  error:
```
sudo yum install -y http://mirror.centos.org/centos/7/extras/x86_64/Packages/container-selinux-2.42-1.gitad8f0f7.el7.noarch.rpm
```


#### 2.2 Install Docker CE


1. Install the **latest version** of Docker CE, or go to the next step to install a **specific version**
```
sudo yum install docker-ce -y

      ...
      Installed:
        docker-ce.x86_64 0:18.06.0.ce-3.el7                                                                                   

      Dependency Installed:
        audit-libs-python.x86_64 0:2.8.1-3.el7                        checkpolicy.x86_64 0:2.5-6.el7
        container-selinux.noarch 2:2.66-1.el7                         libcgroup.x86_64 0:0.41-15.el7
        libsemanage-python.x86_64 0:2.5-11.el7                        libtool-ltdl.x86_64 0:2.4.2-22.el7_3
        policycoreutils-python.x86_64 0:2.5-22.el7                    python-IPy.noarch 0:0.75-6.el7
        setools-libs.x86_64 0:3.3.8-2.el7

      Complete!
```

2. To install a **specific version** of Docker CE
  - list the available versions in the repo
```
yum list docker-ce --showduplicates | sort -r

       * updates: mirror.mirohost.net
      Loaded plugins: fastestmirror
      Installed Packages
       * extras: mirror.mirohost.net
      docker-ce.x86_64            18.06.0.ce-3.el7                   docker-ce-stable
      docker-ce.x86_64            18.06.0.ce-3.el7                   @docker-ce-stable
      docker-ce.x86_64            18.03.1.ce-1.el7.centos            docker-ce-stable
      ...
      docker-ce.x86_64            17.03.0.ce-1.el7.centos            docker-ce-stable
      Determining fastest mirrors
       * base: mirror.mirohost.net
      Available Packages
```
  
  - select and install necessary version (it's `sudo yum install docker-ce-<VERSION STRING>`)
```
sudo yum install docker-ce-18.06.0.ce
```

### 3. Start Docker
```
sudo systemctl start docker
```


### 4. Verification

Verify that `docker` is installed correctly by running the `hello-world` image.

```
sudo docker run hello-world
```




## POST-INSTALLATION

See appropriate doc for post-installation steps.













