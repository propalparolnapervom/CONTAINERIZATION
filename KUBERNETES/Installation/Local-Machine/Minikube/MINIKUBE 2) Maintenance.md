# MINICUBE MAINTENANCE

[Minicube](https://kubernetes.io/docs/setup/minikube/)


## STOP/START

Start local Kubernetes cluster
```
minikube start
```


Stop local Kubernetes cluster
```
minikube stop
```


## TEST MINIKUBE INSTALLATION

Create deployment:
```
kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.4 --port=8080

      deployment "hello-minikube" created
```

Expose deployed service
```
kubectl expose deployment hello-minikube --type=NodePort

      service "hello-minikube" exposed
```

To check whether the pod is up and running
```
kubectl get pod

      NAME                             READY     STATUS    RESTARTS   AGE
      hello-minikube-6c47c66d8-jk8nj   1/1       Running   0          11m
```

We can see that the pod is now Running and we will now be able to curl it:
```
curl $(minikube service hello-minikube --url)
```

Delete service
```
kubectl delete service hello-minikube

      service "hello-minikube" deleted
```

Delete deployment
```
kubectl delete deployment hello-minikube

      deployment "hello-minikube" deleted
```
















