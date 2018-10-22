# KUBERNETES OVERALL

(Kubernetes for the Absolute Beginner)[https://globallogic.udemy.com/learn-kubernetes/learn/v4/overview] Udemy Tutorial.

# OVERALL

So we learned about containers and we now have our application packaged into a docker container. But what next? How do you run it in production? What if your APP relies on other containers such as DB or messaging services or other backend services? What if the number of users increase and you need to scale your application? You would also like to scale down when the load decreases.

To enable these functionalities you need an underlying platform with a set of resources. 

The platform needs to
  - orchestrate the connectivity between the containers
  - automatically scale up or down based on the load. 
  
This whole process of automatically deploying and managing containers is known as **Container Orchestration**.

____

**Kubernetes** is thus a container orchestration technology. 

There are multiple such technologies available today:
  - Docker has its own tool called Docker Swarm
  - Kubernetes from Google 
  - Mesos from Apache. 

While Docker Swarm is really easy to setup and get started, it lacks some of the advanced autoscaling features required for complex applications. 

Mesos on the other hand is quite difficult to setup and get started, but supports many advanced features. 

Kubernetes - arguably the most popular of it all – is a bit difficult to setup and get started but provides a lot of options to customize deployments and supports deployment of complex architectures. 


Kubernetes also known as **K8s** was built by Google based on their experience running containers in production. It is now an open-source project and is arguably one of the best and most popular container orchestration technologies out there.

_____

There are various advantages of container orchestration
  - Your APP is now highly available as hardware failures do not bring your application down because you have multiple instances of your application running on different nodes. 
  - The user traffic is load balanced across the various containers. 
  - When demand increases, deploy more instances of the APP seamlessly and within a matter of second and we have the ability to do that at a service level. 
  - When we run out of hardware resources, scale the number of nodes up/down without having to take down the application. 
  - And do all of these easily with a set of declarative object configuration files.

And THAT IS **Kubernetes**. It is a container Orchestration technology used to orchestrate the deployment and management of 100s and 1000s of containers in a clustered environment. 


























