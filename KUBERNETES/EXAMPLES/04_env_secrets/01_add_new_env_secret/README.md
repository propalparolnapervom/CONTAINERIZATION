
# WHAT

Add following new Kubernetes env secrets (with some values):

    - CREWING_EXT_DATA_GW_AUTH0_M2M_CLIENT_ID
    - CREWING_EXT_DATA_GW_AUTH0_M2M_CLIENT_SECRET

## Connect to the necessary KUBE env

## Work with env secrets

```cd ~/OneDrive\ -\ 90percentofeverything.io/config_files/kubernetes/env_secrets/90poe/prod```

### Define prefix which will be used in further

```export CURR_D=$(date +%Y%m%d_%H%M) ; echo ; echo "   CURR_D=$CURR_D" ; echo```

### Back-Up current env secrets

```kubectl get secrets envsecrets -o yaml > bu/env_secrets_prod.${CURR_D}.yaml```

### Add new env secrets to Env secret file

```
cp bu/env_secrets_prod.${CURR_D}.yaml new/env_secrets_prod.${CURR_D}.yaml
vi new/env_secrets_prod.${CURR_D}.yaml
```

### Verify expected difference for the new file

```
diff bu/env_secrets_prod.${CURR_D}.yaml new/env_secrets_prod.${CURR_D}.yaml
cat new/env_secrets_prod.${CURR_D}.yaml
```

## Apply file with new env secrets

### Be sure you're on the right env (PROD)

```kubectl config current-context```

### Be sure file exists

```cat new/env_secrets_prod.${CURR_D}.yaml```

### Apply changes

```kubectl apply -f new/env_secrets_prod.${CURR_D}.yaml```

## Verify decoding works

```
kubectl get secrets envsecrets -o json | jq -r '.data.CREWING_EXT_DATA_GW_AUTH0_M2M_CLIENT_ID' | base64 -D
kubectl get secrets envsecrets -o json | jq -r '.data.CREWING_EXT_DATA_GW_AUTH0_M2M_CLIENT_SECRET' | base64 -D
```