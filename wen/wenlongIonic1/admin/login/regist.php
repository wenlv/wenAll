<?php 
	header("content-type:text/html;charset=utf-8");

	$username=$_GET['username'];
	$password=md5($_GET['pwd']);
	var_dump($_GET['pwd']);
	var_dump(md5($_GET['pwd']));


	// 判断用户名是否存在
	$pdo=new PDO('mysql:host=localhost;dbname=h507','root','123456');
	$pdo->query('set names utf8');

	$sql="insert into user value(null,'{$username}','{$password}')";

	// $sql="select * from user where username='{$username}'";
	$num=$pdo->exec($sql);
	if($num>0){
				echo "大于0";
				header('location:index.php');
			}else{
				echo '删除错误';
				echo "小于0";
				echo '<a href="index.php">返回</a>';
			}
	$res=$pdo->query($sql);
	$data=$res->fetchAll(PDO::FETCH_ASSOC);
	var_dump($data);

	
 ?>