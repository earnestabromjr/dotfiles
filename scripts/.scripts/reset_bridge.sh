ip link set dev br0 down
brctl delbr br0

ip address add 192.168.0.2/24 dev enp5s0
ip link set dev enp5s0 up