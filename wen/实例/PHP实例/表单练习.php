<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>表单练习</title>
	<style>
		form{
			width: 400px;
			height: 300px;
			margin: 0 auto;
			padding: 20px;
			padding-left:40px;
			background: #ccc;
		}
		h2{
			text-align: center;
		}
	</style>
</head>
<body>
	<form action="lx2.php" method='get'>
		<h3>表单练习</h3>
		请输入一个月份：<input type="number" name='input'><br>
		<button >提交</button>
		<h2 >
			<?php 
				// echo $_GET['input'];
				$num=$_GET['input'];
				// echo $num;
				$num=$_GET['input'];
				$num=(int)$num;
				// echo gettype($num);
				switch($num){
					case '1':  echo $i='本月有31天';  break;
					case '2':  echo $i='本月有28天';  break;
					case '3':  echo $i='本月有31天';  break;
					case '4':  echo $i='本月有30天';  break;
					case '5':  echo $i='本月有31天';  break;
					case '6':  echo $i='本月有30天';  break;
					case '7':  echo $i='本月有31天';  break;
					case '8':  echo $i='本月有31天';  break;
					case '9':  echo $i='本月有30天';  break;
					case '10': echo $i='本月有31天';  break;
					case '11': echo $i='本月有30天';  break;
					case '12': echo $i='本月有31天';  break;

						}
						
						if($num<1 || $num>12){
						echo '你搞啥呢';
					}
					
				 ?>
		</h2>
	</form>
		

	
	
			
	

</body>
</html>

