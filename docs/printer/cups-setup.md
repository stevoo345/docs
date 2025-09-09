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

Link unten ist für alle driver gleichzeitig.

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

## Scanner einrichten

### Install Sane

```shell
apt-get install sane
apt install libusb-0.1-4 #wichtig für drucker
```

### Find Scanner

```shell
sane-find-scanner
```

### Try Scanner

```shell
scanimage -L #or  for more info SANE_DEBUG_DLL=3 scanimage -L
```

### Test Scan

```shell title="Color PDF"
scanimage --mode "24bit Color" --resolution 300 --format=pdf > doc.pdf
```

```shell title="Black and White PDF"
scanimage --mode "Black & White" --resolution 300 --format=pdf > doc.pdf
```

### Hilfe bei Fehlern

#### Unplug and Plug in again

Manchmal scheint es als wäre gerade nach Installationen besser, wenn man den Drucker ein und wieder einsteckt.

#### Falls Rechte fehlen für Drucker

```shell title="Black and White PDF"
 lsusb | grep -i brother | sed 's/://' | awk '{printf "/dev/bus/usb/%s/%s", $2,$4}' | xargs -i -t chmod 666 "{}"
 # Ergebnis ausführen
```

#### List all files

```shell
dpkg -L brscan3 | sort
```

#### Sane looking in wrong directory

```shell
mkdir -p /usr/lib/x86_64-linux-gnu/sane
ln -s /usr/lib64/sane/libsane-brother3.so.1 /usr/lib/x86_64-linux-gnu/sane/libsane-brother3.so.1
ln -s /usr/lib64/sane/libsane-brother3.so.1 /usr/lib/x86_64-linux-gnu/sane/libsane-brother3.so
ln -s /usr/lib64/libbrscandec3.so.1 /usr/lib/x86_64-linux-gnu/libbrscandec3.so.1
ln -s /usr/lib64/libbrscandec3.so.1 /usr/lib/x86_64-linux-gnu/libbrscandec3.so
ldconfig
printf "usb 0x04f9 0x0222\n" > /etc/sane.d/brother3.conf
```

