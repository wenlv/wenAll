<?php 
	header("content-type:text/html;charset=utf-8");
	// var_dump($_GET['id']);
	$id=$_GET['id'];
	try{
		$pdo = new PDO('mysql:host=localhost;dbname=h507','root','123456');
		}catch(PDOException $e){
		echo $e->getMessage();//返回错误信息
		exit;
	}
	$pdo->query('set names utf8');
	$sql="select * from goods_info where id={$id}";
	$res=$pdo->query($sql);
	$data=$res->fetchAll(PDO::FETCH_ASSOC);
	var_dump($data);
	
 ?>