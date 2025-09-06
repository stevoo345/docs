---
sidebar_position: 1
---

# Allow Root SSH

## Im LXC Container

```shell
nano /etc/ssh/sshd_config
```

PermitRootLogin auf yes setzen und speichern.

## Service neustarten

```shell
service ssh restart
```