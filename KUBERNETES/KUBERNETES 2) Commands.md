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


List a specific pod in JSON output format
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

Deploy a POD `nginx-pod-name` from `nginx` already existing Docker image (from Docker Hub)
```
kubectl run nginx-pod-name --image=nginx
```






**************

  # List a single replication controller with specified NAME in ps output format.
  kubectl get replicationcontroller web
  

  
  # List a pod identified by type and name specified in "pod.yaml" in JSON output format.
  kubectl get -f pod.yaml -o json
  
  # Return only the phase value of the specified pod.
  kubectl get -o template pod/web-pod-13je7 --template={{.status.phase}}
  
  # List all replication controllers and services together in ps output format.
  kubectl get rc,services
  
  # List one or more resources by their type and names.
  kubectl get rc/web service/frontend pods/web-pod-13je7
  
  # List all resources with different types.
  kubectl get all









































