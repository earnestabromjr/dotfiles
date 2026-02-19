#!/bin/env bash

# Enable route to pfsense gateway
ip route add 10.0.0.0/24 via 192.168.2.141 &
