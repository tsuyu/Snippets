<?php

/************************************

Recursive directory size calculation function
http://thephpcode.blogspot.com/

Author: Sam Yong
blog: http://thephpdeveloper.blogspot.com/

No illegal use of this script is allowed.

************************************/

function dirsize($dirname) {
	if (!is_dir($dirname) || !is_readable($dirname)) {
		// check whether the directory is valid.
		return false;
	}

	$dirname_stack[] = $dirname;
	$size = 0;

	do {
		$dirname = array_shift($dirname_stack);
		$handle = opendir($dirname);
		while (false !== ($file = readdir($handle))) {
			if ($file != '.' && $file != '..' && is_readable($dirname . DIRECTORY_SEPARATOR . $file)) {
				if (is_dir($dirname . DIRECTORY_SEPARATOR . $file)) {
					$dirname_stack[] = $dirname . DIRECTORY_SEPARATOR . $file;
				}
				$size += filesize($dirname . DIRECTORY_SEPARATOR . $file);
			}
		}
		closedir($handle);
	} while (count($dirname_stack) > 0);

	return $size;
}

?>

