# DOCKER BIND MOUNTS

## OVERALL

[Docs](https://docs.docker.com/storage/bind-mounts/)

When you use a **bind mount**, a file or directory on the host machine is mounted into a container. The file or directory is referenced by its full or relative path on the host machine. 

By contrast, when you use a **volume**, a new directory is created within Docker’s storage directory on the host machine, and Docker manages that directory’s contents.


## CREATE

**`-mount` flag, READ-WRITE**

  - mount point: `/bind_vol`
  - mount permission: read-write
  - host level: `/home/vagrant/test_bind` (has to be existing!)
  - container level: `/bind_mnt`
```
docker run -it --mount type=bind,source=/home/vagrant/test_bind,target=/bind_mnt alpine /bin/sh
```

**`-mount` flag, READ-ONLY**

  - mount point: `/bind_vol`
  - mount permission: read-only
  - host level: `/home/vagrant/test_bind` (has to be existing!)
  - container level: `/bind_mnt`
```
docker run -it --mount type=bind,source=/home/vagrant/test_bind,target=/bind_mnt,readonly alpine /bin/sh
```


**`-v` flag, READ-WRITE**
 
  - mount point: `/bind_vol`
  - mount permission: read-write
  - host level: `/home/vagrant/test_bind` (might either exist or not)
  - container level: `/bind_mnt`
```
docker run -it -v /home/vagrant/test_bind:/bind_mnt alpine /bin/sh
```

**`-v` flag, READ-ONLY**
 
  - mount point: `/bind_vol`
  - mount permission: read-only
  - host level: `/home/vagrant/test_bind` (might either exist or not)
  - container level: `/bind_mnt`
```
docker run -it -v /home/vagrant/test_bind:/bind_mnt alpine:ro /bin/sh
```

















































