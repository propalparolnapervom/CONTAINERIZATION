# KUBERNETES INSTALLATION

[Official Setup Docs](https://kubernetes.io/docs/setup/)

[Here](https://labs.play-with-k8s.com/) you can play with already installed Kubernetes.



# LOCAL-MACHINE SOLUTIONS

[Local-machine solutions](https://kubernetes.io/docs/setup/pick-right-solution/#local-machine-solutions)



## 1) MINICUBE

[Minicube](https://kubernetes.io/docs/setup/minikube/)

[Minicube Install Steps](https://kubernetes.io/docs/tasks/tools/install-minikube/)


### Overall

**Minikube** is the easiest way to get started with Kubernetes on a local system.

Earlier we talked about the different components of Kubernetes that make up a Master and worker nodes:
  - Master:
    - api server
    - etcd key value store
    - controllers
    - scheduler 
  - Worker nodes:  
    - kubelets
    - container runtime
    
It would take a lot of time and effort to setup and install all of these various components on different systems individually by ourlselves.

Minikube bundles all of these different components into a single image providing us a pre-configured single node kubernetes cluster so we can get started in a matter of minutes.


The whole bundle is packaged into an ISO image and is available online for download. Minikube provides an executable command line utility that will AUTOMATICALLY download the ISO and deploy it in a virtualization platform such as Oracle Virtualbox or Vmware fusion.


### Pre-installation

VT-x or AMD-v virtualization must be enabled in your computer’s BIOS.


### Install a Hypervisor

If you do not already have a hypervisor installed, install the appropriate one for your OS now:

  - macOS: [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

### Install kubectl

Install [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/):
  - on [Mac](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-with-homebrew-on-macos)

Run the installation command:
```
brew install kubernetes-cli
```

Test to ensure the version you installed is sufficiently up-to-date:
```
kubectl version
```

### Install Minikube

Installation [page](https://github.com/kubernetes/minikube/releases)

```
brew cask install minikube
```

OR

```
curl -Lo minikube https://storage.googleapis.com/minikube/releases/v0.30.0/minikube-darwin-amd64 && chmod +x minikube && sudo cp minikube /usr/local/bin/ && rm minikube

```

# HOSTED SOLUTIONS

(Docs)[https://kubernetes.io/docs/setup/pick-right-solution/#hosted-solutions]







































