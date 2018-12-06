# README

[Docs](https://kubernetes.io/docs/concepts/services-networking/ingress/#the-ingress-resource)

Following steps are for **Minikube**.




# Install Ingress Controller

You will need an **ingress controller** to satisfy an ingress, simply creating the resource will have no effect.

Skip all this block if Ingress Controller has been already installed.
```
kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx --watch
```

There are a number of [ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-controllers) you may choose from.

In our case we will [install](https://kubernetes.github.io/ingress-nginx/deploy/) NGINX Ingres Controller.


## Prerequisite Generic Deployment Command

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

## Provider Specific Steps

### Minikube

For standard usage:
```
minikube addons enable ingress

    ingress was successfully enabled
```

## Verify installation

To check if the ingress controller pods have started, run the following command:

```
kubectl get pods --all-namespaces -l app.kubernetes.io/name=ingress-nginx --watch
```

Once the operator pods are running, you can cancel the above command by typing Ctrl+C. Now, you are ready to create your first ingress.










