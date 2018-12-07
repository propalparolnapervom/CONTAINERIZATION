# WHAT

[Example](https://medium.com/@hagaibarel/kubernetes-and-elbs-the-hard-way-c59a15779caf)

Kubernetes cluster on the AWS.

Deploy service (Type: `NodePort`) which will be available via ELB.

## PREPARATION

Create Kubernetes cluster on AWS.

## DEPLOY SVC

Deploy `NodePort` Service.

On the Master node.
```
kubectl apply -f svc_nodeport.yml
```

View service:
```
kubectl get svc

    NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
    kubernetes         ClusterIP   10.96.0.1       <none>        443/TCP          50m
    xbs-nodeport-svc   NodePort    10.106.243.49   <none>        8080:30080/TCP   9m
```

##  CREATE ELB

Create Classic Load Balancer
```
Protocol:               TCP
Load Balancer Port:     8080
Instance Port:          30080
```

Select the VPC that hosts the cluster and the relevant subnets.

Create a Security Group to work with your 8080 port.

In the add EC2 instances screen, select all of you cluster’s worker instances.

The last step is to add to your node’s security group a rule allowing traffic from the load balancer’s security group (which we defined while creating the load balancer).

Whait while your nodes will be InService.