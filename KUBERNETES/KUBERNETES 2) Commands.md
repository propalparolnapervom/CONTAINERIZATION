# KUBERNETES COMMANDS


Deploy an application on the cluster
```
kubectl run
```

View information about the cluster
```
kubectl cluster-info
```

List all the nodes part of the cluster
```
kubectl get pod
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



# REPLICATONCONTROLLERs

## LIST REPLICATIONCONTROLLERS

List all replication controllers
```
kubectl get rc


kubectl get replicationcontroller
```

List specific replication controller
```
kubectl get rc xbs_controller


kubectl get replicationcontroller xbs_controller
```










































