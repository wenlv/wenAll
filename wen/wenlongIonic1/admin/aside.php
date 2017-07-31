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
	<h2>商品管理</h2>
	<ul>
		<li><a href="/zuoye/wenlongIonic/admin/add.php">商品添加</a></li>
		<li><a href="/zuoye/wenlongIonic/admin/index.php">商品列表</a></li>
	</ul>
	<h2>订单管理</h2>
	<ul>
		<li><a href="/zuoye/wenlongIonic/admin/order.php">查看订单</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
	</ul>
	<h2>管理员管理</h2>
	<ul>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
	</ul>
	<h2>广告管理</h2>
	<ul>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
	</ul>
	<h2>考勤管理</h2>
	<ul>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
	</ul>
	<h2>订单管理</h2>
	<ul>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
	</ul>
	<h2>考勤管理</h2>
	<ul>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
		<li><a href="#">待开发</a></li>
	</ul>

	<script>
		$('ul:first').slideDown();
		$("h2").click(function(){
			$(this).next('ul').slideToggle().siblings('ul').slideUp();
		})
	</script>
</body>
</html>