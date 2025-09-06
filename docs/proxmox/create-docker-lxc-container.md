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

[Follow this instruction guide here](../ubuntu/allow-root-ssh.md)

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

## Install Docker

Just follow the [Docker Installation Guide](https://docs.docker.com/engine/install/ubuntu/)

Current Version:

```shell
apt-get update
apt-get install ca-certificates curl
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
```

```shell
apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Verify

```shell
docker run hello-world
```

## Disable AppArmor

When you get the error for AppArmor, disable it.

```
docker: Error response from daemon: AppArmor enabled on system but the docker-default profile could not be loaded: running '/usr/sbin/apparmor_parser -Kr /var/lib/docker/tmp/docker-default3371994258' failed with output: apparmor_parser: Unable to replace "docker-default".  apparmor_parser: Access denied. You need policy admin privileges to manage profiles.
```

[Follow this instruction guide here](../ubuntu/disable-apparmor.md)
