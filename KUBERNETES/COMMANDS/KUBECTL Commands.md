# KUBECTL COMMANDS


Deploy an application on the cluster
```
kubectl run nginx --image=nginx
```

View information about the cluster
```
kubectl cluster-info
```

List all running Kubernetes objects
```
kubectl get all
```

Describe specific POD (or any other type of resource)
```
kubectl describe pod xbs-dpmnt-5dc84f869d-jzjsm
```


# KUBENCOFIG

## Create
Create KUBECONFIG for AWS EKS automatically (dry-run)
```
aws eks update-kubeconfig --name <EKS_CLUSTER_NEW> --region <EKS_AWS_REGION> --role-arn <AWS_IAM_ROLE_TO_AUTH_WITH> --dry-run
```

## Work with context

Show current context
```
kubectl config get-contexts
```

Use specific context (if multiply ones defined in the KUBECONFIG file)
```
kubectl config use-context "dpdev"
```
Show the configuration itself for current context
```
kubectl config view
```



# POD

## List

List all pods in ps output format
```
kubectl get pods

      NAME                     READY     STATUS    RESTARTS   AGE
      nginx-65899c769f-v8r2p   1/1       Running   0          2m


kubectl get pods -o=wide

      NAME                     READY     STATUS    RESTARTS   AGE       IP           NODE
      nginx-65899c769f-v8r2p   1/1       Running   0          3m        172.17.0.5   minikube
```

List PODs with specific label
```
kubectl get pods -l app=random-name-app

   # OR

kubectl get pods --selector app=random-name-app

   # OR
   
# If Pod should containe multiple labels 
k get pods -l env=prod,bu=finance,tier=frontend
```

List a specific POD in JSON/YAML output format
```
kubectl get pod nginx-65899c769f-v8r2p -o json

kubectl get pod nginx-65899c769f-v8r2p -o yaml
```

List just POD names
```
kubectl get pods -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'
```

## Describe

Describe all PODs
```
kubectl describe pods
```

Describe specific POD
```
kubectl describe pods nginx-pod-name-58b8b74459-nzc57
```


## Deploy

### Command Line

Deploy a POD `nginx-pod-name` from `nginx` already existing Docker image (from Docker Hub)
```
# Imperative way

# Actual creating
kubectl run nginx-pod-name --image=nginx

# Dry-run
k run nginx-pod-name --image=nginx --dry-run=client -o yaml
```

Create a new pod called `custom-nginx` using the `nginx` image and expose it on container port `8080`
```
# Imperative way

# Actual creating
kubectl run custom-nginx --image=nginx --port=8080
```


### Config File

Create a Config File `pod-creation.yml`
```
apiVersion: v1
kind: Pod
metadata:
  name: xbs-pod
  labels:
      app: random-name-app
      type: for-example-front-end
spec:
  containers:
    - name: container-name
      image: nginx
```

Run it to create a POD
```
kubectl create -f pod-creation.yml
```



## Destroy

Destroy all PODs
```
kubectl delete pods --all
```

Destroy specific POD (by POD name)
```
kubectl delete pod xbs-pod
```

Destroy specific POD (by POD label)
```
kubectl delete pods -l app=random-name-app
```


## Port

Get pod's port
```
kubectl describe pods email-autodiscover | grep -i port
      
      Port:           80/TCP
      
    
      #OR
      
      
kubectl get pods email-autodiscover --template=‘{{(index (index .spec.containers 0).ports 0).containerPort}}{{“\n”}}’

      80
```


## Logs

Anything that the application would normally send to `STDOUT` becomes logs for the container within the Pod. 

View logs of specific POD 
```
      #1. If POD has 1 Container:
            kubectl logs <POD_NAME>
            
kubectl logs vessel-responsibilities-7bdff94968-xt7lw


      #2. If POD has >1 Containers:
            kubectl logs <POD_NAME> <CONTAINER_NAME>
            
kubectl logs vessel-responsibilities-7bdff94968-xt7lw vessel-responsibilities
```

## Connect to the Pod

Go inside POD's Container
```
      #1. If POD has 1 Container:
            kubectl exec -ti <POD_NAME> bash
            
kubectl exec -ti vessel-responsibilities-7bdff94968-xt7lw bash


      #2. If POD has >1 Containers:
            kubectl exec -ti <POD_NAME> <CONTAINER_NAME> bash
                        
kubectl exec -ti vessel-responsibilities-7bdff94968-xt7lw vessel-responsibilities bash
```


## Create and connect to a new Pod

Fast way to add POD
```
      # --restart=Never - creates POD
      # --restart=Always - creates DEPLOYMENT
      # --restart=OnFailure - creates JOB
      
kubectl run  -it --restart=Never --image=ubuntu bash
```





# NODE

## List

List all nodes
```
kubectl get nodes

      NAME       STATUS    ROLES     AGE       VERSION
      minikube   Ready     master    1h        v1.10.0
```

## Remove Pods from Node, mark the node as Unschedulable

Drain node (in preparation for maintenance, for example)

> **NOTE**: This is to:
> - mark the Node unschedulable to prevent new pods from arriving;
> - remove all present Pods from the Node.

> **NOTE**: It cannot delete Pods not managed by `ReplicationController`, `ReplicaSet`, `Job`, `DaemonSet` or `StatefulSet` (use --force to override)
```
# Dry-run
kubectl drain --dry-run=true <my-node>

# Evict or Delete all Pods on the node, except DaemonSet
kubectl drain <my-node>

# Evict or Delete all Pods on the node, except DaemonSet
# timeout: The length of time to wait before giving up, zero means infinite
kubectl drain --timeout=0s <my-node>

# Evict or Delete all Pods on the node, including DaemonSet
kubectl drain --ignore-daemonsets=true <my-node>

# Evict or Delete all Pods on the node, 
# including the ones, that were not created by `ReplicationController`, `ReplicaSet`, `Job`, `DaemonSet` or `StatefulSet`
# (so, manually, for example)
#
# NOTE: K8S can't create such Pods after node comes back!
kubectl drain --force <my-node>
```

## Mark the node as Unschedulable

No existing Pods will be deleted from the Node.

> **NOTE**: Unlike `drain`, this is only to mark the Node unschedulable to prevent new pods from arriving;
```
kubectl cordon <NODE-NAIM>
```


## Remove Unschedulable mark from the Node

Let the Node to have Pods
> **NOTE**: This is opposite to `drain` and `cordon`, to remove `unschedulable` mark from the Node

```
kubectl uncordon <NODE-NAME>
```

> NOTE: The Pods, that were removed after `drain`, don't automatically come back once the Node is back.
> The Node will be populated with Pods next time a new Pods will be created for some reason.


## Label

Add label to the Node
```
kubectl label nodes <NODE_NAME> <LABEL_KEY>=<LABEL_VALUE>
```


# RCs

## LIST RCs

List all Replication Controllers
```
kubectl get rc


kubectl get replicationcontroller
```

List specific Replication Controller
```
kubectl get rc xbs_controller


kubectl get replicationcontroller xbs_controller
```


## DELETE RCs

Delete specific Replication Controller (PODs inside RC will be destroyed as well)
```
kubectl delete rc xbs-rc
```



# RSs

## LIST RSs

List all ReplicaSet
```
kubectl get rs


kubectl get replicaset
```

List specific ReplicaSet
```
kubectl get rs xbs-rs


kubectl get replicaset xbs-rs
```

## UPDATE RSs (SCALE, for instance)

### Via Config File updating

Update `replicas` value in Config File `rs-creation.yml`:
```
vi rs-creation.yml
```

Update Kubernetes with just updated Config File
```
kubectl replace -f rs-creation.yml
```

### Via Command Line (with Config File name)

```
kubectl scale --replicas=6 -f rs-creation.yml
```

> NOTE: Kubernetes will be updated, but file `rs-creation.yml` itself won't be updated




## DELETE RCs

Delete specific ReplicaSet (PODs inside RS will be destroyed as well)
```
kubectl delete rs xbs-rs
```




# DEPLOYMENTs


## Create

Create a deployment named `webapp` using the image `kodekloud/webapp-color` with `3` replicas.
```
# Imperative

# Actual creation
kubectl create deployment webapp --image=kodekloud/webapp-color --replicas=3

# Dry run
kubectl create deployment webapp --image=kodekloud/webapp-color --replicas=3 --dry-run=client -o yaml
```


## List

List all Deployments
```
kubectl get deploy


kubectl get deployments
```

List specific Deployment
```
kubectl get deploy xbs-dpmnt


kubectl get deployment xbs-dpmnt
```

## Update (scale)

### Via Config File updating

Update `replicas` value in Config File `rs-creation.yml`:
```
vi dpmnt-creation.yml
```

Update Kubernetes with just updated Config File
```
kubectl replace -f dpmnt-creation.yml
```

### Via Command Line (with Config File name)

```
kubectl scale --replicas=6 -f dpmnt-creation.yml
```

> NOTE: Kubernetes will be updated, but file `dpmnt-creation.yml` itself won't be updated




## Apply

Apply a configuration to a resource by filename or stdin. 

The resource name must be specified. This resource will be created if it doesn't exist yet. 

To use `apply`, always create the resource initially with either `apply` or `create --save-config`.
```
kubectl apply -f xbs-chart/templates/d.yaml
```

## Rollout

> **NOTE**: Rollout - deploying latest changes to the Deployment.

### List

Check the status of rollout
```
kubectl rollout status deployment/<DEPLOYMENT_NAME>
```

See a history of rollouts (revisions).
```
kubectl rollout history deploy/xbs-helm-dpmnt2
```


### Undo

Rollback to previous revision
```
kubectl rollout undo deploy/xbs-helm-dpmnt2
```




## Delete

Delete specific Deployment (PODs inside DEPLOYMENT will be destroyed as well)
```
kubectl delete deploy xbs-dmpnt

kubectl delete deployments xbs-dmpnt
```








# SERVICEs

## List

List services
```
kubectl get services
```

Describe
```
kubectl describe services/webapp1-clusterip-svc
```

## Create

Create a service `redis-service` to expose the `redis` application within the cluster on port `6379`.
```
# Imperative command

# Actual creation 
kubectl expose pod redis --port=6379 --name redis-service

# Dry run
kubectl expose pod redis --port=6379 --name redis-service --dry-run=client -o yaml
```


## View IP

Get only IP of specific service
```
kubectl get services/webapp1-clusterip-svc -o go-template='{{(index .spec.clusterIP)}}'
```

Example of use:
```
export CLUSTER_IP=$(kubectl get services/webapp1-clusterip-svc -o go-template='{{(index .spec.clusterIP)}}')
echo CLUSTER_IP=$CLUSTER_IP
curl $CLUSTER_IP:80
```


# INGRESS

## VIEW INGRESSes

View existing Ingresses
```
kubectl get ing

      NAME             HOSTS                   ADDRESS   PORTS     AGE
      webapp-ingress   my.kubernetes.example             80        5s
```

## DESCRIBE

```
kubectl describe ingress/webapp-ingress
```


# CONFIGMAPs


## VIEW CONFIGMAPs

List Configmaps from all namespaces
```
kubectl get configmaps --all-namespaces
```

View specific Configmap from specific namespace in `yaml`-based format
```
kubectl get configmaps --namespace kube-system weave-net -o yaml
```

# NAMESPACE

## Create

Create a new namespace called `dev-ns`.
```
# Imperative

kubectl create namespace dev-ns
```

# SECRETS

## Create 

```
# Imperative
kubectl create secret generic db-secret --from-literal=DB_Host=sql01 --from-literal=DB_User=root --from-literal=DB_Password=password123
```

## Decode

Decode specific secret `AUDITING_DOMAIN`
```
kubectl get secrets envsecrets -o json | jq -r '.data.AUDITING_DOMAIN' | base64 -D
```

Another way to decode:
```
kubectl get secrets envsecrets -o yaml

      #lookup for the key: AUDITING_DOMAIN
      
      #copy the value and:
      
      #decrypt it

# Do not use `echo` as it's not always give the correct answer
printf "<value>" | base64 -D
```

# CERTIFICATE SIGNING REQUEST (CSR)

List `CSR` object
```
kubectl get csr
```

Approve/Deny specific CSR
```
# Approve
kubectl certificate approve jane 

# Deny
kubectl certificate deny jane 
```

Get `certificate` for signed `CSR` (and provide to the requester, if needed):
```
# Get CSR object as YAML
kubectl get csr jane -o yaml

# Copy its `status.certificate` value

# Decode it from base64 format
```

Delete `CSR`
```
kubectl delete csr jane
```


# PORTS

Port forward specific pod
```
kubectl port-forward <pod_name> 8080:8080
```

Port forward pod by its template name
```
kubectl port-forward -n oos $(kubectl get pods -n oos| grep port-information-domain | awk '{print $1}') 8080:8080
```

# ROLE

Find all `roles` handled by Kubernetes
```
kubectl get clusterrole -n kube-system
```

See what exact permissions are defined by the role (`view` role in the example)
```
kubectl describe clusterrole -n kube-system view
```

Find all `role` bindings to `group`
```
kubectl get clusterrolebinding -n kube-system
```

See what `group` is bound to `role` (`view` role in the example)
```
kubectl describe clusterrolebinding -n kube-system view
```


# TAINT AND TOLERATIONS

> **NOTE**: "Don't place any random Pod on the Node - just specified ones. And only if they want to".

## Overall

`Taint` might be placed on `Node`. `Toleration` might be placed on `Pod`.

If `Node` has specific `Taint`, only `Pods` with corresponding `Toleration` could be placed on the Node.

> **NOTE**: It doesn't guarantee that Pod will be placed on that Node, tho.
> If `Pod` has specific `Toleration`, it can be placed on any Node, including the one with corresponding `Taint`.
> Thus, it's only garantees that no `Pod` without `Toleration` will be placed on the `Node` with `Taint`.


## Add

Create a taint on `node01` with key of `spray`, value of `mortein` and effect of `NoSchedule`
```
# <TAINT_EFFECT> defines what happens to the Pod, if it doesn't tolerate the Taint of this Node
# kubectl taint nodes <NODE-NAME> <TAINT_KEY>=<TAINT_VALUE>:<TAINT_EFFECT>

kubectl taint nodes node01 spray=mortein:NoSchedule
```

Create a Pod with a tolleration:
```
# The definition of Pod must have following block then
...
spec:
  containers:
  - image: nginx
    name: bee
  tolerations:
  - effect: NoSchedule
    key: "spray"
    operator: "Equal"
    value: "mortein"
...
```

## Remove

Remove from node `foo` the taint with key `dedicated` and effect `NoSchedule` if one exists
```
kubectl taint nodes foo dedicated:NoSchedule-
```

Remove the taint on node `controlplane`, which currently has the taint effect of `NoSchedule`.
```
kubectl taint nodes controlplane :NoSchedule-
```




# NODE AFFINITY

> **NOTE**: "Place this Pods to only this Node".

> **NOTE**: `Node Selector`, which uses Labels on the Nodes, can do +/- the same.
> But it only can place the Pod to the Node. It can't use `OR` or `NOT` conditions during selecting of the Nodes.
> So not "the Pod on this Node or that Node", not "the Pod not on this Node".

















