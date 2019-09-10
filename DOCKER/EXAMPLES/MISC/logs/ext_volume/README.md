# README

## THEORY

(Docs)[https://www.digitalocean.com/community/tutorials/how-to-work-with-docker-data-volumes-on-ubuntu-14-04]


## WHAT

Write logs from Docker container to host machine.

## HOW

Create a dir on the host machine which should be available from Docker container
```
rm -rf logs_on_hosts_to_del
mkdir logs_on_hosts_to_del
```

Start Docker container (where app writes logs to `/logs/logs.log`)
```
export HOST_DIR="/Users/sbur/overall/git_area/Mine/CONTAINERIZATION/DOCKER/EXAMPLES/MISC/logs/ext_volume/to_del_logs"
export CONTAINER_DIR="/logs"

docker run -d -v ${HOST_DIR}:${CONTAINER_DIR} test
```

See app logs from container on the host:
```
tail -f ${HOST_DIR}/logs.log
```

