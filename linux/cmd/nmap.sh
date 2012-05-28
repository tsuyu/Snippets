Example1 : Using NMAP in normal way, i.e. to scan a particular system for open ports
#nmap hostname

Example2 : Scanning for a single port on a machine
#nmap –p 22 hostname
This will scan for 22 port is open on a host or not. And here –p indicates port.

Example3 : For scanning only ports
#nmap –F hostname
-F is for fast scan and this will not do any other scanning like IP address, hostname, operating system, and uptime etc. It’s very much fast as it said in man pages.

Example4 : For scanning only TCP ports
#nmap –sT hostname
Here s is for scanning and T is for only scanning of TCP ports

Example5 : For scanning only UDP ports
#nmap –sU hostname
Here U indicates UDP port scanning

Exmaple6 : Scanning for ports and to get what is the version of different services running on that machine
#nmap –sV hostname
V indicates version of each network service running on that host

Example7 : To check which protocol is supported by the remote machine
#nmap –sO hostname

Example8 : To scan a system for operating system and uptime details
# nmap -O hostname
-O is for operating system scan along with default port scan

Example9 : Scanning a network
#nmap networkID/subnetmask
For the above command you can try in this way
#nmap 192.168.0.0/24