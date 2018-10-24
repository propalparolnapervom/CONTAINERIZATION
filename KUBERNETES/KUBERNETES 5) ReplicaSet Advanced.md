# KUBERNETES REPLICASER ADVANCED


# REPLICASER CONFIG FILE

## CREATION

Create Config File `rs-creation.yml` to create ReplicaSet for 3 PODs and those, who corresponds to the label.
```
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: xbs-rs
  labels:
    app: xbs-app-rs
    type: front-end-rs
spec:
  template:
    metadata:
      name: xbs-pod
      labels:
        app: xbs-app-pod
        type: front-end-rs
    spec:
      containers:
      - name: nginx-container
        image: nginx
  replicas: 3
  selector:
    matchLabels:
      type: front-end-rs
```



## RUNNING

Run ReplicaSet from just created Config File
```
kubectl create -f rs-creation.yml
```





































