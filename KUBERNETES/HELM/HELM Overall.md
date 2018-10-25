# HELM OVERALL



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
































