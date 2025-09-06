# Add Devices to Container

## Add Net tun Device

Folgende Zeile in der Konfigurationsdatei hinzufügen:

```conf title="/etc/pve/lxc/101.conf"
lxc.cgroup2.devices.allow: c 10:200 rwm
lxc.mount.entry: /dev/net/tun dev/net/tun none bind,create=file
```

Danach Restart des Containers.