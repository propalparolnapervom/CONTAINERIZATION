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



# COMPONENTS


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
  
  
  
  
# KUBERNETES OBJECTS

[Kubernetes Objects](https://kubernetes.io/docs/concepts/#kubernetes-objects)

The basic Kubernetes objects include:

  - Pod
  - Service
  - Volume
  - Namespace


## PODs

[Pod Overview](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)

[Kubernetes Concepts](https://kubernetes.io/docs/concepts/)

A **Pod** is the basic building block of Kubernetes–the smallest and simplest unit in the Kubernetes object model that you create or deploy. A Pod represents a running process on your cluster.

A Pod encapsulates:
  - an application container (or, in some cases, multiple containers)
  - storage resources
  - a unique network IP
  - options that govern how the container(s) should run. 
  
A Pod represents a unit of deployment: a single instance of an application in Kubernetes, which might consist of either a single container or a small number of containers that are tightly coupled and that share resources.

Docker is the most common container runtime used in a Kubernetes Pod, but Pods support other container runtimes as well.


### Overall

So, with kubernetes our ultimate aim is to deploy our application in the form of containers on a set of machines that are configured as worker nodes in a cluster. 

However, kubernetes does not deploy containers directly on the worker nodes. The containers are encapsulated into a Kubernetes object known as PODs. 

A **POD** is a single instance of an application. 

It is the smallest object, that you can create in kubernetes.

Each POD gets it own internal IP address.


### Relationship between Containers and POD


PODs **usually** have a 1:1 relationship with containers running your application. To scale UP you create new PODs and to scale down you delete PODs. You do not add additional containers to an existing POD to scale your application.


But, are we restricted to having a single container in a single POD? No! 

A single POD **can** have multiple containers, except for the fact that they are usually not multiple containers of the same kind. 

If our intention was to scale our application, then we would need to create additional PODs. But sometimes you might have a scenario were you have a helper container, that might be doing some kind of supporting task for our web application such as processing a user entered data, processing a file uploaded by the user etc. and you want these helper containers to live along side your application container. 

In that case, you CAN have both of these containers part of the same POD, so that when a new application container is created, the helper is also created and when it dies the helper also dies since they are part of the same POD. 

The two containers can also communicate with each other directly by referring to each other as ‘localhost’ since they share the same network namespace. Plus they can easily share the same storage space as well.


![K8S: Container vs POD](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/K8S_container_POD.png "K8S: Container vs POD")








# CONTROLLERS

## REPLICACONTROLLERs

[ReplicationController](https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/)

**Controllers** are the brain behind Kubernetes. They are processes that monitor kubernetes objects and respond accordingly. 

Further we will discuss about one controller in particular. And that is the Replication Controller.


### High Availability

Let’s go back to our first scenario were we had a single POD running our application. What if for some reason, our application crashes and the POD fails? Users will no longer be able to access our application. 

To prevent users from losing access to our application, we would like to have more than one instance or POD running at the same time. That way if one fails we still have our application running on the other one. The **replication controller** helps us run multiple instances of a single POD in the kubernetes cluster thus providing High Availability.

So does that mean you can’t use a replication controller if you plan to have a single POD? No! 

Even if you have a single POD, the replication controller can help by automatically bringing up a new POD when the existing one fails. 

Thus the replication controller ensures that the specified number of PODs are running at all times. Even if it’s just 1 or 100.


### Load balancing

Another reason we need replication controller is to create multiple PODs to share the load across them. 

For example, in this simple scenario we have a single POD serving a set of users. When the number of users increase we deploy additional POD to balance the load across the two pods. If the demand further increases and If we were to run out of resources on the first node, we could deploy additional PODs across other nodes in the cluster. 

As you can see, the replication controller spans across multiple nodes in the cluster. It helps us balance the load across multiple pods on different nodes as well as scale our application when the demand increases.



### Replication Controller vs. Replica Set

It’s important to note that there are two similar terms: Replication Controller and Replica Set. 

Both have the same purpose but they are not the same. 

**Replication Controller** is the older technology that is being replaced by **Replica Set**. 

Replica set is the new recommended way to setup replication. 

However, whatever we discussed in the previous few slides remain applicable to both these technologies. There are minor differences in the way each works and we will look at that in a bit.




## REPLICASETs

[ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)

It is very similar to replication controller.

However, there's a major difference between Replication Controller and Replica Set.


Replica set requires a selector definition. 

The selector section helps the replicaset identify what pods fall under it. But why would you have to specify what PODs fall under it, if you have provided the contents of the pod-definition file itself in the template? It’s BECAUSE, replica set can ALSO manage pods that were not created as part of the replicaset creation. Say for example, there were pods created BEFORE the creation of the ReplicaSet that match the labels specified in the selector, the replica set will also take THOSE pods into consideration when creating the replicas.


### LABELS AND SELECTORS

![Lables and Selectors](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/K8S_labels_selectors.png "Labels and Selectors")




## DEPLOYMENTs

[Deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)


A **Deployment** controller provides declarative updates for Pods and ReplicaSets.

You describe a desired state in a Deployment object, and the Deployment controller changes the actual state to the desired state at a controlled rate. 

You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.


![Deployments](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/K8S_deployment.png "Deployments")




# UPGRADE/ROLLBACK APP

## Deployment strategy

There are two types of deployment strategies. Say for example you have 5 replicas of your web application instance deployed. 

One way to upgrade these to a newer version is to destroy all of these and then create newer versions of application instances. Meaning first, destroy the 5 running instances and then deploy 5 new instances of the new application version. The problem with this as you can imagine, is that during the period after the older versions are down and before any newer version is up, the application is down and inaccessible to users. This strategy is known as the **Recreate** strategy, and thankfully this is NOT the default deployment strategy.

The second strategy is were we do not destroy all of them at once. Instead we take down the older version and bring up a newer version one by one. This way the application never goes down and the upgrade is seamless.

Remember, if you do not specify a strategy while creating the deployment, it will assume it to be **Rolling Update**. In other words, RollingUpdate is the default Deployment Strategy.

![Deployment strategy](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_deployment_strategy.png "Deployment strategy")

Recreate vs RollingUpdate

![Recreate vs RollingUpdate](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_rolling_replace.png "Recreate vs RollingUpdate")


## UPGRADE


![Upgrade](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_upgrade.png "Upgrage")

Let’s look at how a deployment performs an upgrade under the hoods. When a new deployment is created, say to deploy 5 replicas, it first creates a Replicaset automatically, which in turn creates the number of PODs required to meet the number of replicas. When you upgrade your application as we saw in the previous slide, the kubernetes deployment object creates a NEW replicaset under the hoods and starts deploying the containers there. At the same time taking down the PODs in the old replica-set following a RollingUpdate strategy.

This can be seen when you try to list the replicasets using the kubectl get replicasets command. Here we see the old replicaset with 0 PODs and the new replicaset with 5 PODs.


## ROLLBACK

![Rollback](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_rollback.png "Rollback")


Say for instance once you upgrade your application, you realize something isn’t very right. Something’s wrong with the new version of build you used to upgrade. So you would like to rollback your update. Kubernetes deployments allow you to rollback to a previous revision. To undo a change run the command kubectl rollout undo followed by the name of the deployment. The deployment will then destroy the PODs in the new replicaset and bring the older ones up in the old replicaset. And your application is back to its older format.

When you compare the output of the kubectl get replicasets command, before and after the rollback, you will be able to notice this difference. Before the rollback the first replicaset had 0 PODs and the new replicaset had 5 PODs and this is reversed after the rollback is finished.




# SERVICES

**Services** are an abstract that defines a policy and approach on how to access a set of Pods. 

The set of *Pods* accessed via a *Service* is **based on a Label Selector**.

_________

Kubernetes Services enable communication between various components within and outside of the application.

Kubernetes Services helps us connect applications together with other applications or users. 




## NETWORKING

[Interactive Steps](https://www.katacoda.com/courses/kubernetes/networking-introduction)


When a kubernetes cluster is SETUP, kubernetes does NOT automatically setup any kind of networking to handle these issues. 

As a matter of fact, kubernetes expects US to setup networking to meet certain fundamental requirements. 

Some of these are:
  - all the containers or PODs in a kubernetes cluster MUST be able to communicate with one another without having to configure NAT
  - All nodes must be able to communicate with containers and all containers must be able to communicate with the nodes in the cluster. 
  
Kubernetes expects US to setup a networking solution that meets these criteria.

Fortunately, we don’t have to set it up ALL on our own as there are multiple pre-built solutions available. Some of them are:
  - cisco ACI networks
  - Cilium
  - Big Cloud Fabric
  - Flannel
  - Vmware NSX-t
  - Calico
  - etc
__________

Kubernetes have advanced networking capabilities that allow Pods and Services to communicate inside the cluster's network and externally.




## SERVICE TYPES

## 1) Cluster IP

**Cluster IP** is the **default approach** when creating a Kubernetes Service. 

The service is allocated an internal IP that other components can use to access the pods.

By having a single IP address it enables the service to be load balanced across multiple Pods.

Service load balancers across multiple Pods based on the common **label selector**.

______

So the Service creates a virtual IP inside the cluster to enable communication between different services such as a set of front-end servers to a set of backend- servers.


![Type: ClusterIP](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_svc_clusterip.png "Type: ClusterIP")

Target ports allows us to separate the port *the service is available on* from the port *the application is listening on*.

**Port** is how the application will be accessed from the outside.

**TargetPort** is the Port which the application is configured to listen on. 






## 2) NodePort

While *TargetPort* and *ClusterIP* make it available to inside the cluster, the **NodePort** exposes the service on each *Node’s IP* via the defined static port.

No matter which Node within the cluster is accessed, the service will be reachable based on the port number defined.

So the Service makes an internal POD accessible on a Port on the Node.

![Type: NodePort](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_services_nodeport.png "Type: NodePort")

Several PODs on 1 node:

![Type: NodePort (multiPOD)](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_svc_nodeport_multi.png "Type: NodePort (multiPOD)")

1 POD on several nodes:

![Type: NodePort (multiNOD)](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/k8s_svc_nodeport_multi_node.png "Type: NodePort (multiNOD)")


### External IPs

Another approach to making a service available outside of the cluster is via External IP addresses.




## 3) Load Balancer

When running in the cloud, such as EC2 or Azure, it's possible to configure and assign a Public IP address issued via the cloud provider. 

This will be issued via a Load Balancer such as ELB. 

This allows additional public IP addresses to be allocated to a Kubernetes cluster without interacting directly with the cloud provider.

_____

LoadBalancer, were it provisions a load balancer for our service in supported cloud providers. 

A good example of that would be to distribute load across different web servers




## INGRESS

[Official Ingress docs](https://kubernetes.io/docs/concepts/services-networking/ingress/)

[Hands-on steps](https://www.katacoda.com/courses/kubernetes/create-kubernetes-ingress-routes)

[2Read #1](https://medium.com/@cashisclay/kubernetes-ingress-82aa960f658e)

[2Read #2](https://medium.com/google-cloud/understanding-kubernetes-networking-ingress-1bc341c84078)


**Ingress** - API object that manages external access to the services in a cluster, typically HTTP. 

Traffic routing is controlled by rules defined on the ingress resource.

Ingress enables:
  - externally-reachable urls
  - load balancing
  - SSL termination
  - name-based virtual hosting

_________________

An ingress does not expose arbitrary ports or protocols. 

Exposing services other than HTTP and HTTPS to the internet typically uses a service of type [Service.Type=NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#nodeport) or [Service.Type=LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer).


### Ingress controller

[Official Docs](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-controllers)

An **ingress controller** is responsible for fulfilling the ingress, usually with a loadbalancer, though it may also configure your edge router or additional frontends to help handle the traffic.

In order for the ingress resource to work, the cluster must have an ingress controller running. 

This is unlike other types of controllers, which run as part of the **kube-controller-manager** binary, and are typically started automatically with a cluster. 

Choose the ingress controller implementation that best fits your cluster.

Kubernetes as a project currently supports and maintains [GCE](https://git.k8s.io/ingress-gce/README.md) and [nginx](https://git.k8s.io/ingress-nginx/README.md) controllers.

Additional controllers include:
  - Contour is an Envoy based ingress controller provided and supported by Heptio.
  - [Istio](https://istio.io/) based ingress controller [Control Ingress Traffic](https://istio.io/docs/tasks/traffic-management/ingress/).
  - etc 

______

You may deploy [any number of ingress controllers](https://git.k8s.io/ingress-nginx/docs/user-guide/multiple-ingress.md#multiple-ingress-controllers) within a cluster.

When you create an ingress, you should annotate each ingress with the appropriate [ingress-class](https://git.k8s.io/ingress-gce/examples/PREREQUISITES.md#ingress-class) to indicate which ingress controller should be used if more than one exists within your cluster. 

If you do not define a class, your cloud provider may use a default ingress provider.


### Ingress Resource

[Example](https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource)

A minimal ingress resource example:
```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: test-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - http:
      paths:
      - path: /testpath
        backend:
          serviceName: test
          servicePort: 80
```

Annotations [nginx.ingress.kubernetes.io*](https://github.com/kubernetes/ingress-nginx/blob/master/docs/examples/rewrite/README.md) for Nginx.

The ingress [spec](https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status) has all the information needed to configure a loadbalancer or proxy server. Most importantly, it contains a list of rules matched against all incoming requests. **Ingress resource only supports rules for directing HTTP traffic**.



### Ingress rules


**Ingress rules** are an object type with Kubernetes. 

Each http rule contains the following information (see example above):

  - An optional **host**. In this example, no host is specified, so the rule applies to all inbound HTTP traffic through the IP address is specified. If a host is provided (for example, foo.bar.com), the rules apply to that host.
  - a list of **paths** (for example, /testpath), each of which has an associated backend defined with a **serviceName** and **servicePort**. Both the host and path must match the content of an incoming request before the loadbalancer will direct traffic to the referenced service.
  - A **backend** is a combination of service and port names as described in the [services doc](https://kubernetes.io/docs/concepts/services-networking/service/). HTTP (and HTTPS) requests to the ingress matching the host and path of the rule will be sent to the listed backend.

A **default backend** is often configured in an ingress controller that will service any requests that do not match a path in the spec.

An ingress with no rules sends all traffic to a single default backend. The default backend is typically a configuration option of the ingress controller and is not specified in your ingress resources.

If none of the hosts or paths match the HTTP request in the ingress objects, the traffic is routed to your default backend.

______



### Example set of rules

Sample set of Ingres rules
```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: webapp-ingress
spec:
  rules:
  - host: my.kubernetes.example
    http:
      paths:
      - path: /webapp1
        backend:
          serviceName: webapp1-svc
          servicePort: 80
      - path: /webapp2
        backend:
          serviceName: webapp2-svc
          servicePort: 80
      - backend:
          serviceName: webapp3-svc
          servicePort: 80
```

The rules apply to requests for the host `my.kubernetes.example`. 

Two rules are defined based on the path request with a single catch all definition. 

Requests to the path `/webapp1` are forwarded onto the service `webapp1-svc`. 

Likewise, the requests to `/webapp2` are forwarded to `webapp2-svc`. 

If no rules apply, `webapp3-svc` will be used.

What you've got:

1.
```
kubectl get services --all-namespaces

      NAMESPACE       NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                   AGE
      default         kubernetes      ClusterIP   10.96.0.1        <none>        443/TCP                   6m
      default         webapp1-svc     ClusterIP   10.107.161.185   <none>        80/TCP                   6m
      default         webapp2-svc     ClusterIP   10.96.96.231     <none>        80/TCP                   6m
      default         webapp3-svc     ClusterIP   10.104.189.243   <none>        80/TCP                   6m
      kube-system     kube-dns        ClusterIP   10.96.0.10       <none>        53/UDP,53/TCP                6m
      nginx-ingress   nginx-ingress   NodePort    10.98.173.23     172.17.0.31   80:30978/TCP,443:31912/TCP   6m
```


2.
```
kubectl describe services/nginx-ingress -n nginx-ingress

      Name:                     nginx-ingress
      Namespace:                nginx-ingress
      Labels:                   <none>
      Annotations:              <none>
      Selector:                 app=nginx-ingress
      Type:                     NodePort
      IP:                       10.98.173.23
      External IPs:             172.17.0.31
      Port:                     http  80/TCP
      TargetPort:               80/TCP
      NodePort:                 http  30978/TCP
      Endpoints:                10.32.0.6:80
      Port:                     https  443/TCP
      TargetPort:               443/TCP
      NodePort:                 https  31912/TCP
      Endpoints:                10.32.0.6:443
      Session Affinity:         None
      External Traffic Policy:  Cluster
      Events:                   <none>
```


3.
```
kubectl get ingress

      NAME             HOSTS                   ADDRESS   PORTS     AGE
      webapp-ingress   my.kubernetes.example             80        10m
```


4. 
```
kubectl describe ingress/webapp-ingress

      Name:             webapp-ingress
      Namespace:        default
      Address:
      Default backend:  default-http-backend:80 (<none>)
      Rules:
        Host                   Path  Backends
        ----                   ----  --------
        my.kubernetes.example
                               /webapp1   webapp1-svc:80 (<none>)
                               /webapp2   webapp2-svc:80 (<none>)
                                          webapp3-svc:80 (<none>)
      Annotations:
      Events:
        Type    Reason          Age                From                      Message
        ----    ------          ----               ----                      -------
        Normal  Updated         10m                nginx-ingress-controller  Configurationfor default/webapp-ingress was updated
        Normal  AddedOrUpdated  10m (x2 over 10m)  nginx-ingress-controller  Configurationfor default/webapp-ingress was added or updated
```


Test:
```
curl -H "Host: my.kubernetes.example" 172.17.0.31/webapp1

  <h1>This request was processed by host: webapp1-7d67d68676-vrq94</h1>


curl -H "Host: my.kubernetes.example" 172.17.0.31/webapp2
      
      <h1>This request was processed by host: webapp2-64d4844b78-bldx2</h1>


curl -H "Host: my.kubernetes.example" 172.17.0.31

      <h1>This request was processed by host: webapp3-5b8ff7484d-jt2g9</h1>
```

















