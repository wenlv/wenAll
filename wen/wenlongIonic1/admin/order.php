<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
	<title>Document</title>
</head>
<body>
	<?php 
		header('Content-type:text/html;charset=utf-8');
		include_once './header.php';	
	 ?>

	 <div class="main">
	 	<div class="left">
	 		<?php 
	 			include_once './aside.php';
	 		 ?>
	 	</div>
	 	<div class="right">

	 		 <form action="">
	 		 	订单号:<input type="text" name='keyword'><button>搜 索</button>
	 		 </form>
	 		 <hr>
	 		 <br>
	 		 <table width="950px" border="1px" cellspacing='0' class="order">
	 		 	
	 		 <?php 
	 		///////////////////////////////////////////////////
	 			date_default_timezone_set('Asia/shanghai');
	 			$user=$_SESSION['username'];
	 			try{
					$pdo = new PDO('mysql:host=localhost;dbname=h507','root','123456');
				}catch(PDOException $e){
					echo $e->getMessage();//返回错误信息
					exit;
				}
				// echo $where;
				// var_dump($_GET["keyword"]);
				$pdo->query('set names utf8');
	 			
	 			// var_dump($_SESSION['username']);
				if(empty($_SESSION['username'])){
					header('location:/zuoye/wenlongIonic/admin/login/login.html');
				}else{
					if(empty($_GET['keyword'])){
	 					// $where="and username='{$_SESSION['username']}'";
		 				$where="";
		 				$kword='';

		 				$sql = "select * from b_orderdetail where username='{$user}'";
						$res = $pdo->query($sql);
						
						$data0 = $res->fetchAll(PDO::FETCH_ASSOC);
						// var_dump($data0);
						if($data0){
							foreach ($data0 as $k => $v) {
								// var_dump($v);
								$data4[]=$v["order_id"];
								// var_dump($v["order_id"]);
								// array_unique($data4);
								$orderId=array_unique($data4);
								
							}
							// var_dump($orderId);
							$orderId=array_reverse($orderId);

							if(empty($orderId)){
								exit;
							}else{
								$total=count($orderId);
								// echo $total;

								$end=3;

								$totalpage=ceil($total/$end);
								// echo $totalpage;
								
								if(empty($_GET['page'])){
									$page=1;
								}else{
									$page=$_GET['page'];
								}

								$prev=$page-1;
								if($prev<=1){
									$prev=1;
								}

								$next=$page+1;
								if($next>=$totalpage){
									$next=$totalpage;
								}

								if($page<1){
									$page=1;
								}elseif($page>$totalpage){
									$page=$totalpage;
								}

								
								$start=($page-1)*$end;
							}
							// var_dump($start);
							// var_dump($end);
							$num=array_splice($orderId,$start,$end);
							// var_dump($num);
							foreach ($num as $key => $value) {
								// var_dump($value);
								//$value指的是订单号
								//从订单表里查找共多少个订单
								$sql = "select * from b_orderdetail where order_id='{$value}' and username='{$username}' ";
								$res = $pdo->query($sql);
								$data5 = $res->fetchAll(PDO::FETCH_ASSOC);
								// var_dump($data5);
								//遍历订单 获取有每个商品的信息
								foreach ($data5 as $k => $v) {
									//$v指的是每个商品
									// var_dump($k); 
									// var_dump($v); 
									$good["book_num"]=$v["book_num"];
									$good["book_id"]=$v["book_id"];
									//每个订单里对应的用户信息及添加时间
									$sql = "select * from b_order where order_id='{$v["order_id"]}'";
									$res = $pdo->query($sql);
									$order = $res->fetchAll(PDO::FETCH_ASSOC);
									//从b_book里查找每个订单里的商品
									$sql = "select * from b_book where book_id='{$v["book_id"]}'";
									$res = $pdo->query($sql);
									$data6 = $res->fetchAll(PDO::FETCH_ASSOC);
									// var_dump($data6);
									//遍历每个订单里的商品获取商品标题 价格图片时间等信息
									foreach ($data6 as $ke => $val) {
									
										$good["book_id"]=$val["book_id"];
										$good["book_title"]=$val["book_title"];
										$good["book_price"]=$val["book_price"];
										$sql = "select * from b_images where book_id='{$val["book_id"]}'";
										$res = $pdo->query($sql);
										$images = $res->fetchAll(PDO::FETCH_ASSOC);
										// var_dump($images);
										$good["image_name"]=$images[0]["image_name"];
										$good["order_addtime"]=$order[0]["order_addtime"];
										$good["total"]=$good["book_num"]*$good["book_price"];
									}							
									$goods[$k]=$good;
								}
								$data[$value]=$goods;
							}
						}else{
							exit;
						}			
		 			}else{
		 				$keyword=$_GET['keyword'];
		 				$where="where order_id='{$keyword}' and username='{$_SESSION["username"]}'";
		 				$kword="&keyword={$keyword}";
		 				$sql = "select * from b_orderdetail {$where}";
						$res = $pdo->query($sql);
						
						$data0 = $res->fetchAll(PDO::FETCH_ASSOC);
						// var_dump($data0);
						if($data0){
							foreach ($data0 as $k => $v) {
								// var_dump($v);
								$data4[]=$v["order_id"];
								$orderId=array_unique($data4);	
							}
							$orderId=array_reverse($orderId);
							// var_dump($orderId);
							if(empty($orderId)){
								exit;
							}else{
								$total=count($orderId);
								// echo $total;

								$end=3;

								$totalpage=ceil($total/$end);
								// echo $totalpage;
								
								if(empty($_GET['page'])){
									$page=1;
								}else{
									$page=$_GET['page'];
								}

								$prev=$page-1;
								if($prev<=1){
									$prev=1;
								}

								$next=$page+1;
								if($next>=$totalpage){
									$next=$totalpage;
								}

								if($page<1){
									$page=1;
								}elseif($page>$totalpage){
									$page=$totalpage;
								}

								
								$start=($page-1)*$end;
							}
							// var_dump($start);
							// var_dump($end);
						
							foreach (array_splice($orderId,$start,$end) as $key => $value) {
								// var_dump($value);
								//$value指的是订单号
								//从订单表里查找共多少个订单
								$sql = "select * from b_orderdetail {$where}  ";
								$res = $pdo->query($sql);
								$data5 = $res->fetchAll(PDO::FETCH_ASSOC);
								// var_dump($data5);
								//遍历订单 获取有每个商品的信息
								foreach ($data5 as $k => $v) {
									//$v指的是每个商品
									// var_dump($v); 
									$good["book_num"]=$v["book_num"];
									//每个订单里对应的用户信息及添加时间
									$sql = "select * from b_order where order_id='{$v["order_id"]}'";
									$res = $pdo->query($sql);
									$order = $res->fetchAll(PDO::FETCH_ASSOC);
									//从b_book里查找每个订单里的商品
									$sql = "select * from b_book where book_id='{$v["book_id"]}'";
									$res = $pdo->query($sql);
									$data6 = $res->fetchAll(PDO::FETCH_ASSOC);
									// var_dump($data6);
									//遍历每个订单里的商品获取商品标题 价格图片时间等信息
									foreach ($data6 as $ke => $val) {
										// var_dump($val);
										$good["book_id"]=$val["book_id"];
										$good["book_title"]=$val["book_title"];
										$good["book_price"]=$val["book_price"];
										$sql = "select * from b_images where book_id='{$val["book_id"]}'";
										$res = $pdo->query($sql);
										$images = $res->fetchAll(PDO::FETCH_ASSOC);
										// var_dump($images);
										$good["image_name"]=$images[0]["image_name"];
										$good["order_addtime"]=$order[0]["order_addtime"];
										$good["total"]=$good["book_num"]*$good["book_price"];
									}							
									// var_dump($good);
									$goods[$k]=$good;
								}
								$data[$value]=$goods;


							}
		 				}else{
		 					exit;
		 				}
		 			}
		 			// var_dump($data);
				}
	 		 ?>
	 		 	<?php foreach ($data as $key => $value): ?>

	 		 		<tr>
	 		 			<td ><h4>订单编号</h4></td>
	 		 			<td ><?= $key?></td>
	 		 			
	 		 		</tr>
	 		 		<tr>
		 		 		<th>商品id</th>
		 		 		<th>商品名称</th>
		 		 		<th>商品图片</th>
		 		 		<th>商品价格</th>
		 		 		<th>购买数量</th>
		 		 		<th>商品总价</th>
		 		 		<th>购买时间</th>
		 		 		<!-- <th>操作</th>
		 		 		<th>操作</th> -->
		 		 	</tr>
		 		 	<?php foreach ($value as $k => $v): ?>
		 		 		<tr>
	 		 			<td ><?= $v['book_id']?></td>
	 		 			<td><?= $v['book_title']?></td>
	 		 			<td >
		 					<img src=<?php echo '" uploads/'.$v['image_name'].'"'?> width="60px" height="40px">
		 				</td>
	 		 			<td><?= $v['book_price']?></td>	 			
	 		 			<td><?= $v['book_num']?></td>	 			
	 		 			<td><?= $v['total']?></td>	 
	 		 			<!-- <td><?= $v['book_price']?></td>	 			 -->
		 				
	 		 			<td><?= date($v['order_addtime'])?></td>
	 		 			<!-- <td><a href="./edit.php?id=<?=$value['book_id']?>">修改</a></td>
	 		 			<td><a href="./action.php?id=<?=$value['book_id']?>&type=del">删除</a></td> -->
	 		 		</tr>
		 		 	<?php endforeach ?>
	 		 		
	 		 	<?php endforeach ?>
	 		 </table>
	 		 <table width="950px" border="1px" cellspacing='0'>
	 		 	<tr>
	 		 		<td colspan='8' align='right'>
	 		 			<a href="order.php?page=1<?=$kword;?>">首页</a>
	 		 			<a href="order.php?page=<?=$prev?><?=$kword;?>">上一页</a>
	 		 			<a href="order.php?page=<?=$next?><?=$kword;?>">下一页</a>
	 		 			<a href="order.php?page=<?=$totalpage;?><?=$kword;?>">末页</a>
	 		 			<span>当前第<?=$page?>页</span>/
	 		 			<span>共有<?=$totalpage;?>页</span>/
	 		 			<span>共有<?=$total;?>条数据</span>
	 		 		</td>
	 		 	</tr>
	 		 </table> 
	 	</div>
	 </div>
	 <?php 	
	 	include_once './footer.php';
	  ?>

</body>
</html>