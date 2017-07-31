<?php 
	header("content-type:text/html;charset=utf-8");

		
	$start=$_GET['start'];
	$end=$_GET['end'];

	try{
		$pdo=new PDO('mysql:host=bdm250832157.my3w.com;dbname=bdm250832157_db','bdm250832157','wene23456');
	}catch(PDOException $e){
		echo $e->getMessage();exit;
	}

	$pdo->query('set names utf8');


	$res=$pdo->query("select * from image limit {$start},{$end}");

	$data=$res->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($data);



 ?>