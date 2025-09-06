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
![General Image](/img/create-lxc-general.png)

## Allow root ssh

[Allow root ssh](../ubuntu/allow-root-ssh.md)

## Network settings

![img.png](/img/docker-network-settings.png)

## Update + Upgrade

```shell
apt update && apt upgrade
```

## Git installieren und einrichten

### Install Git

```shell
apt install -y git
```

### Git Config

```shell
git config --global user.name "Dein Name"
git config --global user.email "deine@mail.tld"
```

### SSH Schlüssel erstellen

```shell
ssh-keygen -t ed25519 -C "deine@mail.tld" # oder ssh-keygen -t rsa -b 4096 -C "deine@mail.tld"
```

Alle bestätigen mit Enter.

### SSH Agent starten und Schlüssel laden

```shell
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519 # oder ssh-add ~/.ssh/id_rsa
```

### Schlüssel anzeigen und bei Github eintragen

```shell
cat ~/.ssh/id_ed25519.pub
```

GitHub: Settings > SSH and GPG keys > New SSH key > Titel vergeben + Key einfügen & speichern.

### Verbindung testen

```shell
ssh -T git@github.com
```

### Clonen des Projekts

```shell
git clone git@github.com:OWNER/REPO.git
```