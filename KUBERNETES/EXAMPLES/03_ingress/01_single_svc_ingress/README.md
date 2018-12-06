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

```
kubectl create -f single_svc_ingress.yml
```

















