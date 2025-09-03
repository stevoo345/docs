---
sidebar_position: 1
---

# Setup

## Install Ansible on Windows with WSL

```shell
sudo apt install -y pipx
pipx ensurepath
pipx install --include-deps ansible
```

## Install Python on Debian

```shell
sudo apt install -y python3 python3-apt
```

## Generate SSH Keys

```shell
ssh-keygen -t ed25519
ssh-copy-id root@pve #ssh-copy-id root@192.168.178.112
```

## Create Inventory

```ini title="inventory.ini"
[proxmox]
proxmox1 ansible_host=192.168.178.112 ansible_user=root
```

## Test Connectivity

```shell
ansible -i inventory.ini proxmox -m ping
```

## (Optional) Ansible Config

```cfg title="ansible.cfg"
[defaults]
inventory = ./inventory.ini
host_key_checking = False
interpreter_python = auto
```

```shell
ansible proxmox -m ping
```

