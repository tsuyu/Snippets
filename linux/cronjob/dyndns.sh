wget -q http://checkip.dyndns.com:8245/index.html --output-document=/var/tmp/new.ip
if [ "`cat /var/tmp/new.ip`" = "`cat /var/tmp/old.ip`" ]
   then echo;
   rm -f /var/tmp/new.ip
else wget -q http://tsuyu:123456@members.dyndns.org:8245/nic/update?hostname=tsuyu.dyndns.org --output-document=/var/tmp/upd.ip
   rm -f /var/tmp/old.ip /var/tmp/upd.ip
   mv /var/tmp/new.ip /var/tmp/old.ip
fi