# MINIKUBE UNINSTALLATION


Only Minikube
```
minikube stop;
minikube delete;
rm -rf ~/.minikube ~/.kube;
```

All other infrastructure
```
brew uninstall kubectl;
brew cask uninstall docker virtualbox minikube;
```






