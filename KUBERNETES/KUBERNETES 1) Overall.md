# KUBERNETES OVERALL

[Kubernetes for the Absolute Beginner](https://globallogic.udemy.com/learn-kubernetes/learn/v4/overview) Udemy Tutorial.

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



# ARCHITECTURE


## BASIC CONCEPTS


A **node** (**minion** in the past) is a machine – physical or virtual – on which kubernetes is installed. A node is a *worker machine* and this is were containers will be launched by kubernetes.

But what if the node on which our application is running fails? Well, obviously our application goes down. So you need to have more than one nodes.


A **cluster** is a set of nodes grouped together. This way even if one node fails you have your application still accessible from the other nodes. Moreover having multiple nodes helps in sharing load as well.



Now we have a cluster, but:
  - Who is responsible for managing the cluster? 
  - Were is the information about the members of the cluster stored? 
  - How are the nodes monitored? 
  - When a node fails how do you move the workload of the failed node to another worker node? 
  
That’s were the **Master** comes - another node with Kubernetes installed in it, and is configured as a Master. The master watches over the nodes in the cluster and is responsible for the actual orchestration of containers on the worker nodes.



## COMPONENTS


When you install Kubernetes on a System, you are actually installing the following components:

**1) API server**

Acts as the front-end for kubernetes.
  - The users
  - management devices
  - Command line interfaces 
      
... all talk to the API server to interact with the kubernetes cluster.


**2) ETCD key store**

ETCD is a distributed reliable key-value store used by kubernetes to store all data used to manage the cluster. 

Think of it this way, when you have multiple nodes and multiple masters in your cluster, etcd stores all that information on all the nodes in the cluster in a distributed manner. ETCD is responsible for implementing locks within the cluster to ensure there are no conflicts between the Masters.

**3) Scheduler**

Responsible for distributing *work* or *containers* across multiple nodes. 

It looks for newly created containers and assigns them to Nodes. 


**4) Controllers**

The controllers are the brain behind orchestration. 

They are responsible for noticing and responding when nodes, containers or endpoints goes down. 

The controllers makes decisions to bring up new containers in such cases.


**5) Container runtime**

The container runtime is the underlying software that is used to run containers. 

In our case it happens to be Docker.


**6) kubelet**


And finally kubelet is the agent that runs on each node in the cluster. 

The agent is responsible for making sure that the containers are running on the nodes as expected.



## MASTER vs WORKER

How does one server become a master and the other slave?


The *worker node* is were the containers are hosted. For example Docker containers, and to run docker containers on a system, we need a container runtime installed. And that’s were the container runtime falls. In this case it happens to be Docker. This doesn’t HAVE to be docker.


The *master server* has the kube-apiserver and that is what makes it a master.


Similarly the *worker nodes* have the kubelet agent that is responsible for interacting with the master to provide health information of the worker node and carry out actions requested by the master on the worker nodes.

All the information gathered are stored in a key-value store on the Master. The key value store is based on the popular etcd framework as we just discussed.

The master also has the controller manager and the scheduler.

> There are other components as well, but we will stop there for now. The reason we went through this is to understand what components constitute the master and worker nodes.


![Master vs Worker Nodes](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/K8S_master_worker.png "Master vs Worker Nodes")



## kubectl

And finally, we also need to learn a little bit about ONE of the command line utilities known as the **kube command line tool** or **kubectl** or **kube control** as it is also called. 

The kube control tool is used to:
  - deploy and manage applications on a kubernetes cluster
  - to get cluster information
  - get the status of nodes in the cluster
  - etc
  
  
  
  
## PODs


### Overall

So, with kubernetes our ultimate aim is to deploy our application in the form of containers on a set of machines that are configured as worker nodes in a cluster. 

However, kubernetes does not deploy containers directly on the worker nodes. The containers are encapsulated into a Kubernetes object known as PODs. 

A **POD** is a single instance of an application. 

It is the smallest object, that you can create in kubernetes.

Each POD gets it own IP address.


### Relationship between Containers and POD


PODs **usually** have a 1:1 relationship with containers running your application. To scale UP you create new PODs and to scale down you delete PODs. You do not add additional containers to an existing POD to scale your application.


But, are we restricted to having a single container in a single POD? No! 

A single POD **can** have multiple containers, except for the fact that they are usually not multiple containers of the same kind. 

If our intention was to scale our application, then we would need to create additional PODs. But sometimes you might have a scenario were you have a helper container, that might be doing some kind of supporting task for our web application such as processing a user entered data, processing a file uploaded by the user etc. and you want these helper containers to live along side your application container. 

In that case, you CAN have both of these containers part of the same POD, so that when a new application container is created, the helper is also created and when it dies the helper also dies since they are part of the same POD. 

The two containers can also communicate with each other directly by referring to each other as ‘localhost’ since they share the same network namespace. Plus they can easily share the same storage space as well.


![K8S: Container vs POD](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/K8S_container_POD.png "K8S: Container vs POD")




























