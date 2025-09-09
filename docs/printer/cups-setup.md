# Cups setup

## Usb Bus durchreichen in lxc container

````config title="/etc/pve/lxc/101.conf"
lxc.mount.entry: /dev/bus/usb dev/bus/usb none bind,create=dir 0 0
````

## Install cups

````shell
apt-get install cups
cupsctl --share-printers --remote-admin
systemctl restart cups
````

## Install printer drivers

````shell
wget https://download.brother.com/welcome/dlf006893/linux-brprinter-installer-2.2.4-1.gz
gunzip linux-brprinter-installer-2.2.4-1.gz
bash linux-brprinter-installer-2.1.1-1 DCP-195C
````

Alles mit yes bestätigen und device URI -> A (Auto)

## Cups einrichten

Auf http://192.168.178.113:631/ gehen und Verwaltung.
Username + Passwort: root + root PW.
Drucker hinzufügen -> Brother DCP-195C -> Guide folgen.
Am Ende über Drucker und test druck machen.
