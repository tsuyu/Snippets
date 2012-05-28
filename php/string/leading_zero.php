<?php

function zero_pad($number, $n) {
    return str_pad((int) $number, $n, "0", STR_PAD_LEFT);
}

function leadingZeros($num,$numDigits) {
	return sprintf("%0".$numDigits."d",$num);
}

function number_pad($n, $pad_len) {
     return sprintf("%0{$pad_len}d", $n);
}

function number_pad($n, $len) {
     return str_pad($n, $len, '0', STR_PAD_LEFT);
}
?>
