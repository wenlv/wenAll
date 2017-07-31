<?php 
	header('Content-type:text/html;charset=utf-8');
	header('Access-Control-Allow-Origin: *');
	include_once './header.php';
 ?>

 <div class="main">
 	<div class="left">
 		<?php 
 			include_once './aside.php';
 			$id=$_GET['id'];
 			try{
 				$pdo=new PDO('mysql:host=bdm250832157.my3w.com;dbname=bdm250832157_db','bdm250832157','wene23456');
 			}catch(PDOException $e){
 				echo $e->getMessage();
 				exit;
 			}
 			$pdo->query('set names utf8');
 			$res=$pdo->query("select * from b_book where book_id={$id}");
 			// var_dump($res);
 			$data=$res->fetchAll(PDO::FETCH_ASSOC);
 			// var_dump($data);
 			// exit;
 		 ?>
 	</div>
 	<div class="right">
 		<!--表单添加商品-->
 		<form action="action.php?id=<?=$id ?>" method="post" enctype="multipart/form-data">
 					<input type="hidden" name="type" value="edit">
 			<table width="930px" border="1px" cellspacing="0">
 				<tr>
 					<td>商品名称</td>
 					<td><input type="text" name="goods_name" value="<?=$data[0]['book_title']?>"></td>
 				</tr>
 				<tr>
 					<td>商品价格</td>
 					<td><input type="text" name="price" value="<?=$data[0]['book_price']?>"></td>
 				</tr>
 				<tr>
 					<td>商品描述</td>
 					<td>
 						<textarea name="des" id="" cols="30" rows="10" value="<?=$data[0]['book_desc']?>" ><?=$data[0]['book_desc']?></textarea>
 					</td>
 				</tr>
 				<tr>
 					<td>商品图片</td>
 					<td><input type="file" name="pic"></td>
 				</tr>
 				<tr>
 					<td colspan="2"><button>提交</button></td>
 				</tr>
 			</table>
 		</form>
 	</div>
 </div>
 <?php 	
 	include_once './footer.php';
  ?>
