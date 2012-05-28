<?php
//check duplicate element
$string = 'Mary had a a little lamb, she she tied it it it to a pylon, 3000 volts whent up its ... and turned its wool to nylon';
$words = explode(' ', $string);
$duplicates = array_unique($words);
$count = array();
foreach ($words as $word) {
foreach ($duplicates as $duplicate) {
if ($word == $duplicate) {
$count[$duplicate]++;
}
}
}
foreach ($count as $k => $v) {
if ($v > 1) {
$c = $v-1; // as a count of 1 is the first occurance
echo "$k was duplicated $c times\n";
}
}

//counter
$cut = 40;
$stop_cut = 100; 
 
   $j = 1;
   for($i = $cut; $i<= $stop_cut; $i+= $cut){
	   $arr[$j] = $cut; $j++;
	   if(array_sum($arr) != $stop_cut){
		   $last_val = $stop_cut - array_sum($arr);
		   array_push($arr,$last_val);
	    }
    }
   print_r($arr);
   
  
//array peak/return next key of array
 $a = array('x' => 1, 'i' => 2, 'g' => 3, 'k' => 4, 'l' => 5);
 echo array_peek($a, 'x');
 
 //result: i
 
 function array_peek($a, $k) {
  foreach($a as $x => $v) {
    if (isset($h)) return $x;
    if ($x == $k) $h = 1;
  }
}

//How to sum values of the array of the same key

$sumArray = array();

foreach ($myArray as $k=>$subArray) {
  foreach ($subArray as $id=>$value) {
    $sumArray[$id]+=$value;
  }
}

print_r($sumArray);
 
?>
