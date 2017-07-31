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
	 		<!--表单添加商品-->
	 		<form action="action.php" method="post" enctype="multipart/form-data">
	 					<input type="hidden" name="type" value="add">
	 			<table width="930px" border="1px" cellspacing="0">
	 				<tr>
	 					<td>商品名称</td>
	 					<td><input type="text" name="goods_name"></td>
	 				</tr>
	 				<tr>
	 					<td>作者</td>
	 					<td><input type="text" name="author"></td>
	 				</tr>
	 				<tr>
	 					<td>商品价格</td>
	 					<td><input type="text" name="price"></td>
	 				</tr>
	 				<tr>
	 					<td>上架(true/false)</td>
	 					<td><input type="text" name="status"></td>
	 				</tr>
	 				<tr>
	 					<td>商品描述</td>
	 					<td><input type="text" name="des"></td>
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

</body>
</html>