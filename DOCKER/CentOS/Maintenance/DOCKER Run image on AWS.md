## DOCKER RUN IMAGE ON AWS

Run test application via Docker on AWS as it's described in the [Tutorial](http://docker-curriculum.com/).


### PUT IMAGE TO DOCKER HUB

Authorize
```
docker login

      Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
      Username: ppnp
      Password:
      Login Succeeded
```

Put image to [Docker Hub](https://hub.docker.com/)
```
docker push ppnp/my_first_image
```


### AWS ELASTIC BEANSTALK (EB)

1. Login to your [AWS console](http://console.aws.amazon.com/)

2. Click on Elastic Beanstalk

3. Click on "Create New Application" in the top right

4. Give your app a memorable (but unique) name and provide an (optional) description
```
ppnp_1st_app
```

5. In the **New Environment** screen, choose the **Web Server Environment**.

6. The following screen is shown below. Choose Docker from the predefined configuration. You can leave the Environment type as it is. Click Next.
```
Application name:   ppnp_1st_app
Environment name:   ppnp1stApp-env    <== any random name
Domain:             ppnp1stapp.us-west-2.elasticbeanstalk.com   <== any random name

Platform:   Preconfigured platform  checkbox is selected.
            Docker  is selected from drop-down list.
```

7. On your local PC update the file to point to your image name
```
cd flask-app
vi Dockerrun.aws.json

      {
        "AWSEBDockerrunVersion": "1",
        "Image": {
          "Name": "**ppnp/my_first_app**",
          "Update": "true"
        },
        "Ports": [
          {
            "ContainerPort": "5000"
          }
        ],
        "Logging": "/var/log/nginx"
      }

```










































