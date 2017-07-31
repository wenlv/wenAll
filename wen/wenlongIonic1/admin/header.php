<?php 
	header("content-type:text/html;charset=utf-8");
	//读取cookie
	session_start();
	// var_dump($_SESSION);

	if(empty($_SESSION['username'])){
		header('location:/zuoye/wenlongIonic/admin/login/login.html');
	}
	
 ?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="./css/base.css">
	<link rel="stylesheet" href="./css/header.css">
</head>
<body>
	<?php 
 		$username=$_SESSION['username'];	
 	 ?>
	<div class="header">
		<a href="http://localhost/zuoye/wenlongIonic/admin/login/zhu.php" class="loginOut">用户ID: <?=$username;?> 注销</a>
		<h1>商家后台管理系统</h1>
	</div>
	
</body>
</html>