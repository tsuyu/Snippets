#!/bin/sh

httpd_cnt=`ps auxww | grep '/home/apache/bin/httpd' | wc -l`
#lighthttpd_cnt=`ps auxww | grep 'lighthttpd' | wc -l`
mysql_status=`/usr/bin/mysqladmin -u root  -p123456 status`
load=`/bin/cat /proc/loadavg`
now=`date "+%m-%d-%Y %H:%M:%S"`
today=`date "+%m-%d-%Y_%H00"`
logfile=/var/log/monitor.$today.log
lock=/dev/shm/monitor.$today.lock

if [ -e $lock ]; then
  # Already running
  exit
fi;

touch $lock;
#LIGHTHTTPD COUNT
if [ ! -e $logfile ]; then
  echo "TIME, LOAD AVRG, APACHE COUNT, MYSQL STATUS" > $logfile;
fi

#$lighthttpd_cnt
echo $now, $load,  $httpd_cnt, $mysql_status >> $logfile;
rm -f $lock;