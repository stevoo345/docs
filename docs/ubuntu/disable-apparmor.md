# Disbale AppArmor

On Host Container File editieren.

```shell
nano  /etc/pve/lxc/10X.conf
```

Container **stoppen** Folgende Zeilen hinzufügen:

```conf
lxc.apparmor.profile: unconfined
lxc.cgroup2.devices.allow: a
lxc.cap.drop:
```

Container wieder **starten**.

## Wichtige Info

Container muss wirklich priviliged container sein bei der **Erstellung**!
Es reicht nicht im nachgang unpriviliged=0 zu setzen!
Mehr Info:
https://forum.proxmox.com/threads/can-i-convert-unprivileged-to-privileged-container-or-otherwise-allow-use-of-security-namespace.63166/