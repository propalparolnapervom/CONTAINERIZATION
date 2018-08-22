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


## ADD vs. COPY

[Docs](https://www.ctl.io/developers/blog/post/dockerfile-add-vs-copy/)

If you're not interested in the nuances of ADD and COPY and just want an answer to "which one should I use?", all you need to know is: **use COPY**.

> Currently the ADD command is IMO far too magical. It can add local and remote files. It will sometimes untar a file and it will sometimes not untar a file. If a file is a tarball that you want to copy, you accidentally untar it. If the file is a tarball in some unrecognized compressed format that you want to untar, you accidentally copy it...

The consensus seemed to be that ADD tried to do too much and was confusing to the user. Obviously, no one wanted to break backward compatibility with existing usage of ADD, so it was decided that a new instruction would be added which behaved more predictably.

Unlike ADD, COPY does a straight-forward, as-is copy of files and folders from the build context into the container.


## ENTRYPOINT vs. CMD

[Docs] (https://www.ctl.io/developers/blog/post/dockerfile-entrypoint-vs-cmd/)

Both ENTRYPOINT and CMD allow you to specify the startup command for an image, but there are subtle differences between them. 

Given how much easier it is to override the CMD, the recommendation is use **CMD** in your Dockerfile when you want the user of your image to have the flexibility to run whichever executable they choose when starting the container. For example, maybe you have a general Ruby image that will start-up an interactive irb session by default (CMD irb) but you also want to give the user the option to run an arbitrary Ruby script (docker run ruby ruby -e 'puts "Hello"')

In contrast, **ENTRYPOINT** should be used in scenarios where you want the container to behave exclusively as if it were the executable it's wrapping. That is, when you don't want or expect the user to override the executable you've specified.


There are many situations where it may be convenient to use Docker as portable packaging for a specific executable. Imagine you have a utility implemented as a Python script you need to distribute but don't want to burden the end-user with installation of the correct interpreter version and dependencies. You could package everything in a Docker image with an ENTRYPOINT referencing your script. Now the user can simply docker run your image and it will behave as if they are running your script directly.

Of course you can achieve this same thing with CMD, but the use of ENTRYPOINT sends a strong message that this container is only intended to run this one command.

Whether you're using ENTRYPOINT or CMD (or both) the recommendation is to always use the exec form so that's it's obvious which command is running as PID 1 inside your container.


## EXAMPLES

Make an image, put it to the Docker Hub via your login (ppnp)
```
cd <app_with_dockefile_dir>
echo; ls -la; pwd; echo; echo "   SEE DOCKERFILE: `ls -la Dockerfile`"; echo

docker build -t ppnp/my_first_image .
```





















