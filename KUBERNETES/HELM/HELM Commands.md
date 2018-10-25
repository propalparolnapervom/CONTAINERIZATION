# HELM COMMANDS

# CHARTs

Create initial (template) chart
```
helm create xbs-chart
```

Install a chart archive

> There are five different ways you can express the chart you want to install:

> 1. By chart reference: helm install stable/mariadb
> 2. By path to a packaged chart: helm install ./nginx-1.2.3.tgz
> 3. By path to an unpacked chart directory: helm install ./nginx
> 4. By absolute URL: helm install https://example.com/charts/nginx-1.2.3.tgz
> 5. By chart reference and repo url: helm install --repo https://example.com/charts/ nginx
```
ls -la 

      drwxr-xr-x  7 sbur  staff  224 Oct 25 18:23 xbs-chart
      
helm install xbs-chart
```








































