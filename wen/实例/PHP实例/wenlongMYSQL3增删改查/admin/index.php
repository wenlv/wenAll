<?php 
	header('Content-type:text/html;charset=utf-8');
	include_once './header.php';
 ?>

 <div class="main">
 	<div class="left">
 		<?php 
 			include_once './aside.php';

 			if(empty($_GET['keyword'])){
 				$where='';
 				$kword='';
 			}else{
 				$keyword=$_GET['keyword'];
 				$where="where goods_name like '%{$keyword}%'";
 				$kword="&keyword={$keyword}";
 				// echo $kword;
 			}
 		 ?>
 	</div>
 	<div class="right">
 		<?php 
 			date_default_timezone_set('Asia/shanghai');
 			
 			try{
			$pdo = new PDO('mysql:host=localhost;dbname=h507','root','123456');
			}catch(PDOException $e){
				echo $e->getMessage();//返回错误信息
				exit;
			}
			// echo $where;

			$pdo->query('set names utf8');
			$sql = "select * from goods_info {$where}";
			$res = $pdo->query($sql);
			$data = $res->fetchAll(PDO::FETCH_ASSOC);
			// var_dump($data);
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
			$sql="select * from goods_info {$where} order by id desc limit {$start},{$end} ";

			$res=$pdo->query($sql);
			$data=$res->fetchAll(PDO::FETCH_ASSOC);
	
 		 ?>
 		 <form action="">
 		 	<input type="text" name='keyword'><button>搜 索</button>
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
 		 	<?php foreach ($data as $key => $value): ?>
 		 		<tr>
 		 			<td><?= $value['id']?></td>
 		 			<td><?= $value['goods_name']?></td>
 		 			<td><?= $value['price']?></td>
 		 			<td><?= $value['des']?></td>
 		 			<td>
 		 				<img src=<?php echo '" uploads/'.$value['goods_images'].'"'?> width="60px" height="40px">
 		 			</td>
 		 			<td><?= date('Y-m-d H:i:s',$value['addtime'])?></td>
 		 			<td><a href="./edit.php?id=<?=$value['id']?>">修改</a></td>
 		 			<td><a href="./action.php?id=<?=$value['id']?>&type=del">删除</a></td>
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
