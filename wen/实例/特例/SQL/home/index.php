<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="keywords" content="手机,平板,手表，数码相机">
	<meta name="description" content="卖手机,平板,手表，数码相机的">
	<link rel="stylesheet" href="./css/base.css">
	<link rel="stylesheet" href="./css/index.css">
	<title>猿代码</title>
</head>
<body>
	<!--头部导航-->
	<div class="nav">
		<div class="nav_main">
			<div class="nav_left">
				<span class="first"></span>
				<a href="#">收藏猿代码</a>
			</div>
			<div class="nav_right">
				<span>欢迎来到猿代码!</span>
				<a href="#">[登录]</a>
				<a href="#">[免费注册]</a>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<!--搜索栏-->
	<div class="search">
		<div class="sear_main">
			<div class="sear_left">
				<div class="logo">
					<a href="#">
						<img src="./images/2.png" alt="logo">
					</a>
				</div>
				<div class="form">
					<form action="">
						<input type="text" name="goosname">
						<button>搜 索</button>
						<div class="clearfix"></div>
					</form>
				</div>
				<div class="clearfix"></div>
			</div>
			<div class="sear_right">
				<a href="#" class="car">
					<span class="active"></span>
					<span>购物车</span>
				</a>
				<a href="#" class="email">
					<span>0</span>
					<span class="active"></span>
				</a>
				<div class="clearfix"></div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>
	<!--分类导航-->
	<div class="sec_nav">
		<div class="sec_main">
			<h3>全部商品分类 <span></span></h3>
			<ul>
				<li><a href="#">数码城</a></li>
				<li><a href="#">天黑黑</a></li>
				<li><a href="#">团购</a></li>
				<li><a href="#">发现</a></li>
				<li><a href="#">二手特卖</a></li>
				<li><a href="#">名品会</a></li>
				<div class="clearfix"></div>
			</ul>
			<div class="clearfix"></div>
		</div>
	</div>
	<!--页面主体部分-->
	<div class="main">
		<!--侧边栏-->
		<div class="aside">
			<h3>手机、相机、数码</h3>
			<ul>
				<h4>手机通讯</h4>
				<li><a href="#">全部手机</a></li>
				<li><a href="#">1080P高清</a></li>
				<li><a href="#">双卡手机</a></li>
				<li><a href="#">拍照神器</a></li>
				<li><a href="#">老年手机</a></li>
				<li><a href="#">对讲机</a></li>
				<li><a href="#">联通专区</a></li>
				<div class="clearfix"></div>
			</ul>
			<ul>
				<h4>手机通讯</h4>
				<li><a href="#">全部手机</a></li>
				<li><a href="#">1080P高清</a></li>
				<li><a href="#">双卡手机</a></li>
				<li><a href="#">拍照神器</a></li>
				<li><a href="#">老年手机</a></li>
				<li><a href="#">对讲机</a></li>
				<li><a href="#">联通专区</a></li>
				<div class="clearfix"></div>
			</ul>
			<ul>
				<h4>手机通讯</h4>
				<li><a href="#">全部手机</a></li>
				<li><a href="#">1080P高清</a></li>
				<li><a href="#">双卡手机</a></li>
				<li><a href="#">拍照神器</a></li>
				<li><a href="#">老年手机</a></li>
				<li><a href="#">对讲机</a></li>
				<li><a href="#">联通专区</a></li>
				<div class="clearfix"></div>
			</ul>
			<ul>
				<h4>手机通讯</h4>
				<li><a href="#">全部手机</a></li>
				<li><a href="#">1080P高清</a></li>
				<li><a href="#">双卡手机</a></li>
				<li><a href="#">拍照神器</a></li>
				<li><a href="#">老年手机</a></li>
				<li><a href="#">对讲机</a></li>
				<li><a href="#">联通专区</a></li>
				<div class="clearfix"></div>
			</ul>
			<ul>
				<h4>手机通讯</h4>
				<li><a href="#">全部手机</a></li>
				<li><a href="#">1080P高清</a></li>
				<li><a href="#">双卡手机</a></li>
				<li><a href="#">拍照神器</a></li>
				<li><a href="#">老年手机</a></li>
				<li><a href="#">对讲机</a></li>
				<li><a href="#">联通专区</a></li>
				<div class="clearfix"></div>
			</ul>
			<ul class="last">
				<h4>手机通讯</h4>
				<li><a href="#">全部手机</a></li>
				<li><a href="#">1080P高清</a></li>
				<li><a href="#">双卡手机</a></li>
				<li><a href="#">拍照神器</a></li>
				<li><a href="#">老年手机</a></li>
				<li><a href="#">对讲机</a></li>
				<li><a href="#">联通专区</a></li>
				<div class="clearfix"></div>
			</ul>
		</div>
		<div class="goods">
			<!--banner图-->
			<div class="banner">
				<a href="#">
					<img src="./images/banner.png" alt="banner">
				</a>
			</div>
			<!--商品列表-->
			<h3>数码影像</h3>
			<div class="line">
				<span></span>
			</div>
			<!--商品列表-->
			<ul>
				<?php 
					try{
				$pdo = new PDO('mysql:host=localhost;dbname=h507','root','123456');
					}catch(PDOException $e){
					echo $e->getMessage();//返回错误信息
					exit;
				}
				$pdo->query('set names utf8');
				$sql = "select * from goods_info limit 0,8";
				$res = $pdo->query($sql);
				$data = $res->fetchAll(PDO::FETCH_ASSOC);
				//var_dump($data);

				 ?>
				 <?php foreach ($data as $key => $value): ?>	 
					<li>
						<a href="g_info.php?id=<?=$value['id']?>">
							<img src="/PHP08_MySQL/admin/uploads/<?=$value['goods_image']?>"width="180" height="160px">
						</a>
						<p class="first">
							<a href="g_info.php?id=<?=$value['id']?>"><?=$value['goods_name']?></a>
						</p>
						<p class="price">￥<?= $value['price']?></p>
						<p class="last">
							<span>评论：</span>
							<span class="active"></span>
							<span>(<a href="#">200条</a>)</span>
						</p>
					</li>
				<?php endforeach ?>
				<div class="clearfix"></div>
			</ul>
			<!--商品列表-->
			<h3 class="second">娱乐影音</h3>
			<div class="line">
				<span></span>
			</div>
			<!--商品列表-->
			<ul>
				<?php foreach ($data as $key => $value): ?>	 
					<li>
						<a href="#">
							<img src="/PHP08_MySQL/admin/uploads/<?=$value['goods_image']?>"width="180" height="160px">
						</a>
						<p class="first">
							<a href="#"><?=$value['goods_name']?></a>
						</p>
						<p class="price">￥<?= $value['price']?></p>
						<p class="last">
							<span>评论：</span>
							<span class="active"></span>
							<span>(<a href="#">200条</a>)</span>
						</p>
					</li>
				<?php endforeach ?>
				<div class="clearfix"></div>
			</ul>
		</div>
		<div class="clearfix"></div>
	</div>
	<!--页面尾部-->
	<div class="footer">
		<div class="foot_main">
			<p class="first">
				<a href="#">猿代码简介</a><span>|</span>
				<a href="#">猿代码公告</a><span>|</span>
				<a href="#">招贤纳士</a><span>|</span>
				<a href="#">联系我们</a><span>|</span>
				<span>客服热线：400-700-12307</span>
			</p>
			<p class='last'>
				<span>Copyright&copy;2006-2016猿代码版权所有</span> 
				<a href="#">沪ICP备0902134234</a>
				<a href="#">上海市公安局宝山分局备案编号：123456789</a>
			</p>
			<img src="./images/last.png" alt="foot">
			<img src="./images/last.png" alt="foot">
			<img src="./images/last.png" alt="foot">
			<img src="./images/last.png" alt="foot">
		</div>
	</div>
</body>
</html>