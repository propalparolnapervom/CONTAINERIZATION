## DOCKER WIN INSTALLATION


[Documentation](https://docs.docker.com/docker-for-windows/install/)


If your system does not meet the requirements to run Docker for Windows, you can install Docker Toolbox, which uses Oracle Virtual Box instead of Hyper-V.
  - README FIRST for Docker Toolbox and Docker Machine users: Docker for Windows requires Microsoft Hyper-V to run. The Docker for Windows installer enables Hyper-V for you, if needed, and restart your machine. After Hyper-V is enabled, VirtualBox no longer works, but any VirtualBox VM images remain. VirtualBox VMs created with docker-machine (including the default one typically created during Toolbox install) no longer start. These VMs cannot be used side-by-side with Docker for Windows. However, you can still use docker-machine to manage remote VMs.
  - Virtualization must be enabled in BIOS and CPU SLAT-capable. Typically, virtualization is enabled by default. This is different from having Hyper-V enabled. For more detail see Virtualization must be enabled in Troubleshooting.
  - The current version of Docker for Windows runs on 64bit Windows 10 Pro, Enterprise and Education (1607 Anniversary Update, Build 14393 or later).
  - Containers and images created with Docker for Windows are shared between all user accounts on machines where it is installed. This is because all Windows accounts use the same VM to build and run containers.
  - Nested virtualization scenarios, such as running Docker for Windows on a VMWare or Parallels instance, might work, but come with no guarantees. For more information, see Running Docker for Windows in nested virtualization scenarios
  - What the Docker for Windows install includes: The installation provides Docker Engine, Docker CLI client, Docker Compose, Docker Machine, and Kitematic
























