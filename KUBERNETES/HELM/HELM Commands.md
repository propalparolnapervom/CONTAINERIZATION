# HELM COMMANDS

# CHARTs

**Create**

Create a new chart with the random name (from <xbs-cart> dir)
```
helm create xbs-chart
```

Create a new chart with the specific name (from <xbs-cart> dir)
```
cd <xbs-cart>
helm install --name email-autodiscover .
```

**Install** 

Install a chart archive.

> There are five different ways you can express the chart you want to install:

> 1. By chart reference: `helm install stable/mariadb`
> 2. By path to a packaged chart: `helm install ./nginx-1.2.3.tgz`
> 3. By path to an unpacked chart directory: `helm install ./nginx`
> 4. By absolute URL: `helm install https://example.com/charts/nginx-1.2.3.tgz`
> 5. By chart reference and repo url: `helm install --repo https://example.com/charts/ nginx`
```
ls -la 

      drwxr-xr-x  7 sbur  staff  224 Oct 25 18:23 xbs-chart
      
helm install xbs-chart
```


**List**

List running releases
```
helm list

helm ls
```

List deleted releases (which left for rollback)
```
helm list -a

helm ls -a
```

**Status**

Dislpay status of the specific release (use `<release name>`, not `<chart name>`)
```
helm status nihilist-llama
```


**Delete**

Delete the release from Kubernetes (use `<release name>`, not `<chart name>`):

1. Partially (to leave info for rollback)
```
helm delete xbs-chart
```

2. Fully (to remove all info, even one for rollback)
```
helm delete --purge xbs-chart
```

# REPOSITORY

## List

List all of already added chart repositories
```
helm repo list
```


## Add

Add new Helm repo
```
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```

## Update

Update all repos 
```
helm repo update
```

## Search

Search for stable release versions matching the keyword "nginx"
```
helm search repo nginx
```

Search for release versions matching the keyword "nginx", including pre-release versions
```
helm search repo nginx --devel
```

Search for the latest stable release for nginx-ingress with a major version of 1
```
helm search repo nginx-ingress --version ^1.0.0
```

































