# WHAT

Create Service (type: ClusterIP) with simple Docker nginx container `ppnp/simple_html`.

# STEPS

Create a Deployment and Service (type: ClusterIP)
```
kubectl create -f dpmnt-srv-creation.yml
```


# VERIFYING


Describe service
```
kubectl describe service/xbs-service

    Name:              xbs-service
    Namespace:         default
    Labels:            <none>
    Annotations:       <none>
    Selector:          type=front-end-dpmnt
    Type:              ClusterIP
    IP:                10.110.61.130
    Port:              <unset>  8080/TCP
    TargetPort:        80/TCP
    Endpoints:         172.17.0.5:80,172.17.0.6:80,172.17.0.7:80
    Session Affinity:  None
    Events:            <none>
```

