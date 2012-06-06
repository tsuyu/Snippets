<?php

// Before running, create the table:
//     CREATE TABLE MYTABLE (mykey NUMBER, myclob CLOB);

$conn = oci_connect('scott', 'tiger', 'orcl');

$mykey = 12343;  // arbitrary key for this example;

$sql = "INSERT INTO mytable (mykey, myclob)
        VALUES (:mykey, EMPTY_CLOB())
        RETURNING myclob INTO :myclob";

$stid = oci_parse($conn, $sql);
$clob = oci_new_descriptor($conn, OCI_D_LOB);
oci_bind_by_name($stid, ":mykey", $mykey, 5);
oci_bind_by_name($stid, ":myclob", $clob, -1, OCI_B_CLOB);
oci_execute($stid, OCI_DEFAULT);
$clob->save("A very long string");

oci_commit($conn);

// Fetching CLOB data

$query = 'SELECT myclob FROM mytable WHERE mykey = :mykey';

$stid = oci_parse ($conn, $query);
oci_bind_by_name($stid, ":mykey", $mykey, 5);
oci_execute($stid, OCI_DEFAULT);

print '<table border="1">';
while ($row = oci_fetch_array($stid, OCI_ASSOC)) {
	$result = $row['MYCLOB']->load();
	print '<tr><td>'.$result.'</td></tr>';
}
print '</table>';

?>