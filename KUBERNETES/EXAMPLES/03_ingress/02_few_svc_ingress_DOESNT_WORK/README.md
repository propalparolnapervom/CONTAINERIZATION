# README


## WHAT

A minimal Ingress resource.



## PREREQUIREMENTS

Make sure Ingress Controller is already installed.

For example, for Nginx Ingress Controller:
```
kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx --watch
```

## RUN

Create a Deployments to be reached
```
kubectl apply -f deployment.yml
```

```
kubectl create -f few_svc_ingress.yml
```

















