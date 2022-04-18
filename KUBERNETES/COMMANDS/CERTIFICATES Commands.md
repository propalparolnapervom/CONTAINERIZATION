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
   - `controll-manager`;
   - `kube-proxy`;
   - `apiserver-kubelet-client` (when Api-server acts as a Client for the Kubelet);
   - `apiserver-etcd-client` (when Api-server acts as a Client for the Etcd);
   - `kubelet-client` (when Kubelet acts as a Client for the Etcd);
- CA Certificates:
   - `ca`.


## Generate 

### `ca.crt`/`ca.key`

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

















































