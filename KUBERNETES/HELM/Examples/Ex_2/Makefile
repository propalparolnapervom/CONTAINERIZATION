.PHONY: info install debug delete check-env

ifndef release_name
  release_name=email-autodiscover
endif

check-env:
	@if [[ "${env}z" == "z" ]]; then echo "env is undefined"; exit 1; fi

info:
	kubectl cluster-info

install: check-env
	helm upgrade --install $(release_name) . --tls --namespace default --debug \
	  --values values.yaml

debug: check-env
	helm install --tls --dry-run --debug --name $(release_name) --namespace default \
	  --values values.yaml .

delete:
	helm delete --tls --purge  $(release_name) --timeout 100000
