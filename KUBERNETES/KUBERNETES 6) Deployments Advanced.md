# KUBERNETES DEPLOYMENT ADVANCED


# DEPLOYMENT CONFIG FILE

## CREATION

Create Config File `dpmnt-creation.yml` to create Deployment for 3 PODs and those, who corresponds to the label.
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: xbs-dpmnt
  labels:
    app: xbs-app-dpmnt
    type: front-end-dpmnt
spec:
  template:
    metadata:
      name: xbs-pod
      labels:
        app: xbs-app-pod
        type: front-end-dpmnt
    spec:
      containers:
      - name: nginx-container
        image: nginx
  replicas: 3
  selector:
    matchLabels:
      type: front-end-dpmnt
```



## RUNNING

Run Deployment from just created Config File
```
kubectl create -f dpmnt-creation.yml
```





































