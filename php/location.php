function getDistanceBetweenPointsNew($latitude1, $longitude1, $latitude2, $longitude2, $unit = 'miles') {
  $theta = $longitude1 - $longitude2; 
  $distance = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta))); 
  $distance = acos($distance); 
  $distance = rad2deg($distance); 
  $distance = $distance * 60 * 1.1515; 
  switch($unit) { 
    case 'miles': 
      break; 
    case 'kilometers' : 
      $distance = $distance * 1.609344; 
  } 
  return (round($distance,2)); 
}

$query = "SELECT *, (((acos(sin((".$latitude."*pi()/180)) * sin((`latitude`*pi()/180)) + cos((".$latitude."*pi()/180)) * cos((`latitude`*pi()/180)) * cos(((".$longitude."- `longitude`)*pi()/180)))) * 180/pi()) * 60 * 1.1515) as distance FROM `table` WHERE distance <= ".$distance."
