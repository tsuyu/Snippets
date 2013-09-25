<?php
/*Get user ip address*/
$ip_address=$_SERVER['REMOTE_ADDR'];

/*Get user ip address details with geoplugin.net*/
$geopluginURL='http://www.geoplugin.net/php.gp?ip='.$ip_address;
$addrDetailsArr = unserialize(file_get_contents($geopluginURL)); 

/*Get City name by return array*/
$city = $addrDetailsArr['geoplugin_city']; 

/*Get Country name by return array*/
$country = $addrDetailsArr['geoplugin_countryName'];

/*Comment out these line to see all the posible details*/
/*echo '<pre>';
print_r($addrDetailsArr);
die();*/

if(!$city){
   $city='Not Define';
}if(!$country){
   $country='Not Define';
}
echo '<strong>IP Address</strong>:- '.$ip_address.'<br/>';
echo '<strong>City</strong>:- '.$city.'<br/>';
echo '<strong>Country</strong>:- '.$country.'<br/>';
?>