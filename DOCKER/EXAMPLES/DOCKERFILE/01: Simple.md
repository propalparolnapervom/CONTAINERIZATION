# SIMPLE


## Files

```
ls -la 

      -rw-r--r--  1 sbur  staff   71 Dec  4 13:14 Dockerfile
      -rwxr-xr-x  1 sbur  staff   43 Dec  4 13:09 script.sh
```


```
cat script.sh

echo
echo
echo "  Container: ONE"
echo
```


```
cat Dockerfile

FROM alpine
COPY script.sh /scripts/script.sh
CMD sh /scripts/script.sh
```

## Build

```
ls -la 

      -rw-r--r--  1 sbur  staff   71 Dec  4 13:14 Dockerfile
      -rwxr-xr-x  1 sbur  staff   43 Dec  4 13:09 script.sh
      
      
docker build -t test .
```


























