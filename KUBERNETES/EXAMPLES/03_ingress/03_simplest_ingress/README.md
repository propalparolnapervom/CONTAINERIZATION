
## APPLY

```
kubectl apply -f real_dpmnt.yml 

    ingress "demo-ingress" created
    service "nginx" created
    deployment "nginx" created


kubectl apply -f ingress_controller.yml 

    service "ingress-nginx" created
    deployment "ingress-nginx" created


kubectl apply -f default_backend.yml 

    service "nginx-default-backend" created
    deployment "nginx-default-backend" created
```


## VERIFY

Get your Ingress Controller entrypoint:
```
kubectl describe service ingress-nginx

    Name:                     ingress-nginx
    Namespace:                default
    Labels:                   <none>
    Annotations:              kubectl.kubernetes.io/last-applied-configuration={"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"ingress-nginx","namespace":"default"},"spec":{"externalIPs":["192.168.99.100"]...
    Selector:                 app=ingress-nginx
    Type:                     NodePort
    IP:                       10.107.201.243
    External IPs:             192.168.99.100
    Port:                     http  80/TCP
    TargetPort:               http/TCP
    NodePort:                 http  30169/TCP
    Endpoints:                172.17.0.11:80
    Port:                     https  443/TCP
    TargetPort:               https/TCP
    NodePort:                 https  32019/TCP
    Endpoints:                172.17.0.11:443
    Session Affinity:         None
    External Traffic Policy:  Cluster
    Events:                   <none>
```

To get default backend's 404:
```
curl 192.168.99.100:80
```

If you match the Ingress rules, you will receive a default Nginx response
```
curl -H 'Host:mysite.com' 192.168.99.100:80
```