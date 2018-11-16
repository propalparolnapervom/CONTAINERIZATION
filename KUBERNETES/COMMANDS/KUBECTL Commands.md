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



# NODEs

List all nodes
```
kubectl get nodes

      NAME       STATUS    ROLES     AGE       VERSION
      minikube   Ready     master    1h        v1.10.0
```



# PODs

## LIST PODs

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
```

List a specific POD in JSON output format
```
kubectl get -o json pod nginx-65899c769f-v8r2p
```



## DESCRIBE PODs

Describe all PODs
```
kubectl describe pods
```

Describe specific POD
```
kubectl describe pods nginx-pod-name-58b8b74459-nzc57
```





## DEPLOY PODs

### Command Line

Deploy a POD `nginx-pod-name` from `nginx` already existing Docker image (from Docker Hub)
```
kubectl run nginx-pod-name --image=nginx
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



## DESTROY PODs

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

## GET PORT OF POD

```
kubectl get pods email-autodiscover --template=‘{{(index (index .spec.containers 0).ports 0).containerPort}}{{“\n”}}’

      80
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


## CREATE DEPLOYMENTs

Create deployment (explicitly)
```
kubectl create -f deploy-definition.yml
```

Create deployment (inplicitily)
```
kubectl run nginx --image=nginx
```


## LIST DEPLOYMENTs

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

## UPDATE DEPLOYMENTs (SCALE, for instance)

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




## APPLY DEPLOYMENTs

Apply a configuration to a resource by filename or stdin. 

The resource name must be specified. This resource will be created if it doesn't exist yet. 

To use `apply`, always create the resource initially with either `apply` or `create --save-config`.
```
kubectl apply -f xbs-chart/templates/d.yaml
```


## UNDO DEPLOYMENTs

```
kubectl rollout undo deploy/xbs-helm-dpmnt2
```

See a history of rollout.
```
kubectl rollout history deploy/xbs-helm-dpmnt2
```


## DELETE DEPLOYMENTs

Delete specific Deployment (PODs inside DEPLOYMENT will be destroyed as well)
```
kubectl delete deploy xbs-dmpnt

kubectl delete deployments xbs-dmpnt
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






















