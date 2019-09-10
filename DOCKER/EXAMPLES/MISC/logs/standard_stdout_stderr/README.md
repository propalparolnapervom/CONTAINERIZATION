# README

## WHAT

Create Docker image with application, that generates logs. See those logs via `docker logs`

## BLD

```
docker build -t test .
```

## HOW

Start and stop container
```
docker run test
```

See logs of stopped container
```
docker logs 96b41659691b
```

## SO

See: output of the script is shown in the `docker logs` output.

The information that is logged and the format of the log depends almost entirely on the container’s endpoint command.

## THEORY

(Docs)[https://docs.docker.com/v17.09/engine/admin/logging/view_container_logs/]

By default, docker logs or docker service logs shows the command’s output just as it would appear if you ran the command interactively in a terminal. UNIX and Linux commands typically open three I/O streams when they run, called STDIN, STDOUT, and STDERR. STDIN is the commmand’s input stream, which may include input from the keyboard or input from another command. STDOUT is usually a command’s normal output, and STDERR is typically used to output error messages. By default, docker logs shows the command’s STDOUT and STDERR. To read more about I/O and Linux, see the Linux Documentation Project article on I/O redirection.

In some cases, docker logs may not show useful information unless you take additional steps.

If you use a logging driver which sends logs to a file, an external host, a database, or another logging back-end, docker logs may not show useful information.

If your image runs a non-interactive process such as a web server or a database, that application may send its output to log files instead of STDOUT and STDERR.