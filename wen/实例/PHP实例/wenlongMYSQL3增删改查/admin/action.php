<?php 
	header('Content-type:text/html;charset=utf-8');
			try{
				$pdo = new PDO('mysql:host=localhost;dbname=h507','root','123456');
				}catch(PDOException $e){
				echo $e->getMessage();//返回错误信息
				exit;
			}
			$pdo->query('set names utf8');
	// var_dump($_POST);
	// var_dump($_FILES);
	$type=empty($_POST['type']) ? $_GET['type']:$_POST['type'];
	switch ($type) {
		case 'add': 		//执行添加操作  
				$goods_name = $_POST['goods_name'];
				$price = $_POST['price'];
				$des = $_POST['des'];
				$time = time();

				//文件上传处理
				include_once './Upload.class.php';
				$file = new Upload('pic');
				if(!$newname = $file->saveFile()){
					echo '文件上传失败:'.$file->getError();
					return;
				}
				$goods_image = $newname;
				// echo $newname;
				// echo $goods_image;
				//准备sql语句
				$sql = "insert into goods_info value(null,'{$goods_name}','{$goods_image}',{$price},'{$des}',{$time})";
				// echo $sql;
				$num = $pdo->exec($sql);
				// echo '共'.$num.'条信息';exit;
				if($num > 0){
					header('location:index.php');
				}else{
					header('location:add.php');
				}
			break;
			case 'edit':
				// var_dump($_GET);
				// var_dump($_POST);
				var_dump($_FILES);
				$goods_name=$_POST['goods_name'];
				$price=$_POST['price'];
				$des=$_POST['des'];
				$id=$_GET['id'];

				if(empty($_FILES['pic']['name'])){
					$sql="update goods_info set goods_name='{$goods_name}',price='{$price}',des='{$des}' where id='{$id}'";
					echo $sql;
				}else{
					include_once './Upload.class.php';
					$file = new Upload('pic');
					if(!$newname = $file->saveFile()){
						echo '文件上传失败:'.$file->getError();
						return;
					}
					$goods_image = $newname;
					$sql="update goods_info set goods_name='{$goods_name}',price='{$price}',des='{$des}',goods_images='{$goods_image}' where id='{$id}'";
					echo $sql;
					}

					if($pdo->exec($sql)>0){
						header('location:index.php');
					}else{
						header('location:edit.php?id={$id}');
					}

			break;

			case 'del':
				// echo $_GET['id'];
			$id=$_GET['id'];
			$sql="delete from goods_info where id={$id}";
			if($pdo->exec($sql)>0){
				header('location:index.php');

			}else{
				echo '删除错误';
				echo '<a href="index.php">返回</a>';
			}
			break;
		
		
	}
 ?>