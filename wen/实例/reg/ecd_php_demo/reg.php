<?php
header("Content-type: text/html; charset=utf-8"); 
header("Access-Control-Allow-Origin:*");

require('lib/config.php');
require('lib/Model.class.php');

$model=new Model("h507_code");

/*
接口
code 0 未接收到数据
...

..
*/
$result=[];


if(isset($_POST['tel']) && isset($_POST['code'])){
	// $data=[
	// 	'tel'=>$_POST['tel'],
	// 	'code'=>$_POST['code']
	// ];
	$res=$model->where("tel={$_POST['tel']} AND code={$_POST['code']}")->select();
	if(!empty($res)){
		$result['code']=1;
		$result['data']="注册成功";
	}else{
		$result['code']=2;
		$result['data']="验证失败";
	}
}else{
	$result['code']=0;
	$result['data']="未接收到数据";
}


echo json_encode($result);


