# DOCKER IMAGE CREATION


## OVERALL INFO

[Dockerfile Usage](https://docs.docker.com/engine/reference/builder/#usage)

[Dockerfile Best Practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

[Dockerfile Commands](https://docs.docker.com/engine/reference/builder/#from)


## COMMANDS


### RUN

The `RUN` instruction will execute any commands in a new layer on top of the current image and commit the results. The resulting committed image will be used for the next step in the `Dockerfile`.


Layering `RUN` instructions and generating commits conforms to the core concepts of Docker where commits are cheap and containers can be created from any point in an image’s history, much like source control.


> `RUN` actually runs a command and commits the result; `CMD` does not execute anything at build time, but specifies the intended command for the image.


### CMD

The primary purpose of `CMD` is to tell the container which command it should run when it is started.


























