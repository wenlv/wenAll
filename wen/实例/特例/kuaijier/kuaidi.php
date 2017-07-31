<?php
	header("Content-type:text/html;charset=utf-8");
	$com=$_GET['com'];
	$num=$_GET['num'];
	//611778532703
	$data=file_get_contents("http://www.kuaidi100.com/query?type=".$com."&postid=".$num);//curl
	// var_dump($data);
	echo $data;
