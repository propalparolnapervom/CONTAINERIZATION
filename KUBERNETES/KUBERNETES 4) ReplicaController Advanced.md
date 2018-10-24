# KUBERNETES REPLICACONTROLLER ADVANCED


# REPLICACONTROLLER CONFIG FILE

## CREATION

Create Config File `rc-creation.yml` to create ReplicationController for 3 PODs.
```
apiVersion: v1
kind: ReplicationController
metadata:
  name: xbs-rc
  labels:
    app: xbs-app-rc
    type: front-end-rc
spec:
  template:
    metadata:
      name: xbs-pod
      labels:
        app: xbs-app-pod
        type: front-end-pod
    spec:
      containers:
      - name: nginx-container
        image: nginx
  replicas: 3
```



## RUNNING

Run ReplicaController from just created Config File
```
kubectl create -f rc-creation.yml
```





































