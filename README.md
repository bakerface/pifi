# Pi-Fi
**Wireless daemon for the Raspberry Pi**

#### Print the state of the wireless interface

``` bash
$ pifi wlan0 -s
Idle

# Idle
# AccessPoint
# AccessPoint_Hosting
# WiFi
# WiFi_Connecting
# WiFi_Reconnecting
# WiFi_Connected
```

#### List the wireless networks

``` bash
$ pifi wlan0 -l
Network 1,Network 2,Network 3

# Network names are stored as comma-separated values
```

#### Disable the wireless interface

``` bash
$ pifi wlan0 -i
```

#### Host an access point

``` bash
$ pifi wlan0 -a "SSID" "passphrase"
```

#### Join a wireless access point

``` bash
$ pifi wlan0 -w "SSID" "passphrase"
```

#### Progress the state machine

``` bash
# should be called as frequently as possible
$ pifi wlan0
```
