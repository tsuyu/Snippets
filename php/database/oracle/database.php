<?php
/*connect db*/
$username = "system";
$password = "123456";
$db="(DESCRIPTION=
			  (ADDRESS_LIST=
				(ADDRESS=(PROTOCOL=TCP)
				  (HOST=127.0.0.1)(PORT=1521)
				)
			  )
			   (CONNECT_DATA=(SERVICE_NAME=XE))
		 )";
		  
	  
$conn = OCILogon($username,$password,$db);

if(!$conn){
	echo "Failed connect to Oracle Server!";
}else{
	echo "Success!";
}
?>