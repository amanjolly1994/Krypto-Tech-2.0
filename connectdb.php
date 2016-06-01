<?php
$con = mysql_connect("booksiders.com","bookside","navita.2508");

if(!mysql_select_db("bookside_kryptoDB",$con))
	echo "Unable to connect to database";

$base_url='http://www.booksiders.com/';
?>