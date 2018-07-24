## DOCKER POST-INSTALLATION (CENTOS)

[Documentation](https://docs.docker.com/install/linux/linux-postinstall/)

### Manage Docker as a non-root user

**Overall info**
The `docker` daemon binds to a Unix socket instead of a TCP port. 

By default that Unix socket is owned by the user `root` and other users can only access it using `sudo`. 

The `docker` daemon always runs as the `root` user.


If you don’t want to use `sudo` when you use the `docker` command, create a Unix group called `docker` and add users to it. 

When the `docker` daemon starts, it makes the ownership of the Unix socket read/writable by the `docker` group.

> Warning: The `docker` group grants privileges equivalent to the `root` user. For details on how this impacts security in your system, see [Docker Daemon Attack Surface](https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface).

**Create user group**
```
sudo groupadd docker
```

**Add necessary users to the group**
```
sudo usermod -aG docker vagrant
```

**Verify**

Run any command via just added user
```
docker images
```



### Configure Docker to start on boot

### Use a different storage engine

### Configure where the Docker daemon listens for connections

### Enable IPv6 on the Docker daemon

### Troubleshooting




















