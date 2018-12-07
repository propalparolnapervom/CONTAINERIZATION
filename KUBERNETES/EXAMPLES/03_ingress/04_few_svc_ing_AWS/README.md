# README

## WHAT

Run Ingress (type: LoadBalancer) to reach your Services. On AWS.



## 1. Install Kubernetes on AWS

Use this [steps](https://github.com/propalparolnapervom/CONTAINERIZATION/blob/master/KUBERNETES/Installation/Local-Machine/Kubeadm/KUBEADM%20Install%20K8S%20cluster.md) to install Kubernetes on your AWS serves.




## 2. Install Ingress Controller

[Docs](https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource)

Following steps are for **AWS**.

--

You will need an **ingress controller** to satisfy an ingress, simply creating the resource will have no effect.


There are a number of [ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-controllers) you may choose from.

In our case we will [install](https://kubernetes.github.io/ingress-nginx/deploy/) NGINX Ingres Controller.


### Prerequisite Generic Deployment Command

The following Mandatory Command is required for all deployments.
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml

    namespace "ingress-nginx" created
    configmap "nginx-configuration" created
    configmap "tcp-services" created
    configmap "udp-services" created
    serviceaccount "nginx-ingress-serviceaccount" created
    clusterrole "nginx-ingress-clusterrole" created
    role "nginx-ingress-role" created
    rolebinding "nginx-ingress-role-nisa-binding" created
    clusterrolebinding "nginx-ingress-clusterrole-nisa-binding" created
    deployment "nginx-ingress-controller" created
```

### Provider Specific Steps

**AWS**

In AWS we use an Elastic Load Balancer (ELB) to expose the NGINX Ingress controller behind a Service of Type=LoadBalancer. Since Kubernetes v1.9.0 it is possible to use a classic load balancer (ELB) or network load balancer (NLB) Please check the [elastic load balancing AWS details page](https://aws.amazon.com/elasticloadbalancing/details/)

**For L4:**

Check that no change is necessary with regards to the ELB idle timeout. 

In some scenarios, users may want to modify the ELB idle timeout, so please check the ELB Idle Timeouts section for additional information. 

If a change is required, users will need to update the value of `service.beta.kubernetes.io/aws-load-balancer-connection-idle-timeout` in `provider/aws/service-l4.yaml`

Then execute:

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/aws/service-l4.yaml
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/aws/patch-configmap-l4.yaml
```


### Verify installation

To check if the ingress controller pods have started, run the following command:

```
kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx --watch
```

Once the operator pods are running, you can cancel the above command by typing Ctrl+C. Now, you are ready to create your first ingress.

























