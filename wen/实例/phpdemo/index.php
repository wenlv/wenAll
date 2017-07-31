<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="dist/css/bootstrap.min.css">
	<style type="text/css">
		.thumbnail img{
			width: 300px;
			height: 300px;
		}
	</style>
</head>
<body>
	
	<div class="container">
		<div class="row">
<?php
	include "goods.php";
	// var_dump($arr);
	foreach ($arr as $k => $v) {

		$str=<<<EOF
		 <div class="col-sm-6 col-md-4">
		    <div class="thumbnail">
		      <img src="{$v['img']}" alt="...">
		      <div class="caption">
		        <h3>{$v['name']}</h3>
		        <p>{$v['price']}</p>
		        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
		      </div>
		    </div>
		  </div>
EOF;
		echo $str;
	}

?>


		</div>
	</div>
</body>
</html>