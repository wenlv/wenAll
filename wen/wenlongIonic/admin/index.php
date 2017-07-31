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
		header('Access-Control-Allow-Origin: *');
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
	 		 	商品名称:<input type="text" name='keyword'><button>搜 索</button>
	 		 </form>
	 		 <hr>
	 		 <br>
	 		 <table width="950px" border="1px" cellspacing='0'>
	 		 	<tr>
	 		 		<th>序号</th>
	 		 		<th>商品名称</th>
	 		 		<th>商品价格</th>
	 		 		<th>商品描述</th>
	 		 		<th>商品图片</th>
	 		 		<th>商品添加时间</th>
	 		 		<th>操作</th>
	 		 		<th>操作</th>
	 		 	</tr>
	 		 	<?php 
	 		///////////////////////////////////////////////////
	 			date_default_timezone_set('Asia/shanghai');
	 			$user=$_SESSION['username'];
	 			try{
					$pdo=new PDO('mysql:host=bdm250832157.my3w.com;dbname=bdm250832157_db','bdm250832157','wene23456');
				}catch(PDOException $e){
					echo $e->getMessage();//返回错误信息
					exit;
				}
				// echo $where;

				$pdo->query('set names utf8');
	 			

	 			// var_dump($_SESSION['username']);
				if(empty($_SESSION['username'])){
					header('location:/wen/wenlongIonic/admin/login/login.html');
				}else{
					if(empty($_GET['keyword'])){
	 					// $where="and username='{$_SESSION['username']}'";
		 				$where="";
		 				$kword='';

		 				$sql = "select * from b_book where username='{$user}'";
						$res = $pdo->query($sql);
						// var_dump($res);
						$data = $res->fetchAll(PDO::FETCH_ASSOC);
						// var_dump($data);
						// $sql1="select * from b_images where username='{$user}' order by book_id desc limit {$start},{$end} ";
						// 	$res1=$pdo->query($sql1);
						// 	$data1=$res1->fetchAll(PDO::FETCH_ASSOC);

						
						if(empty($data)){
							exit;
						}else{
							$total=count($data);
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
							$sql = "select * from b_book where username='{$user}' order by book_id desc limit {$start},{$end}";
							$res = $pdo->query($sql);
							// var_dump($res);
							$data = $res->fetchAll(PDO::FETCH_ASSOC);
							// var_dump($data);
							$sql1="select * from b_images where username='{$user}' order by book_id desc limit {$start},{$end} ";
								$res1=$pdo->query($sql1);
								$data1=$res1->fetchAll(PDO::FETCH_ASSOC);
						}
		 			}else{
		 				$keyword=$_GET['keyword'];
		 				$where="where book_title like '%{$keyword}%' and username='{$_SESSION["username"]}'";
		 				// $where="where book_title like '%{$keyword}%' ";
		 				$kword="&keyword={$keyword}";
		 				// echo $kword;
		 				$sql="select * from b_book {$where} ";

						$res=$pdo->query($sql);
						$data=$res->fetchAll(PDO::FETCH_ASSOC);
						// $sql1="select * from b_images  order by book_id desc limit {$start},{$end} ";

						// $res1=$pdo->query($sql1);
						// $data1=$res1->fetchAll(PDO::FETCH_ASSOC);
						if(empty($data)){
							exit;
							// header('location:/zuoye/wenlongIonic/admin/shop.php');
							// echo "孔";
							// exit;
						}else{
							$total=count($data);
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
								$sql="select * from b_book {$where} order by book_id desc limit {$start},{$end} ";

							$res=$pdo->query($sql);
							$data=$res->fetchAll(PDO::FETCH_ASSOC);
							$sql1="select * from b_images  order by book_id desc limit {$start},{$end} ";

							$res1=$pdo->query($sql1);
							$data1=$res1->fetchAll(PDO::FETCH_ASSOC);
							$total=count($data);
						}
		 			}
				}

				// var_dump($data);
				// var_dump($data1);
			
	 		 ?>
	 		 	<?php foreach ($data as $key => $value): ?>
	 		 		<tr >
	 		 		<!-- height="40px" style="overflow: hidden;text-overflow: ellipsis;height:30px" -->
	 		 			<td ><?= $value['book_id']?></td>
	 		 			<td><?= $value['book_title']?></td>
	 		 			<td><?= $value['book_price']?></td>
	 		 			
	 		 			<td ><textarea name="" id="" cols="30" rows="10">
	 		 				<?= $value['book_desc']?>
	 		 			</textarea></td>		 			
		 				<td >
		 					<img src=<?php echo '" uploads/'.$data1[$key]['image_name'].'"'?> width="60px" height="40px">
		 				</td>
	 		 			<td><?= date('Y-m-d H:i:s',$value['book_pudate'])?></td>
	 		 			<td><a href="./edit.php?id=<?=$value['book_id']?>">修改</a></td>
	 		 			<td><a href="./action.php?id=<?=$value['book_id']?>&type=del">删除</a></td>
	 		 		</tr>
	 		 	<?php endforeach ?>
	 		 	<tr>
	 		 		<td colspan='8' align='right'>
	 		 			<a href="index.php?page=1<?=$kword;?>">首页</a>
	 		 			<a href="index.php?page=<?=$prev?><?=$kword;?>">上一页</a>
	 		 			<a href="index.php?page=<?=$next?><?=$kword;?>">下一页</a>
	 		 			<a href="index.php?page=<?=$totalpage;?><?=$kword;?>">末页</a>
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