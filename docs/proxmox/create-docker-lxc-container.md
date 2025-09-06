# Create LXC Container

## Create ZFS Dataset

```shell
zfs create tank/docker
```

## Add Storage

Proxmox -> Datacenter -> Storage -> Add -> ZFS

ID: docker
ZFS Pool: tank/docker
Thin provision: checked

## Add nesting

101 docker -> Options -> Features -> Nesting

## General

Hostname + Uncheck unprivileged container!
![General Image](img/create-lxc-general.png)

## Allow root ssh

[Allow root ssh](../ubuntu/allow-root-ssh.md)

## Network settings

![img.png](img/docker-network-settings.png)

## Update + Upgrade

```shell
apt update && apt upgrade
```


