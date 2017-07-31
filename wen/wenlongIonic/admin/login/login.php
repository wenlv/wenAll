<?php 
	header("content-type:text/html;charset=utf-8");
	header('Access-Control-Allow-Origin: *');
	//获取提交内容
	// var_dump($_GET);
	$username=$_GET['username'];
	$password=md5($_GET['pwd']);
	

	if(!empty($_GET['zhuce'])?$_GET['zhuce']:''){
		 $zhu=empty($_GET['zhuce'])?'':$_GET['zhuce'];
	}else{
		$zhu=empty($_GET['submit'])?'':$_GET['submit'];
	}
	// var_dump($zhu);

	
	// 判断用户名是否存在
	switch($zhu){
		case '注 册':
		$pdo=new PDO('mysql:host=bdm250832157.my3w.com;dbname=bdm250832157_db','bdm250832157','wene23456');
		$pdo->query('set names utf8');
		$sql="select * from user where username='{$username}'";

		$res=$pdo->query($sql);
		$data=$res->fetchAll(PDO::FETCH_ASSOC);
		// var_dump($data);
		if(empty($data)){
			// echo "没有数据";
			$sql="insert into user value(null,'{$username}','{$password}',null)";
			$num=$pdo->exec($sql);
			// var_dump($num);
			if($num>0){
				header('location:/wen/wenlongIonic/admin/login/login.html');
				// echo "插入";
			}else{
				header('location:regist.html');
				// echo "没有插入";
				
			}
		}else{
			header('location:regist.html');
			// echo "数据已经存在";

		}

		
		break;

		case '登 录':
		$pdo=new PDO('mysql:host=bdm250832157.my3w.com;dbname=bdm250832157_db','bdm250832157','wene23456');
		$pdo->query('set names utf8');

		$sql="select * from user where username='{$username}'";

		$res=$pdo->query($sql);
		$data=$res->fetchAll(PDO::FETCH_ASSOC);
		// var_dump($data);
		// echo '成功';

		if(empty($data)){
			header('location:login.html');
		}

		//判断密码是否正确
		// var_dump($data[2]['pwd']);
		
		// var_dump($password);
		if($data[0]['pwd']==$password){
			header('location:/wen/wenlongIonic/admin/index.php');
			session_start();
			$_SESSION['username']=$username;
			echo "chenggong";
			exit;
			
			// var_dump($_SESSION['username']=$username);
		}else{
			header('location:login.html');
			echo "hehe ";
		}
		break;
	}

	


 ?>