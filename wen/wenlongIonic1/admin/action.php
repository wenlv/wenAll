<?php 
	header('Content-type:text/html;charset=utf-8');
	session_start();
	var_dump($_SESSION);

	if(empty($_SESSION['username'])){
		header('location:/zuoye/wenlongIonic/admin/login/login.html');
	}

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
				$author = $_POST['author'];
				$status = $_POST['status'];
				$time = time();
				var_dump($_SESSION['username']);
				$user_name=$_SESSION['username'];

				//文件上传处理
				include_once './Upload.class.php';
				$file = new Upload('pic');
				if(!$newname = $file->saveFile()){
					echo '文件上传失败:'.$file->getError();
					return;
				}
				$goods_image = $newname;

				//在b_book表里获得要插入到b_relatebook里的relate_bookid字段
				$sql="select * from b_book ";
				$res=$pdo->query($sql);
				$data=$res->fetchAll(PDO::FETCH_ASSOC);
				// var_dump($data);
				$relate=[];
				foreach ($data as $key => $value) {
					$relate_id=$value["book_id"];
					// var_dump($relate_id);
					array_push($relate,$relate_id);

				}
				// var_dump($relate);
				$relate_bookid1=$relate[array_rand($relate,1)];
				$relate_bookid2=$relate[array_rand($relate,1)];
				$relate_bookid3=$relate[array_rand($relate,1)];


				//准备sql语句
				$sql = "insert into b_book value(null,'{$goods_name}','{$author}',{$price},{$time},'{$status}','{$des}','{$user_name}')";
				//最后插入的商品id
				$new_data = array(
			            ':book_id' => '',
			            ':book_title' => '{$goods_name}',
			            'book_author' => '{$author}',
			            'book_price' => '{$price}',
			            'book_pudate' => '{$time}',
			            'book_status' => '{$status}',
			            'book_desc' => '{$des}',
			            'username' => '{$user_name}'
			    );
			    $sth = $pdo->prepare($sql);
			    $sth->execute($new_data);
			    $last_id = $pdo->lastInsertId();
			    echo 'last id: ' . $last_id;

				$sql= "insert into b_images value(null,'{$goods_image}','{$last_id}','{$user_name}')";
				$num = $pdo->exec($sql);
				var_dump($num);
				$sql= "insert into b_relatebook value(null,'{$last_id}','{$relate_bookid1}')";
				$num = $pdo->exec($sql);
				$sql= "insert into b_relatebook value(null,'{$last_id}','{$relate_bookid2}')";
				$num = $pdo->exec($sql);
				$sql= "insert into b_relatebook value(null,'{$last_id}','{$relate_bookid3}')";
				// echo $sql;
				$num = $pdo->exec($sql);
				var_dump($num);
				// echo '共'.$num.'条信息';exit;
				if($num > 0){
					echo "大于0 ";
					header('location:index.php');
				}else{
					echo "小于0 ";
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
				$time = time();
				var_dump($des);
				var_dump($_FILES['pic']['name']);
				if(empty($_FILES['pic']['name'])){
					var_dump("孔");
				}

				if(empty($_FILES['pic']['name'])){
					$sql="update b_book set book_title='{$goods_name}',book_price='{$price}',book_desc='{$des}' where book_id='{$id}'";
					echo $sql; 
					$num=$pdo->exec($sql);
					if($num>0){
						header('location:index.php');
					}else{
						header('location:edit.php?id="{$id}"');
					}
				}else{
					include_once './Upload.class.php';
					$file = new Upload('pic');
					if(!$newname = $file->saveFile()){
						echo '文件上传失败:'.$file->getError();
						return;
					}
					$goods_image = $newname;

					$sql3="select * from b_images where book_id='{$id}'";
					$res3=$pdo->query($sql3);
					$data=$res3->fetchAll(PDO::FETCH_ASSOC);
					var_dump($data);
					$img=$data[0]["image_name"];
					var_dump($img);


					//拼接要删除文件名和路径
					$path=dirname(__FILE__);
					$filename=$path."\\"."uploads\\".$img;
					var_dump($filename);
					//删除文件夹下的图片
					$result = @unlink ($filename); 
					if ($result == false) { 
						echo '蚊子赶走了'; 
					} else { 
						echo '无法赶走'; 
					} 

					$sql="update b_book set book_title='{$goods_name}',book_price='{$price}',book_desc='{$des}' where book_id='{$id}'";
					$num=$pdo->exec($sql);
					var_dump($num);
					// $sql2="update b_images set  image_name='{$goods_image}' where book_id='{$id}'";
					$sql="update b_images set image_name='{$goods_image}' where book_id='{$id}'";
					var_dump($sql);
					$num=$pdo->exec($sql);
					var_dump($num);
					if($num>0){
							header('location:index.php');
						}else{
							header('location:edit.php?id="{$id}"');
						}
					};

			break;

			case 'del':
				// echo $_GET['id'];
			$id=$_GET['id'];
			$sql="select * from b_images where book_id='{$id}'";
			$res=$pdo->query($sql);
			$data=$res->fetchAll(PDO::FETCH_ASSOC);
			var_dump($data);
			$img=$data[0]["image_name"];
			var_dump($img);


			//拼接要删除文件名和路径
			$path=dirname(__FILE__);
			$filename=$path."\\"."uploads\\".$img;
			var_dump($filename);
			//删除文件夹下的图片
			$result = @unlink ($filename); 
			if ($result == false) { 
				echo '蚊子赶走了'; 
			} else { 
				echo '无法赶走'; 
			} 


			$sql2="delete from b_images where book_id='{$id}'";
			$num2=$pdo->exec($sql2);
			var_dump($num2);
			$sql1="delete from b_book where book_id='{$id}'";
			$num1=$pdo->exec($sql1);
			var_dump($num1);

			$sql3="delete from b_relatebook where book_id='{$id}'";
			$num3=$pdo->exec($sql3);
			var_dump($num3);
			
			if($num1>0){
				echo "大于0";
				header('location:index.php');
			}else{
				echo '删除错误';
				echo "小于0";
				echo '<a href="index.php">返回</a>';
			}
			break;
		
		
	}
 ?>