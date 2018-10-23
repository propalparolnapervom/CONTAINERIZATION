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

# PODs

List all pods in ps output format
```
kubectl get pods
```

List all pods in ps output format with more information (such as node name).
```
kubectl get pods -o wide
```

List a single pod in JSON output format
```
kubectl get -o json pod web-pod-13je7
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









































