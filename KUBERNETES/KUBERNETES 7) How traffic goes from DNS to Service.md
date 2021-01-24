# How you get from DNS to specific Kubernetes Service?

Let's see the whole chain on working example
```

# DNS
*.dry.studio   ->

    # ALB
    dev-eks1-alb-external-kbnennbnbnbn-eieisis.eu-west-1.elb.amazonaws.com   ->
    (arn:aws:elasticloadbalancing:eu-east-1:13412341234:loadbalancer/app/dev-eks1-alb-external-kbnennbnbnbn-eieisis)

    port 80:  -> port 443

    port 443: -> 


        # Target Group of Load Balancer
        eks1-dev-external
        (arn:aws:elasticloadbalancing:eu-east-1:13412341234:targetgroup/eks1-dev-external/k3kk4k43k3kj43)

        port 31380 on each Kubernetes node   -> 


            # Service of NodePort type
            NAMESPACE              NAME                                                         TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)
            kube-system            ingress-controller-nginx-ingress-controller                  NodePort    172.20.159.84    <none>        80:31380/TCP,443:30114/TCP

            k describe -n kube-system service ingress-controller-nginx-ingress-controller
            Name:                     ingress-controller-nginx-ingress-controller
            Namespace:                kube-system
            ...
            NodePort:                 http  31380/TCP
            Endpoints:                10.5.89.119:80
            ...
            NodePort:                 https  30114/TCP
            Endpoints:                10.5.89.119:443
            ...


                # Pod for Ingress-controller
                k describe pod -n kube-system ingress-controller-nginx-ingress-controller-7d6b5d778b-jzqpq
                Name:         ingress-controller-nginx-ingress-controller-7d6b5d778b-jzqpq
                ...
                IP:           10.5.89.119
                ...             


                    # Kubernetes resource Ingress
                    You configure Nginx in Ingress-controller above by creating Ingress resources,
                    which describes to which Kubernetes service the traffic should be re-directed eventually

                    kd ingress xburser
                    Name:             xburser
                    Namespace:        default
                    ...
                    Rules:
                      Host         Path  Backends
                      ----         ----  --------
                      xburser.com  
                                  /      xbs:8081 (<error: endpoints "xbs" not found>)
                    ...


```
