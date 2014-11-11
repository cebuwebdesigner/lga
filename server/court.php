<?php

/* set out document type to text/javascript instead of text/html */
header("Content-type: text/javascript");

$admin=2;
include 'konfig.php';
$dataget ='';
$loopz=0;
$arr=''; $alphastart = $_GET['list']; $alphatype = $_GET['typez']; $alphalevel = $_GET['levelz'];
$result = mysql_query("SELECT * FROM wp_court WHERE courtLevel = '$alphalevel' AND courtType = '$alphatype' AND  name LIKE '$alphastart%'"); //WHERE Project = '$subject'


			
			while($row = mysql_fetch_array($result)) {
				//$details=$row['post_content'];
				$thecourt = $row['name'];
				$arr[$loopz]["first_name"]= $thecourt;
				$arr[$loopz]["last_name"]="Brown";
				$arr[$loopz]["age"] = "28";
				$loopz++;
			}
				
	//$arr = array($arr);			
				

//$dataget = rtrim($dataget, ",");
/* our multidimentional php array to pass back to javascript via ajax */

/*
$arr = array(array(
                "first_name" => "Darian",
                "last_name" => "Brown",
                "age" => "28",
                "email" => "darianbr@example.com"
        ),
        array(
                "first_name" => "John",
                "last_name" => "Doe",
                "age" => "47",
                "email" => "john_doe@example.com"
        ),
		);
*/
/* encode the array as json. this will output [{"first_name":"Darian","last_name":"Brown","age":"28","email":"darianbr@example.com"},{"first_name":"John","last_name":"Doe","age":"47","email":"john_doe@example.com"}] */
echo json_encode($arr);

?>