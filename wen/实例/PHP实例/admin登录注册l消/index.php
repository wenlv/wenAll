<?php 
	header("content-type:text/html;charset=utf-8");
	//读取cookie
	session_start();
	// var_dump($_SESSION);

	if(empty($_SESSION['username'])){
		header('location:login.html');
	}
	
 ?>

 <!DOCTYPE html>
 <html lang="en">
 <head>
 	<meta charset="UTF-8">
 	<title>Document</title>
 </head>
 <body>
 	<?php 
 		$username=$_SESSION['username'];
 	
 		
 	 ?>
 	 <h1>我是首页</h1>
 	 <hr>
 	 用户名：<?=$username;?>
 	 <p>
 	 	<a href="zhu.php">注销</a>
 	 </p>
 </body>
 </html>