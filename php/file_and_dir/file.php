<?php
<?php

//1.Check if File Exists / Append Number to Name

function file_newname($path, $filename){
    if ($pos = strrpos($filename, '.')) {
           $name = substr($filename, 0, $pos);
           $ext = substr($filename, $pos);
    } else {
           $name = $filename;
    }

    $newpath = $path.'/'.$filename;
    $newname = $filename;
    $counter = 0;
    while (file_exists($newpath)) {
           $newname = $name .'_'. $counter . $ext;
           $newpath = $path.'/'.$newname;
           $counter++;
     }

    return $newname;
}

Example returns:

myfile.jpg
myfile_0.jpg
myfile_1.jpg

//2.count file recursive

function count_files($dirname) {
         if(is_dir($dirname))
                             $dir_handle = opendir($dirname);
         if(!$dir_handle)
         return false;

         $files = 0;

while($file = readdir($dir_handle)) {
            if($file != "." and $file != "..") {
            if(!is_dir($dirname . "/" . $file))
            $files++;
            else
            $files += count_files($dirname . "/" . $file);
            }
}

closedir($dir_handle);

return $files;
}

//3.Returns all files from a given folder and filters them by a given extension
function get_files_by_ext($path, $ext){

    $files = array();

    if (is_dir($path)){
        $handle = opendir($path);
        while ($file = readdir($handle)) {
            if ($file[0] == '.'){ continue; }
            if (is_file($path.$file) and preg_match('/\.'.$ext.'$/', $file)){
                $files[] = $file;
            }
        }
        closedir($handle);
        sort($files);
    }

    return $files;

}

/*
** Example:
*/

print_r(get_files_by_ext('data/', 'txt'));

/*
returns:

Array
(
    [0] => readme_1.txt
    [1] => readme_2.txt
)

*/

//remove directory recursively
function rmdir_recurse($path) {
	$path = rtrim($path, '/').'/';
	$handle = opendir($path);
	while(false !== ($file = readdir($handle))) {
		if($file != '.' and $file != '..' ) {
			$fullpath = $path.$file;
			if(is_dir($fullpath)) rmdir_recurse($fullpath); else unlink($fullpath);
		}
	}
	closedir($handle);
	rmdir($path);
}

function dirsize($dir) {
	if(is_file($dir)) return array('size'=>filesize($dir),'howmany'=>0);
	if($dh=opendir($dir)) {
		$size=0;
		$n = 0;
		while(($file=readdir($dh))!==false) {
			if($file=='.' || $file=='..') continue;
			$n++;
			$data = $this->dirsize($dir.'/'.$file);
			$size += $data['size'];
			$n += $data['howmany'];
		}
		closedir($dh);
		return array('size'=>$size,'howmany'=>$n);
	}
	return array('size'=>0,'howmany'=>0);
}

function file_size($fsizebyte) {
	if ($fsizebyte < 1024) {
		$fsize = $fsizebyte." bytes";
	}elseif (($fsizebyte >= 1024) && ($fsizebyte < 1048576)) {
		$fsize = round(($fsizebyte/1024), 2);
		$fsize = $fsize." KB";
	}elseif (($fsizebyte >= 1048576) && ($fsizebyte < 1073741824)) {
		$fsize = round(($fsizebyte/1048576), 2);
		$fsize = $fsize." MB";
	}elseif ($fsizebyte >= 1073741824) {
		$fsize = round(($fsizebyte/1073741824), 2);
		$fsize = $fsize." GB";
	};
	return $fsize;
}

function rchmod($dir) {
	foreach (glob("$dir/*") as $child) chmod($child, (is_dir($child)? rchmod($child): 0644));
	return 0755;
}

rchmod("./db-images");

function copyFile($url,$filename){
	$file = fopen ($url, "rb");
	if (!$file) return false; else {
		$fc = fopen($filename, "wb");
		while (!feof ($file)) {
			$line = fread ($file, 1028);
			fwrite($fc,$line);
		}
		fclose($fc);
		return true;
	}
}

$bool = is_emptydir("./images");

function is_emptydir($which){
	$dh=dir($which);
	$emptydir=true;
	while ($file=$dh->read()) {
		if(substr($file,0,1)==".") continue;
		if(!is_dir($which."/".$file)) {
			$emptydir=false;
			break;
		}
	}
	$dh->close();
	return $emptydir;
}

$s = loadStrFile("file.txt");

function loadStrFile($filename) {
	$handle = fopen ($filename, "rb");
	$contents = fread ($handle, filesize ($filename));
	fclose ($handle);
	return $contents;
}

<?php // jEdit :folding=indent: :collapseFolds=1: :noTabs=true:
/**
* contains class {@link FileHelper}
* @package utilities
* @author Thomas Katzlberger
*/

/**
* Utility class to support file operations. 
    Scan a directory.
* @package utilities
*/
class FileHelper {

    /**
    * scans a directory for files with a certain extensions
    *
    * @param string $dir the directory to scan
    * @param string $ext the extension of the files wanted
    * @return array list of files matching the extention, without path
    * @static
    */
function scanDirectory($dir,$ext)
    {
        $dh  = opendir($dir);
        
        if($dh===false) //open error PHP warning should do
            return array();
        
        $files = array();
        while (false !== ($filename = readdir($dh)))
        {
            if(StringHelper::strEndsWith($filename,$ext)) // Single file Plugin '.plugin.php'
                $files[] = $filename;
            else // Plugin in its own directory
            if (is_dir($dir . '/' . $filename) && file_exists($dir . '/' . $filename . '/' . $filename . $ext))
                $files[] = $filename . '/' . $filename . $ext;
        }
        
        return $files;
    }
    
   /**
    * removes first extension (x.tar.gz => x.tar)
    *
    * @param string $filename the filename to modify
    * @static
    */
function removeExtension(&$filename)
    {
        $filename = substr($filename, 0, strrpos($filename, "."));
    }
    
   /**
    * strip all extensions (x.tar.gz => x.tar)
    *
    * @param array $filenamesArray the filename to modify
    * @static
    */
function removeExtensions(&$filenamesArray)
    {
        $func = create_function('&$f','$f = substr($f, 0, strrpos($f, "."));');
        array_walk($filenamesArray,$func);
    }

//get file extension
$filename = '/my/path/image.jpeg';
echo strtolower(pathinfo($filename, PATHINFO_EXTENSION));
?>
