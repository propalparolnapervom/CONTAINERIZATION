# HELM OVERALL

[Helm Overview](https://www.digitalocean.com/community/tutorials/an-introduction-to-helm-the-package-manager-for-kubernetes)


Deploying applications to Kubernetes can be complex. Setting up a single application can involve creating multiple interdependent Kubernetes resources – such as pods, services, deployments, and replicasets – each requiring you to write a detailed YAML manifest file.

**Helm** is a package manager for Kubernetes that allows developers and operators to more easily package, configure, and deploy applications and services onto Kubernetes clusters.


Most every programming language and OS has its own package manager to help with the installation and maintenance of software. 

Helm provides the same basic feature set as many of the package managers you may already be familiar with, such as Debian's `apt`, or Python's `pip`.



## CAN

Helm can:
 - Install software.
 - Automatically install software dependencies.
 - Upgrade software.
 - Configure software deployments.
 - Fetch software packages from repositories.


## COMPONENTS

Helm provides this functionality through the following components:
  - `helm` - A command line tool, provides the user interface to all Helm functionality.
  - `tiller` - A companion server component that:
    - runs on your Kubernetes cluster
    - listens for commands from `helm`
    - handles the configuration and deployment of software releases on the cluster.
  - **charts** - The Helm packaging format.
  - An [official curated charts repository](https://github.com/helm/charts) with prepackaged charts for popular open-source software projects.




## CHARTs

Helm packages are called charts, and they consist of a few YAML configuration files and some templates that are rendered into Kubernetes manifest files. 

Here is the basic directory structure of a chart:



![Typical Helm Chart](https://github.com/propalparolnapervom/OVERALL/blob/master/Pictures/helm_typical_chart.png "Typical Helm Chart")


 - **charts/**: Manually managed chart dependencies can be placed in this dir, though it is typically better to use `requirements.yaml` to dynamically link dependencies.

 - **templates/**: This dir contains template files that are combined with configuration values (from `values.yaml` and the command line) and rendered into Kubernetes manifests. The templates use the [Go programming language's template format](https://golang.org/pkg/text/template).

 - **Chart.yaml**: A YAML file with metadata about the chart, such as chart name and version, maintainer information, a relevant website, and search keywords.

 - **LICENSE**: A plaintext license for the chart.

 - **README.md**: A readme file with information for users of the chart.

 - **requirements.yaml**: A YAML file that lists the chart's dependencies.

 - **values.yaml**: A YAML file of default configuration values for the chart.
























