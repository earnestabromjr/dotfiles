#!/bin/bash

brctl addif bridge0 enp5s0
ip address del 192.168.0.2/24 dev enp5s0
