# DOCKER TMPFS

## OVERALL

[Docs](https://docs.docker.com/storage/tmpfs/)

When you create a container with a **tmpfs** mount, the container can create files outside the container’s writable layer.

As opposed to **volumes** and **bind mounts**, a tmpfs mount is temporary, and only persisted in the host memory. 

When the container stops, the tmpfs mount is removed, and files written there won’t be persisted.

This is useful to temporarily store sensitive files that you don’t want to persist in either the host or the container writable layer.

Limitations of tmpfs mounts
  - Unlike volumes and bind mounts, you can’t share tmpfs mounts between containers.
  - This functionality is only available if you’re running Docker on Linux.


## RUN

**`-mount` flag**
```
docker run -it --mount type=tmpfs,destination=/app alpine /bin/sh
```

**`-v` flag**
```
docker run -it --tmpfs /app alpine /bin/sh
```





































