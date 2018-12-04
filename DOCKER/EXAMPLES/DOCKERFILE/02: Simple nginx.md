# SIMPLE NGINX

[Docker + Nginx](https://docs.docker.com/samples/library/nginx/)

## Files

```
cat index.html

<html>
  <head>
    <title>ONE: HEAD</title>
  </head>
  <body>
    <p>ONE: BODY</p>
  </body>
```


```
cat Dockerfile

FROM nginx:1.15-alpine
COPY index.html /usr/share/nginx/html
```

## Build

```
ls -la 

      -rw-r--r--  1 sbur  staff   61 Dec  4 13:35 Dockerfile
      -rw-r--r--  1 sbur  staff  102 Dec  4 13:27 index.html
      
      
docker build -t to_del .
```

## Example run

```
docker run -p 80:80 to_del
```




























