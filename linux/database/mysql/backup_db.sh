DUMPPATH=/srv/database_dump
`mkdir -p $DUMPPATH/$TODAY`
BACKUPDIR=$DUMPPATH/$TODAY
DATE=`date +%Y-%m-%d_%Hh%Mm`
# loop through all the databases
DATABASES=`mysql -u$USER -p$PASS -B -N -e 'show databases;'`
# Define the 'structure only' tables

STRUCTURE_ONLY="/^(prefix1_|prefix2_)?(watchdog|search_index|search_total|search_dataset|search_node_links|sessions|cache(_.+)?)$/"
DBS_SKIP="/^(prefix1_|prefix2_)?(information_schema)$/"
cd $BACKUPDIR
for DB in $DATABASES; do
# Get the tables from the database

	SKIP_DB=`echo "$DB" | gawk "$DBS_SKIP"`
	if [ $SKIP_DB ]
	then
			continue
	fi
  echo "Started migration of $DB"
	TABLES=`mysql -u$USER -p$PASS -B -N -e 'show tables;' $DB`

	# Create the SQL file
	DBFILE="${DB}.sql"
	 > $BACKUPDIR/$DBFILE
	 
	# Loop over the tables
	for t in $TABLES; do
		# Test if the table matches the 'structur only' regex
		RESULT=`echo "$t" | gawk "$STRUCTURE_ONLY"`

		if [ $RESULT ]
		then
		  # ... dump structure only onto the end of the SQL file
		  mysqldump --opt --no-data --user=$USER --password=$PASS $DB $t >> $BACKUPDIR/$DBFILE
		else
		  # dump full table onto the end of the SQL file
		  mysqldump --opt --user=$USER --password=$PASS $DB $t >> $BACKUPDIR/$DBFILE
		fi
	done
	 echo "Done migration of $DB"
	 # make tar of the sql generated
   # tar -xjf $DBFILE.bz2 [execute to untar] 
	 `tar -cjf $DBFILE.bz2 $DBFILE`
	 rm -rf $DBFILE
done


# Finish Message