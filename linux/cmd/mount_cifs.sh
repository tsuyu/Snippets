#!/bin/sh
mount -t cifs -o username=root,password=123456 //192.168.0.123/html /home/tsuyu/Desktop/html

#!/bin/sh
umount -f //192.168.0.113/html