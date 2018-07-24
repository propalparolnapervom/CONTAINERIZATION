# DOCKER CONFIGURATION (CENTOS)

[Documentation](https://docs.docker.com/config/daemon/)

## OVERALL INFO

There are two ways to configure the Docker daemon:
  1. Use a *JSON configuration file*. This is the preferred option, since it keeps all configurations in a single place.
  2. Use *flags* when starting `dockerd`.

You can use both of these options together as long as you don’t specify the same option both as a flag and in the JSON file. If that happens, the Docker daemon won’t start and prints an error message.


## 1. VIA JSON CONFIG FILE

To configure the Docker daemon using a JSON file, following file should exist
```
sudo ls -la /etc/docker/daemon.json
sudo touch /etc/docker/daemon.json ; sudo chmod 600 /etc/docker/daemon.json ; sudo ls -la /etc/docker/daemon.json

      -rw-------. 1 root root 0 Jul 24 10:21 /etc/docker/daemon.json
```


Just update this file with [necessary parameters](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file)
```
sudo vi /etc/docker/daemon.json

{
  "debug": true,
  "tls": true,
  "tlscert": "/var/docker/server.pem",
  "tlskey": "/var/docker/serverkey.pem",
  "hosts": ["tcp://192.168.59.3:2376"]
}
```


## 2. VIA FLAGS OF `dockerd`

You can start Docker daemon with same [parameters](https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file) as awith JSON files.
```
dockerd --debug \
  --tls=true \
  --tlscert=/var/docker/server.pem \
  --tlskey=/var/docker/serverkey.pem \
  --host tcp://192.168.59.3:2376
```














