# CERTIFICATES 

[Docs](https://kubernetes.io/docs/setup/best-practices/certificates/)

# Overall 

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
- CA Certificates:
   - `ca`;
- Client Certificates:
   - `admin` (the one that Admin will use via `kubectl` or `curl`, for ex);
   - `scheduler`;
   - `controller-manager`;
   - `kube-proxy`;
   - `apiserver-kubelet-client` (when Api-server acts as a Client for the Kubelet);
   - `apiserver-etcd-client` (when Api-server acts as a Client for the Etcd);
   - `kubelet-apiserver-client` (when Kubelet acts as a Client for the Api-server);
- Server Certificates:
   - `etcdserver`;
   - `apiserver`;
   - `kubelet`


# Generate

CA certificate will be self-signed (as we don't use other Certificate Authority in this example).

All other certificates will be signed by CA certificate.

K8S doesn't have users, but cert/private-key pair is something like user/password pair - just more secure.

To generate a certificates, for example following tools could be used:
- openssl;
- easyrsa;
- cfssl.

> **NOTE**: In case of `kubeadm` tool using it generates certificates instead of you.


## Generate: Certificate Authority (CA)

The following will be generated eventually:
- `ca.key` - the `private key`;
- `ca.crt` - the `certificate` (so-called `CA root certificate`);
- `ca.srl` - manually created file with some random sequence number, that CA will use to sign other certificates (if needed)

> **NOTE**: For Client to verify Server certificate, signed by CA and vise-versa - each Client and Server must have CA root certificate.
> As each Client or Server certificate is signed with `ca.key` private key, with help of `ca.crt` CA root certificate this sign can be verified.


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




## Generate: Client Certificates

> **NOTE**: For Client to verify Server certificate, signed by CA and vise-versa - each Client and Server must have CA root certificate.
> As each Client or Server certificate is signed with `ca.key` private key, with help of `ca.crt` CA root certificate this sign can be verified.


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

> **NOTE**: Only if you want to use different cert/key pairs for cases, when `api-server` acts as:
> 
> - server
> - client (for the `kubelet`)


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

> **NOTE**: Only if you want to use different cert/key pairs for cases, when `api-server` acts as:
> 
> - server
> - client (for the `etcd`)

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


As `kubelete` installed on each Worker Node, the following will be generated eventually:
- for 1st Worker Node, which name is `node01`;
   - `kubelet-client-node01.key` - the `private key`;
   - `kubelet-client-node01.crt` - the `certificate`.
- for 2nd Worker Node, which name is `node02`;
   - `kubelet-client-node02.key` - the `private key`;
   - `kubelet-client-node02.crt` - the `certificate`.
- for 3rd Worker Node, which name is `node03`;
   - `kubelet-client-node03.key` - the `private key`;
   - `kubelet-client-node03.crt` - the `certificate`.
- etc



Generate new `private key` 
```
openssl genrsa -out kubelet-client-node01.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: This is a system component, but not part of the Controlplane. 
> As `api-server` must understand that 1) this client is a Worker Node; 2) the Node is specific one, and some privileges should be granted to it,
> the name within `kubelet` cert must be in the `system:node:<NODE_NAME>` format.


> **NOTE**: K8S has "system:nodes" group with some node priviliges.
> 
> The `kubelet` cert as a Client should be added to that group by adding "/O=system:nodes" within a certificate
```
openssl req -new -key kubelet-client-node01.key -subj "/CN=system:node:node01/O=system:nodes" -out kubelet-client-node01.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in kubelet-client-node01.csr -CA ca.crt -CAkey ca.key -out kubelet-client-node01.crt
```





## Generate: Server Certificates

> **NOTE**: For Client to verify Server certificate, signed by CA and vise-versa - each Client and Server must have CA root certificate.
> As each Client or Server certificate is signed with `ca.key` private key, with help of `ca.crt` CA root certificate this sign can be verified.


### Etcdserver

The following will be generated eventually:
- `etcdserver.key` - the `private key`;
- `etcdserver.crt` - the `certificate`.

In case of multiple `etcd` servers (which form a cluster for high-availability), key/certs should be generated for each additional instance:
- for 1st additional `etcd` server;
   - `etcdpeer1.key` - the `private key`;
   - `etcdpeer1.crt` - the `certificate`.
- for 2nd additional `etcd` server;
   - `etcdpeer2.key` - the `private key`;
   - `etcdpeer2.crt` - the `certificate`.
- etc


> **NOTE**: The `certificate` must contain information, that this Server requires admin privileges.

Generate new `private key` 
```
openssl genrsa -out etcdserver.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: K8S has "system:masters" group with admin priviliges.
> 
>  To distinct admin user from non-admin user, it should be added to that group by adding "/O=system:masters" within a certificate
```
openssl req -new -key etcdserver.key -subj "/CN=etcd-server/O=system:masters" -out etcdserver.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in etcdserver.csr -CA ca.crt -CAkey ca.key -out etcdserver.crt
```


### Api-Server

The following will be generated eventually:
- `apiserver.key` - the `private key`;
- `apiserver.crt` - the `certificate`.


> **NOTE**: The `certificate` must contain information, that this Server requires admin privileges.


Generate new `private key` 
```
openssl genrsa -out apiserver.key 2048
```

As `api-server` is kinds central place for all activitiy, it shoulb be available under many names:
- kubernetes
- kubernetes.default
- kubernetes.default.svc
- kubernetes.default.svc.cluster.local
- 10.96.0.1 (IP of the host server for master node)
- 172.17.0.87 (IP of the Pod with its container)

To specify all these multiple alternative names during certificate generation, a config file could be used:
```
cat << EOF > openssl.cnf
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]
countryName = UA
[v3_req]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation
subjectAltName = @alt_names
[alt_names]
DNS.1 = kubernetes
DNS.2 = kubernetes.default
DNS.3 = kubernetes.default.svc
DNS.4 = kubernetes.default.svc.cluster.local
IP.1 = 10.96.0.1
IP.2 = 172.17.0.87
EOF
```

Generate new `CSR` (Certificate Signing Request), based on the:
- `private key` from above;
- `openssl.cnf` from above.

```
openssl req -new -key apiserver.key -subj "/CN=kube-apiserver" -out apiserver.csr -config openssl.cnf
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in apiserver.csr -CA ca.crt -CAkey ca.key -out apiserver.crt
```



### Kubelet

As `kubelete` installed on each Worker Node, the following will be generated eventually:
- for 1st Worker Node, which name is `node01`;
   - `kubelet-node01.key` - the `private key`;
   - `kubelet-node01.crt` - the `certificate`.
- for 2nd Worker Node, which name is `node02`;
   - `kubelet-node02.key` - the `private key`;
   - `kubelet-node02.crt` - the `certificate`.
- for 3rd Worker Node, which name is `node03`;
   - `kubelet-node03.key` - the `private key`;
   - `kubelet-node03.crt` - the `certificate`.
- etc


Generate new `private key` 
```
openssl genrsa -out kubelet-node01.key 2048
```

Generate new `CSR` (Certificate Signing Request), based on the `private key` from above

> **NOTE**: As `kubelet` is installed on each Worker Node, each certificate must contain the name of the Worker Node instead of `kubelet`
```
openssl req -new -key kubelet-node01.key -subj "/CN=node01" -out kubelet-node01.csr
```

Generate a new `certificate`, by signing the `CSR` with CA key pair
> **NOTE**: This time the `certificate` is signed by CA, not self-signed
```
openssl x509 -req -in kubelet-node01.csr -CA ca.crt -CAkey ca.key -out kubelet-node01.crt
```






# Use Cases

As admin user, you have:
- admin.crt - as your certificate (thus, kinda userid);
- admin.key - as your private key (thus, kinds password);
- ca.crt - as CA certificate, that was used to sign your admin.crt certificate;

You'd like to connect to the K8S cluster, located at `https://kube-apiserver:6443`.

How can you use those certificates/keys?


## Direct API Call

Make a direct API call
```
curl https://kube-apiserver:6443/api/v1/pods \
--key admin.key \
--cert admin.crt \
--cacert ca.crt
```

## Kuboconfig

Place certificates/keys information within special file, which name is `kube-config.yaml`
```
apiVersion: v1
clusters: 
- cluster:
     certificate-authority: ca.crt
     server: https://kube-apiserver:6443
  name: kubernetes
kind: Config
users:
- name: kubernetes-admin
  user: 
     client-certificate: admin.crt
     client-key: admin.key
```


# Rotation

Each certificate has an expiration date. New users are added to the cluster. 

So you have to re-issue the certificates from time to time.

> **NOTE**: All certificates on the K8S are signed by some CA cert/key pair. The server, where CA cert/key pair is located, is called `CA server`.
> Usually the pair is located on the Master Node - thus, it's a `CA server` at the same time.

As an admin user, you:
- installed and configured whole K8S cluster, including certificates/keys for its each component;
- own your own cert/key pair to connect to K8S cluster;

But then a new admin connected to the company. He needs an access to K8S cluster as well. 

You have to provide him with his own cert/key pair.

You can do it:
- manually
- via `Certificates API`, provided by K8S cluster

## Manually

- new admin:
   - generates `private key` by himself;
   - creates a `CSR` with help of that `private key`;
   - provides the `CSR` to you;

- you:
   - log in to the `CA server` (via SSH);
   - use `ca.crt` and `ca.key` to sign the `CSR`, a new `certificate` is generated;
   - provide newly generated `certifiate` to the new admin;

Now new admin has its own `cert`/`key` pair to connect to the K8S cluster.


## Certificates API

### Overall

`Control Manager` has components (`CSR-APPROVING` and `CSR-SIGNING`), which do generation of new certificates instead of you.

These components provide an API, which is called `Certificates API`.

In this case.

- new admin:
   - generates `private key` by himself;
   - creates a `CSR` with help of that `private key`;
   - provides the `CSR` to you;

- you:
   - send `CSR` via API, which creates a `CertificateSigningRequest` object within K8S cluster;
   - thus, now this object can be seen, reviewed and approved by any admin;
   - once approved, the certificate can be extracted and shared with user.

So, no need to manually log in to the CA server (which is Master Node, most likely). All done via API


### Details: New Admin Side

New admin Jane:

1) Generates a `private key`:
```
openssl genrsa -out jane.key 2048
```

2) Generates a `CSR`:
```
openssl req -new -key jane.key -subj "/CN=jane" -out jane.csr
```

3) Provides a `CSR` for you.


### Details: Your Side

You:

1) Get a `CSR` from a new admin
```
cat jane.csr 

-----BEGIN CERTIFICATE REQUEST-----
MIICVDCCATwCAQAwDzENMAsGA1UEAwwEamFuZTCCASIwDQYJKoZIhvcNAQEBBQAD
ggEPADCCAQoCggEBAK3suFZA0dJkifS+POdJmOJgPj1AVOPIvP1GZgrPjDYrjnhc
V9QovWg93HMJyP7mbJJvVePSIDg3VzrFq9dlycDoEiD0KtEIqm+Y/omoff5pTHuN
oN4h5zY9g7pXF7iPSQA8XvUxOnJ8smS2+UfgpNPgWrOoSHgKrFPMV+h7SuEwjP3Y
8N6kab6BTz2uEGUlB32n857Bq6vHbYgktCdoAG1QvBNXZyxd0q0jUbwbv4z+mqkB
7pNJ31yWBF5x63XYSAa+SQzW2dWEcRtR7A0pxZjhdoLm6LUGVNYGXWDm5HIc0FJx
tNaVfGcDu9l+USDnhR6Rk6nyMadXRUaktH0bQ9cCAwEAAaAAMA0GCSqGSIb3DQEB
CwUAA4IBAQCLxCarwKwC2rIdp+MzX4q2fBq6QJ+89MLqrbbHzk0dk5Nq5HvEvL1f
7KXBUsT7uF4RbVEp9syph8DQdjwQNBmW6pgtXqaBppb2TrRfxnNKwvCa/POCyMjY
SHA4VopTxn8A0vxfO43zvcq7p4tYuNstsKQXt1KQ5PcrmzDHyzJYfDdm6/7IjTJ5
hdndAKNrdeQajmRz04zLBbo42iUkNpRaFzV5biYhIfadDuUhc6LMXbXdmJIpWGkW
42ON7s5D0PKX0fdxZPbsnwP9xeBy5We70it5WAdXu1tNVAywFRXGJwTsftTfZUkA
DzoIU39WlBOklvR/8fohpmtWGK53h5Q7
-----END CERTIFICATE REQUEST-----
```

2) Encode the `CSR` in base64 format:
```
cat jane.csr | base64

LS0tLS1CRUdJTiBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0KTUlJQ1ZEQ0NBVHdDQVFBd0R6RU5NQXNHQTFVRUF3d0VhbUZ1WlRDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRApnZ0VQQURDQ0FRb0NnZ0VCQUszc3VGWkEwZEpraWZTK1BPZEptT0pnUGoxQVZPUEl2UDFHWmdyUGpEWXJqbmhjClY5UW92V2c5M0hNSnlQN21iSkp2VmVQU0lEZzNWenJGcTlkbHljRG9FaUQwS3RFSXFtK1kvb21vZmY1cFRIdU4Kb040aDV6WTlnN3BYRjdpUFNRQThYdlV4T25KOHNtUzIrVWZncE5QZ1dyT29TSGdLckZQTVYraDdTdUV3alAzWQo4TjZrYWI2QlR6MnVFR1VsQjMybjg1N0JxNnZIYllna3RDZG9BRzFRdkJOWFp5eGQwcTBqVWJ3YnY0eittcWtCCjdwTkozMXlXQkY1eDYzWFlTQWErU1F6VzJkV0VjUnRSN0EwcHhaamhkb0xtNkxVR1ZOWUdYV0RtNUhJYzBGSngKdE5hVmZHY0R1OWwrVVNEbmhSNlJrNm55TWFkWFJVYWt0SDBiUTljQ0F3RUFBYUFBTUEwR0NTcUdTSWIzRFFFQgpDd1VBQTRJQkFRQ0x4Q2Fyd0t3QzJySWRwK016WDRxMmZCcTZRSis4OU1McXJiYkh6azBkazVOcTVIdkV2TDFmCjdLWEJVc1Q3dUY0UmJWRXA5c3lwaDhEUWRqd1FOQm1XNnBndFhxYUJwcGIyVHJSZnhuTkt3dkNhL1BPQ3lNalkKU0hBNFZvcFR4bjhBMHZ4Zk80M3p2Y3E3cDR0WXVOc3RzS1FYdDFLUTVQY3JtekRIeXpKWWZEZG02LzdJalRKNQpoZG5kQUtOcmRlUWFqbVJ6MDR6TEJibzQyaVVrTnBSYUZ6VjViaVloSWZhZER1VWhjNkxNWGJYZG1KSXBXR2tXCjQyT043czVEMFBLWDBmZHhaUGJzbndQOXhlQnk1V2U3MGl0NVdBZFh1MXROVkF5d0ZSWEdKd1RzZnRUZlpVa0EKRHpvSVUzOVdsQk9rbHZSLzhmb2hwbXRXR0s1M2g1UTcKLS0tLS1FTkQgQ0VSVElGSUNBVEUgUkVRVUVTVC0tLS0tCg==
```

3) Create and deploy a manifest file for a `CertificateSigningRequest` object, with encoded `CSR` included as a request
```
cat <<EOF | kubectl apply -f -
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: jane
spec:
  request:  LS0tLS1CRUdJTiBDRVJUSUZJQ0FURSBSRVFVRVNULS0tLS0KTUlJQ1ZEQ0NBVHdDQVFBd0R6RU5NQXNHQTFVRUF3d0VhbUZ1WlRDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRApnZ0VQQURDQ0FRb0NnZ0VCQUszc3VGWkEwZEpraWZTK1BPZEptT0pnUGoxQVZPUEl2UDFHWmdyUGpEWXJqbmhjClY5UW92V2c5M0hNSnlQN21iSkp2VmVQU0lEZzNWenJGcTlkbHljRG9FaUQwS3RFSXFtK1kvb21vZmY1cFRIdU4Kb040aDV6WTlnN3BYRjdpUFNRQThYdlV4T25KOHNtUzIrVWZncE5QZ1dyT29TSGdLckZQTVYraDdTdUV3alAzWQo4TjZrYWI2QlR6MnVFR1VsQjMybjg1N0JxNnZIYllna3RDZG9BRzFRdkJOWFp5eGQwcTBqVWJ3YnY0eittcWtCCjdwTkozMXlXQkY1eDYzWFlTQWErU1F6VzJkV0VjUnRSN0EwcHhaamhkb0xtNkxVR1ZOWUdYV0RtNUhJYzBGSngKdE5hVmZHY0R1OWwrVVNEbmhSNlJrNm55TWFkWFJVYWt0SDBiUTljQ0F3RUFBYUFBTUEwR0NTcUdTSWIzRFFFQgpDd1VBQTRJQkFRQ0x4Q2Fyd0t3QzJySWRwK016WDRxMmZCcTZRSis4OU1McXJiYkh6azBkazVOcTVIdkV2TDFmCjdLWEJVc1Q3dUY0UmJWRXA5c3lwaDhEUWRqd1FOQm1XNnBndFhxYUJwcGIyVHJSZnhuTkt3dkNhL1BPQ3lNalkKU0hBNFZvcFR4bjhBMHZ4Zk80M3p2Y3E3cDR0WXVOc3RzS1FYdDFLUTVQY3JtekRIeXpKWWZEZG02LzdJalRKNQpoZG5kQUtOcmRlUWFqbVJ6MDR6TEJibzQyaVVrTnBSYUZ6VjViaVloSWZhZER1VWhjNkxNWGJYZG1KSXBXR2tXCjQyT043czVEMFBLWDBmZHhaUGJzbndQOXhlQnk1V2U3MGl0NVdBZFh1MXROVkF5d0ZSWEdKd1RzZnRUZlpVa0EKRHpvSVUzOVdsQk9rbHZSLzhmb2hwbXRXR0s1M2g1UTcKLS0tLS1FTkQgQ0VSVElGSUNBVEUgUkVRVUVTVC0tLS0tCg==
  groups:
  - system:authenticated
  usages:
  - server auth
  - digital signature
  - key encipherment
EOF
```

4) Now you (and all other admins on K8S cluster) can see that `CSR`:
```
# See CSR
kubectl get csr
```

5) Now you (and all other admins on K8S cluster) can approve that `CSR`:
```
# Approve specific CSR
kubectl certificate approve jane 
```

6) Get `certificate` for signed `CSR` and provide to the new admin:
```
# Get CSR object as YAML
kubectl get csr jane -o yaml

# Copy its `status.certificate` value

# Decode it from base64 format
```



> **NOTE**: K8S cluster uses `CA` cert/key pair to sign the `CSR` for you.
> 
> `Control Manager` components (`CSR-APPROVING` and `CSR-SIGNING`) are responsible for approving/signing certificates.
> 
> Thus, `Control Manager` has options, to specify which `CA cert/key` pair to use for such signing:
>    - `--cluster-signing-cert-file`
>    - `--cluster-signing-key-file`



# Troubleshoot

[Docs](https://kubernetes.io/docs/setup/best-practices/certificates/)

[Checklist from the course](https://github.com/mmumshad/kubernetes-the-hard-way/tree/master/tools)

If you installed K8S:
- manually - then:
   - you installed componenents manually;
   - you generated certificates manually;
- via `kubeadm` tool:
   - the tool installed components for you as a Pods;
   - the tool generated certificates for you.

Find options for `api-server`, for example - to see which certificates it uses.

## Show: Certificate Content

Show the content of `certificate`
```
openssl x509 -in apiserver.crt -text -noout
```

## Show: Logs (K8S installed manualy)

If K8S installed manually as components on OS:
```
journalctl -u etcd.service -l

   ...
   ... tls: bad certificate ...
   ...
```

## Show: Logs (K8S installed via `kubeadm`)

If Pod with component is up and running:
```
kubectl logs etcd-master

   ...
   ... tls: bad certificate ...
   ...
```

If Pod with component is down, then you can try to view logs from underlying layer - Docker:
```
# Find the container
docker ps -a

# View the log of the container
docker logs 87cdflskfj
```






























