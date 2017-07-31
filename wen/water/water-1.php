<?php 
	header("content-type:text/html;charset=utf-8");

		
	$start=$_GET['start'];
	$end=$_GET['end'];

	try{
		$pdo=new PDO('mysql:host=localhost;dbname=h507','root','123456');
	}catch(PDOException $e){
		echo $e->getMessage();exit;
	}

	$pdo->query('set names utf8');


	$res=$pdo->query("select * from image limit {$start},{$end}");

	$data=$res->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($data);



 ?>