<?php 


if($admin==2){
$dbhost = 'localhost';
$dbuser = 'root'; 
$dbpass = '12345678';
$dbname = 'legal_app';

$con = mysql_connect($dbhost,$dbuser,$dbpass);
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
///test2=database
mysql_select_db($dbname, $con); 
}


?>