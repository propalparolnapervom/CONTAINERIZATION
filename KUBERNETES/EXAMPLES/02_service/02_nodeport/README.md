# WHAT

Create Service (type: NodePort) with simple Docker nginx container `ppnp/simple_html`.

# STEPS

Create a Deployment and Service (type: NodePort)
```
kubectl create -f dpmnt-srv-creation.yml
```


# VERIFYING

Find service:
```
kubectl get svc

    NAME               TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
    kubernetes         ClusterIP   10.96.0.1      <none>        443/TCP          4h
    xbs-nodeport-svc   NodePort    10.102.74.27   <none>        8080:30080/TCP   12m
```

Describe service:
```
kubectl describe svc/xbs-nodeport-svc

    Name:                     xbs-nodeport-svc
    Namespace:                default
    Labels:                   type=front-end-dpmnt
    Annotations:              <none>
    Selector:                 type=front-end-dpmnt
    Type:                     NodePort
    IP:                       10.102.74.27
    Port:                     <unset>  8080/TCP
    TargetPort:               80/TCP
    NodePort:                 <unset>  30080/TCP
    Endpoints:                172.17.0.5:80,172.17.0.6:80,172.17.0.7:80
    Session Affinity:         None
    External Traffic Policy:  Cluster
    Events:                   <none>
```

Get from `<Kubernetes_node_IP>:<NodePort>`:
```
curl 192.168.99.100:30080

    <html>
    <head>
        <title>ONE: HEAD</title>
    </head>
    <body>
        <p>ONE: BODY</p>
    </body>
```

