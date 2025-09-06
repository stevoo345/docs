# Enable Network Interface

Falls das Network interface auf down sein sollte wie hier (erkennbar an dem **DOWN**):

```shell
root@docker-test:~# ip a && ip r

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
inet 127.0.0.1/8 scope host lo
valid_lft forever preferred_lft forever
inet6 ::1/128 scope host noprefixroute
valid_lft forever preferred_lft forever
2: eth0@if37: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
link/ether bc:24:11:e2:21:7a brd ff:ff:ff:ff:ff:ff link-netnsid 0
```

dann folgendes machen:

```shell
networkctl status -a
ip link set dev eth0 up
dhclient -v eth0 # oder systemctl restart systemd-networkd
```