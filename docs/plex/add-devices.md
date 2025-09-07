# Add Devices to Container

## Add Direct Rendering Infrastructure (DRI) Device

Folgende Zeile in der Konfigurationsdatei hinzufügen:

```conf title="/etc/pve/lxc/101.conf"
lxc.cgroup2.devices.allow: c 226:* rwm
lxc.mount.entry: /dev/dri dev/dri none bind,create=dir 0 0
```

Danach Restart des Containers.