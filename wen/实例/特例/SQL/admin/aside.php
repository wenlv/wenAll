<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>手风琴效果</title>
	<script src="./js/jquery.min.js"></script>
	<style>
		*{
			margin:0;
			padding: 0;
		}
		h2{
			width:200px;
			line-height: 50px;
			background-color: #ccc;
			text-align: center;
			cursor: pointer;
			border:1px solid #333;
		}

		ul{
			display: none;
		}
		ul li{
			list-style: none;
			text-align: center;
			line-height: 40px;
			background-color: #f1f1f1;
			border:1px solid #fff;
			width:200px;
		}
		a{
			display: block;
			color:#000;
			text-decoration: none;
		}
	</style>
</head>
<body>
	<h2>商品详情</h2>
	<ul>
		<!--
		根目录   /     wamp/www/...
	-->
		<li><a href="/PHP08_MySQL/admin/add.php">商品添加</a></li>
		<li><a href="/PHP08_MySQL/admin/index.php">列表</a></li>
		<li><a href="#">内衣内裤</a></li>
		<li><a href="#">内衣内裤</a></li>
	</ul>
	<h2>管理员管理</h2>
	<ul>
		<li><a href="#">管理员权限</a></li>
		<li><a href="#">管理员权限</a></li>
		<li><a href="#">管理员权限</a></li>
		<li><a href="#">管理员权限</a></li>
		<li><a href="#">管理员权限</a></li>
	</ul>
	<h2>广告管理</h2>
	<ul>
		<li><a href="#">客户信息</a></li>
		<li><a href="#">客户信息</a></li>
		<li><a href="#">客户信息</a></li>
		<li><a href="#">客户信息</a></li>
	</ul>
	<h2>订单管理</h2>
	<ul>
		<li><a href="#">所有订单</a></li>
		<li><a href="#">所有订单</a></li>
		<li><a href="#">所有订单</a></li>
	</ul>
	<h2>考勤管理</h2>
	<ul>
		<li><a href="#">打卡记录</a></li>
		<li><a href="#">打卡记录</a></li>
		<li><a href="#">打卡记录</a></li>
		<li><a href="#">打卡记录</a></li>
	</ul>
	<h2>订单管理</h2>
	<ul>
		<li><a href="#">所有订单</a></li>
		<li><a href="#">所有订单</a></li>
		<li><a href="#">所有订单</a></li>
	</ul>
	<h2>考勤管理</h2>
	<ul>
		<li><a href="#">打卡记录</a></li>
		<li><a href="#">打卡记录</a></li>
		<li><a href="#">打卡记录</a></li>
		<li><a href="#">打卡记录</a></li>
	</ul>

	<script>
		$('ul:first').slideDown();
		$("h2").click(function(){
			$(this).next('ul').slideToggle().siblings('ul').slideUp();
		})
	</script>
</body>
</html>