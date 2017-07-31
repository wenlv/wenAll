<?php 
	header('Content-type:text/html;charset=utf-8');

	//导入配置文件和model类

	include_once './config.php';
	include_once './Model.class.php';

	$model = new Model('goods');

	//添加数据
	$arr['goods_name'] = '鼠标垫';
	$arr['price'] = 100;
	$arr['des'] = '超薄,好用,润滑';
	$arr['addtime'] = time();

	$result = $model->add($arr); //返回最后添加的id;
	if($result>0){
		echo '添加成功';
		echo '新数据的id是：'.$result;
	}else{
		echo '添加失败<br>';
		
	}

	echo '<hr>';

	

	//修改
	$arr['id'] = $result;
	$arr['goods_name'] = '鼠标垫';
	$arr['price'] = 120;
	$arr['des'] = '超薄,润滑';

	$num = $model->save($arr);
	if($num > 0){
		echo '修改成功';
	}else{
		echo '修改失败';
	}


	echo '<hr>';
	//删除
	$num = $model->delete($result);   //传入id
	if($num > 0){
		echo '删除成功';
	}else{
		echo '删除失败';
	}


	//查询
	$data = $model->select();
	var_dump($data);
	echo '<hr>';
	//使用where条件
	$data = $model->where('id<40')->select();
	var_dump($data);

	echo '<hr>';
	//使用limit条件
	$data = $model->limit(0,3)->where('id<40')->select();
	var_dump($data);

	echo '<hr>';
	//使用order by条件
	$data = $model->order('id desc')->limit(0,3)->where('id<40')->select();
	var_dump($data);

	echo '<hr>';
	//find(id)  传入id
	$data  = $model->find(38);
	var_dump($data);
 ?>