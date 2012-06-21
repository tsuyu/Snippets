<?php
function apache_version() {
    if (function_exists('apache_get_version')) {
        if (preg_match('|Apache\/(\d+)\.(\d+)\.(\d+)|', apache_get_version(), $version)) {
            return $version[1] . '.' . $version[2] . '.' . $version[3];
        }
    } elseif (isset($_SERVER['SERVER_SOFTWARE'])) {
        if (preg_match('|Apache\/(\d+)\.(\d+)\.(\d+)|', $_SERVER['SERVER_SOFTWARE'], $version)) {
            return $version[1] . '.' . $version[2] . '.' . $version[3];
        }
    }

    return '(unknown)';
}

echo apache_version();
?>