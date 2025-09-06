---
sidebar_position: 1
---

# Add ZFS Dataset to Container

Folgende Zeile in der Konfigurationsdatei hinzufügen:

```conf title="/etc/pve/lxc/101.conf"
mp0: /tank/data,mp=/mnt/data,backup=0,ro=0
```

Danach Restart des Containers.