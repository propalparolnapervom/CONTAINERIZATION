# DOCKER STORAGE DRIVERS

## OVERALL

[About Storage Drivers](https://docs.docker.com/storage/storagedriver/)
[Select Storage Driver](https://docs.docker.com/storage/storagedriver/select-storage-driver/)

A Docker image is built up from a series of **layers**. Each layer represents an instruction in the image’s Dockerfile. 

Each layer except the very last one is **read-only**.

Each layer is only a **set of differences** from the layer before it. 

The layers are stacked on top of each other. When you create a new container, you add a new **writable layer** on top of the underlying layers. This layer is often called the **container layer**.

All changes made to the running container, such as writing new files, modifying existing files, and deleting files, are written to this thin writable container layer.


**Storage drivers** allow you to create data in the writable layer of your container. The files won’t be persisted after the container stops, and both read and write speeds are low.

A **storage driver** handles the details about the way these layers interact with each other. Different storage drivers are available, which have advantages and disadvantages in different situations.


## CONTAINER AND LAYERS

> The major difference between a container and an image is the top writable layer. 

All writes to the container that add new or modify existing data are stored in this writable layer. When the container is deleted, the writable layer is also deleted. The underlying image remains unchanged.


## CONTAINER SIZE ON DISK

To see size
```
docker ps -s
```

Two different columns relate to size.

  - `size`: the amount of data (on disk) that is used for the writable layer of each container
  - `virtual size`: read-only image data size + container’s writable layer size. Multiple containers may share some or all read-only image data. Two containers started from the same image share 100% of the read-only data, while two containers with different images which have layers in common share those common layers. Therefore, you can’t just total the virtual sizes. This over-estimates the total disk usage by a potentially non-trivial amount.


If multiple containers started from the same exact image, the total size on disk for these containers would be SUM (`size` of containers) plus one image size (`virtual size` - `size`).

This also does not count the following additional ways a container can take up disk space:

  - Disk space used for log files if you use the json-file logging driver. This can be non-trivial if your container generates a large amount of logging data and log rotation is not configured.
  - Volumes and bind mounts used by the container.
  - Disk space used for the container’s configuration files, which are typically small.
  - Memory written to disk (if swapping is enabled).
  - Checkpoints, if you’re using the experimental checkpoint/restore feature.


## THE CoW STRATEGY

[Docs](https://docs.docker.com/storage/storagedriver/#the-copy-on-write-cow-strategy)


























