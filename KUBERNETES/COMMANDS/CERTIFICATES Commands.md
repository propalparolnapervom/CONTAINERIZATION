# CERTIFICATES 

## Overall 

To make secure SSL/TLS connection:
- assymetric encryption (pub/private keys) is in use to encrypt traffic between client and server;
- certificate is in use to prove that public key belongs to the on who sends it, not to any other person;

`Certificate Authority (CA)` signs such certificates with its own `private key`, and then any client can use CA `public key` to see if the certificate is valid.

Once server proved with help of certificate that the `public key` is his, he asks the client to do the same. Thus, the same is done by the client.

Kubernetes uses certificates to secure all possible connections between:
- clients;
- servers;
- CA

The same Kubernetes components can act both as Servers (when they provide info) and Client (when they request info from other componentns).

> **NOTE**: The certificate names below are optional and can be different within each K8S cluster.
> The current names are just for the convenient understanding of their purpose.


Thus, we need both **`*.crt` certificate** and corresponding **`*.key` private key** of following types:
- Server Certificates:
   - `etcdserver`;
   - `apiserver`;
- Client Certificates:
   - `admin` (the one that Admin will use via `kubectl`, for ex);
   - `scheduler`;
   - `controller-manager`;
   - `kube-proxy`;
   - `apiserver-kubelet-client` (when Api-server acts as a Client for the Kubelet);
   - `apiserver-etcd-client` (when Api-server acts as a Client for the Etcd);
   - `kubelet-apiserver-client` (when Kubelet acts as a Client for the Api-server);
- CA Certificates:
   - `ca`.


## Generate 

CA certificate will be self-signed (as we don't use other Certificate Authority in this example).

All other certificates will be signed by CA certificate.

K8S doesn't have users, but cert/private-key pair is something like user/password pair - just more secure.


### Certificate Authority (CA)

The following will be generated eventually:
- `ca.key` - the `private key`;
- `ca.crt` - the `certificate`;
- `ca.srl` - manually created file with some random sequence number, that CA will use to sign other certificates (if needed)


Generate new `private key` 
```
openssl genrsa -out ca.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above
```
openssl req -new -key ca.key -subj "/CN=KUBERNETES-CA" -out ca.csr
```

Generate a self-signed `certificate`, by signing by ourselves the `CSR` with corresponding `private key`
```
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

> **NOTE**: If `ca.key`/`ca.crt` key pair is gonna be used to sign other certificates, create manually `ca.srl` with some number.
> The sequence number from the file is gonna be used to generate a unique serial number for each signed certificate.
> For example:
> `echo 02 > ca.srl`


### Admin User

The following will be generated eventually:
- `admin.key` - the `private key`;
- `admin.crt` - the `certificate`.

> **NOTE**: The `certificate` must contain information, that this Client requires admin privileges.

Generate new `private key` 
```
openssl genrsa -out admin.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: Whatever random value for `/CN` is chosen, `kubectl` will use it for authentication. 
> So corresponding name will be used to log its activity within audit logs, for example.

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key admin.key -subj "/CN=kube-admin/O=system:masters" -out admin.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt
```

### Kube-Scheduler

The following will be generated eventually:
- `scheduler.key` - the `private key`;
- `scheduler.crt` - the `certificate`.

> **NOTE**: The `certificate` must contain information, that this Client requires admin privileges.


Generate new `private key` 
```
openssl genrsa -out scheduler.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: This is a system component, part of the Controlplane. Thus, it's name must start with `system:` prefix.

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key scheduler.key -subj "/CN=system:kube-scheduler/O=system:masters" -out scheduler.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in scheduler.csr -CA ca.crt -CAkey ca.key -out scheduler.crt
```



### Controller-Manager

The following will be generated eventually:
- `controller-manager.key` - the `private key`;
- `controller-manager.crt` - the `certificate`.

> **NOTE**: The `certificate` must contain information, that this Client requires admin privileges.


Generate new `private key` 
```
openssl genrsa -out controller-manager.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: This is a system component, part of the Controlplane. Thus, it's name must start with `system:` prefix.

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key controller-manager.key -subj "/CN=system:kube-controller-manager/O=system:masters" -out controller-manager.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in controller-manager.csr -CA ca.crt -CAkey ca.key -out controller-manager.crt
```



### Kube-Proxy

The following will be generated eventually:
- `kube-proxy.key` - the `private key`;
- `kube-proxy.crt` - the `certificate`.

> **NOTE**: The `certificate` must contain information, that this Client requires admin privileges.


Generate new `private key` 
```
openssl genrsa -out kube-proxy.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key kube-proxy.key -subj "/CN=kube-proxy/O=system:masters" -out kube-proxy.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in kube-proxy.csr -CA ca.crt -CAkey ca.key -out kube-proxy.crt
```


### Apiserver-Kubelet-Client

> **NOTE**: When `api-server` acts as a Client for the `kubelet`.

The following will be generated eventually:
- `apiserver-kubelet-client.key` - the `private key`;
- `apiserver-kubelet-client.crt` - the `certificate`.

> **NOTE**: The `certificate` must contain information, that this Client requires admin privileges.

Generate new `private key` 
```
openssl genrsa -out apiserver-kubelet-client.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: This is a system component, part of the Controlplane. Thus, it's name must start with `system:` prefix.

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key apiserver-kubelet-client.key -subj "/CN=system:apiserver-kubelet-client/O=system:masters" -out apiserver-kubelet-client.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in apiserver-kubelet-client.csr -CA ca.crt -CAkey ca.key -out apiserver-kubelet-client.crt
```


### Apiserver-Etcd-Client

> **NOTE**: When `api-server` acts as a Client for the `etcd`.

The following will be generated eventually:
- `apiserver-etcd-client.key` - the `private key`;
- `apiserver-etcd-client.crt` - the `certificate`.

> **NOTE**: The `certificate` must contain information, that this Client requires admin privileges.

Generate new `private key` 
```
openssl genrsa -out apiserver-etcd-client.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: This is a system component, part of the Controlplane. Thus, it's name must start with `system:` prefix.

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key apiserver-etcd-client.key -subj "/CN=system:apiserver-etcd-client/O=system:masters" -out apiserver-etcd-client.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in apiserver-etcd-client.csr -CA ca.crt -CAkey ca.key -out apiserver-etcd-client.crt
```



### Kubelet-Apiserver-Client

> **NOTE**: When `kubelet` acts as a Client for the `api-server`.

The following will be generated eventually:
- `kubelet-apiserver-client.key` - the `private key`;
- `kubelet-apiserver-client.crt` - the `certificate`.

> **NOTE**: The `certificate` must contain information, that this Client requires admin privileges.

Generate new `private key` 
```
openssl genrsa -out kubelet-apiserver-client.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key kubelet-apiserver-client.key -subj "/CN=kubelet-apiserver-client/O=system:masters" -out kubelet-apiserver-client.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in kubelet-apiserver-client.csr -CA ca.crt -CAkey ca.key -out kubelet-apiserver-client.crt
```




## Use Cases

### API

Call K8S API as an admin user
```
curl https://kube-apiserver:6443/api/v1/pods \
--key admin.key \
--cert admin.crt \
--cacert ca.crt
```




































