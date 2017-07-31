<?php 
	header("content-type:text/html;charset=utf-8");
	$link=mysql_connect('bdm250832157.my3w.com','bdm250832157','12345678') or die('链接失败');
	mysqli_query($link,'set names utf8');
	mysqli_query($link,'use bdm250832157_db');
	$sql='select *from goods';
	$res=mysqli_query($link,$sql);
	var_dump($res);

	
 ?>