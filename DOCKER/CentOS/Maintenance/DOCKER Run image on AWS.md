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


### UPDATE DOCKERRUN.AWS.JSON

A `Dockerrun.aws.json` file describes how to deploy a `Docker` container as an Elastic Beanstalk application. 

This JSON file is specific to Elastic Beanstalk. 

If your application runs on an image that is available in a hosted repository, you can specify the image in a `Dockerrun.aws.json` file and omit the `Dockerfile`.

See [more](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker_image.html#create_deploy_docker_image_dockerrun)


On your local PC update the file to point to your image name
```
cd flask-app
vi Dockerrun.aws.json

      {
        "AWSEBDockerrunVersion": "1",
        "Image": {
          "Name": "ppnp/my_first_app",          <== this should be updated
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


### AWS ELASTIC BEANSTALK (EB)

1. Login to your [AWS console](http://console.aws.amazon.com/)

2. Click on Elastic Beanstalk

3. Click on "Create New Application" in the top right

4. Give your app a memorable (but unique) name and provide an (optional) description
```
ppnp_1st_app
```

5. In the **New Environment** screen, choose the **Web Server Environment**.

6. Make available configurations
```
Application name:   ppnp_1st_app
Environment name:   ppnp1stApp-env    <== any random name
Domain:             ppnp1stapp.us-west-2.elasticbeanstalk.com   <== any random name

Platform:   Preconfigured platform  checkbox is selected.
            Docker  is selected from drop-down list.
            
Application code: Upload your code  radiobutton is available
                  Upload  button
                  
                  Source code origin:     Local file  radiobutton is selected
                                          D:\sburt\Khlam\_txt\Dockerrun.aws.json
                                          Upload button
Create environment  button.
                  
```











































