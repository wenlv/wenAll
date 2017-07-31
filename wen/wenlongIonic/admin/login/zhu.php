<?php 
	header("content-type:text/html;charset=utf-8");
	header('Access-Control-Allow-Origin: *');
	session_start();
	// var_dump($_SESSION);
	unset($_SESSION['username']);
	if(empty($_SESSION)){
		header('location:login.html');
	}
		
	

	

	
 ?>