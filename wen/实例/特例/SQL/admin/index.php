<?php 
	header('Content-type:text/html;charset=utf-8');
	include_once './header.php';
 ?>

 <div class="main">
 	<div class="left">
 		<?php 
 			include_once './aside.php';

 			if(empty($_GET['keyword'])){
 				$where = '';
 				$key ='';
 			}else{
 				$keyword = $_GET['keyword'];
 				$where = " where goods_name like  '%{$keyword}%'";

 				$key = "&keyword={$keyword}";
 				//echo $key;
 			}
 			


 		 ?>
 	</div>
 	<div class="right">
 		<?php 
 			try{
			$pdo = new PDO('mysql:host=localhost;dbname=h507','root','123456');
			}catch(PDOException $e){
				echo $e->getMessage();//返回错误信息
				exit;
			}
			//echo $where;


			$pdo->query('set names utf8');
			$sql = "select * from goods_info {$where}";
			$res = $pdo->query($sql);
			$data = $res->fetchAll(PDO::FETCH_ASSOC);
			//var_dump($data);
			//获取总条数
			$total = count($data);
			//echo $total;
			//每页有多少条数据
			$end = 5;
			//得到总页数
			$totalpage = ceil($total/$end);
			//echo $totalpage;
			//$page  是当前页
			
			if(empty($_GET['page'])){
				$page = 1;
			}else{
				$page = $_GET['page'];
			}
			
			//判断
			if($page < 1){
				$page = 1;
			}elseif($page >= $totalpage){
				$page = $totalpage;
			}

			/*
			1  0   5  (页数  开始条数  每页条数) 
			2  5   5
			3  10  5
			4  15  5	
			*/	
			$start = ($page-1)*5;
			$sql = "select * from goods_info {$where} limit {$start},{$end}";

			$res = $pdo->query($sql);
			$data = $res->fetchAll(PDO::FETCH_ASSOC);
			//var_dump($data);

 		 ?>
 		 <form action="">
 		 	<input type="text" name="keyword"><button>搜 索</button>
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
 		 	<?php foreach ($data as $value): ?>
 		 		<tr>
 		 			<td><?= $value['id']?></td>
 		 			<td><?= $value['goods_name']?></td>
 		 			<td><?= $value['price']?></td>
 		 			<td><?= $value['des']?></td>
 		 			<td>
 		 				<img src=<?php echo '" uploads/'.$value['goods_image'].'"'?> width="60px" height="60px">
 		 			</td>
 		 			<td><?= date('Y-m-d H:i:s',$value['addtime'])?></td>
 		 			<td><a href="./edit.php?id=<?=$value['id']?>">修改</a></td>
 		 			<td><a href="./action.php?id=<?=$value['id']?>&type=del">删除</a></td>
 		 		</tr>
 		 	<?php endforeach ?>
 		 	<tr>
 		 		<td colspan="8" align="right">
 		 			<a href="index.php?page=1<?=$key;?>">首页</a>
 		 			<a href="index.php?page=<?= $page-1;?><?=$key;?>">上一页</a>
 		 			<a href="index.php?page=<?=$page+1;?><?=$key;?>">下一页</a>
 		 			<a href="index.php?page=<?=$totalpage;?><?=$key;?>">尾页</a>
 		 			<span>当前第<?=$page?>页</span>/
 		 			<span>共有<?=$totalpage;?>页</span>
 		 			/<span>总共<?=$total;?>条数据</span>
 		 		</td>
 		 	</tr>
 		 </table>
 	</div>
 </div>
 <?php 	
 	include_once './footer.php';
  ?>
