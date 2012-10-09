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
 
/**
 * Merge two arrays together.
 *
 * If an integer key exists in both arrays, the value from the second array
 * will be appended the the first array. If both values are arrays, they
 * are merged together, else the value of the second array overwrites the
 * one of the first array.
 *
 * @param  array $a
 * @param  array $b
 * @return array
 */
public static function merge(array $a, array $b)
{
	foreach ($b as $key => $value) {
		if (array_key_exists($key, $a)) {
			if (is_int($key)) {
				$a[] = $value;
			} elseif (is_array($value) && is_array($a[$key])) {
				$a[$key] = self::merge($a[$key], $value);
			} else {
				$a[$key] = $value;
			}
		} else {
			$a[$key] = $value;
		}
	}

	return $a;
}

/**
 * Convert an iterator to an array.
 *
 * Converts an iterator to an array. The $recursive flag, on by default,
 * hints whether or not you want to do so recursively.
 *
 * @param  array|Traversable  $iterator     The array or Traversable object to convert
 * @param  bool               $recursive    Recursively check all nested structures
 * @throws Exception\InvalidArgumentException if $iterator is not an array or a Traversable object
 * @return array
 */
public static function iteratorToArray($iterator, $recursive = true)
{
	if (!is_array($iterator) && !$iterator instanceof Traversable) {
		throw new Exception\InvalidArgumentException(__METHOD__ . ' expects an array or Traversable object');
	}

	if (!$recursive) {
		if (is_array($iterator)) {
			return $iterator;
		}

		return iterator_to_array($iterator);
	}

	if (method_exists($iterator, 'toArray')) {
		return $iterator->toArray();
	}

	$array = array();
	foreach ($iterator as $key => $value) {
		if (is_scalar($value)) {
			$array[$key] = $value;
			continue;
		}

		if ($value instanceof Traversable) {
			$array[$key] = static::iteratorToArray($value, $recursive);
			continue;
		}

		if (is_array($value)) {
			$array[$key] = static::iteratorToArray($value, $recursive);
			continue;
		}

		$array[$key] = $value;
	}

	return $array;
}

/**
 * Test whether an array is a hash table.
 *
 * An array is a hash table if:
 *
 * 1. Contains one or more non-integer keys, or
 * 2. Integer keys are non-continuous or misaligned (not starting with 0)
 *
 * For example:
 * <code>
 * $hash = array(
 *     'foo' => 15,
 *     'bar' => false,
 * );
 * $hash = array(
 *     1995  => 'Birth of PHP',
 *     2009  => 'PHP 5.3.0',
 *     2012  => 'PHP 5.4.0',
 * );
 * $hash = array(
 *     'formElement,
 *     'options' => array( 'debug' => true ),
 * );
 * </code>
 *
 * @param  mixed $value
 * @param  bool  $allowEmpty    Is an empty array() a valid hash table?
 * @return bool
 */
public static function isHashTable($value, $allowEmpty = false)
{
	if (!is_array($value)) {
		return false;
	}

	if (!$value) {
		return $allowEmpty;
	}

	return (array_values($value) !== $value);
}

/**
 * Test whether an array contains one or more string keys
 *
 * @param  mixed $value
 * @param  bool  $allowEmpty    Should an empty array() return true
 * @return bool
 */
public static function hasStringKeys($value, $allowEmpty = false)
{
	if (!is_array($value)) {
		return false;
	}

	if (!$value) {
		return $allowEmpty;
	}

	return count(array_filter(array_keys($value), 'is_string')) > 0;
}

/**
 * Test whether an array contains one or more integer keys
 *
 * @param  mixed $value
 * @param  bool  $allowEmpty    Should an empty array() return true
 * @return bool
 */
public static function hasIntegerKeys($value, $allowEmpty = false)
{
	if (!is_array($value)) {
		return false;
	}

	if (!$value) {
		return $allowEmpty;
	}

	return count(array_filter(array_keys($value), 'is_int')) > 0;
}

/**
 * Test whether an array contains one or more numeric keys.
 *
 * A numeric key can be one of the following:
 * - an integer 1,
 * - a string with a number '20'
 * - a string with negative number: '-1000'
 * - a float: 2.2120, -78.150999
 * - a string with float:  '4000.99999', '-10.10'
 *
 * @param  mixed $value
 * @param  bool  $allowEmpty    Should an empty array() return true
 * @return bool
 */
public static function hasNumericKeys($value, $allowEmpty = false)
{
	if (!is_array($value)) {
		return false;
	}

	if (!$value) {
		return $allowEmpty;
	}

	return count(array_filter(array_keys($value), 'is_numeric')) > 0;
}

/**
 * Test whether an array is a list
 *
 * A list is a collection of values assigned to continuous integer keys
 * starting at 0 and ending at count() - 1.
 *
 * For example:
 * <code>
 * $list = array( 'a','b','c','d' );
 * $list = array(
 *     0 => 'foo',
 *     1 => 'bar',
 *     2 => array( 'foo' => 'baz' ),
 * );
 * </code>
 *
 * @param  mixed $value
 * @param  bool  $allowEmpty    Is an empty list a valid list?
 * @return bool
 */
public static function isList($value, $allowEmpty = false)
{
	if (!is_array($value)) {
		return false;
	}

	if (!$value) {
		return $allowEmpty;
	}

	return (array_values($value) === $value);
}
?>
