<?php 
	header("content-type:text/html;charset=utf-8");

	//获取提交内容
	var_dump($_GET);
	$username=$_GET['username'];
	$password=md5($_GET['pwd']);
	

	if(!empty($_GET['zhuce'])?$_GET['zhuce']:''){
		 $zhu=empty($_GET['zhuce'])?'':$_GET['zhuce'];
	}else{
		$zhu=empty($_GET['submit'])?'':$_GET['submit'];
	}
	var_dump($zhu);


	// 判断用户名是否存在
	switch($zhu){
		case '注 册':
		$pdo=new PDO('mysql:host=localhost;dbname=h507','root','123456');
		$pdo->query('set names utf8');

		$sql="insert into user value(null,'{$username}','{$password}')";

		// $sql="select * from user where username='{$username}'";

		$res=$pdo->query($sql);
		$data=$res->fetchAll(PDO::FETCH_ASSOC);
		var_dump($data);

		$num=$pdo->exec($sql);
		var_dump($num);
		if($num>0){
			header('location:index.php');
		}
		break;
		case '提 交':
			$pdo=new PDO('mysql:host=localhost;dbname=h507','root','123456');
		$pdo->query('set names utf8');

		$sql="select * from user where username='{$username}'";

		$res=$pdo->query($sql);
		$data=$res->fetchAll(PDO::FETCH_ASSOC);
		var_dump($data);
		echo '成功';

		if(empty($data)){
			header('location:login.html');
		}

		//判断密码是否正确
		// var_dump($data[2]['pwd']);
		
		var_dump($password);
		if($data[0]['pwd']==$password){
			session_start();
			$_SESSION['username']=$username;
			header('location:index.php');
			// var_dump($_SESSION['username']=$username);
		}else{
			header('location:login.html');
		}
		break;
	}

	


 ?>