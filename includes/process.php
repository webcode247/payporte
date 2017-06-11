<?php

if(isset(
	$_POST['name'], 
	$_POST['email'], 
	$_POST['telephone'], 
	$_POST['message'])){
 	
 	echo "You successfully posted a message. See the details below:"."\n".
 	"Name: ".$_POST['name']."\n". 
 	"Email: ".$_POST['email']."\n".
 	"Telephone: ".$_POST['telephone']."\n".
 	"Message: ".$_POST['message'];
}