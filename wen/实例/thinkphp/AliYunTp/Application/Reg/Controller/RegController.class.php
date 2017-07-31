<?php
namespace Reg\Controller;	//命名空间对应项目目录的Controller目录
use Think\Controller;
class RegController extends Controller{	
	public function reg(){
		/*
			code=0,未接收到name
			code=1,正常返回成功值,可以注册
			code=2,用户名已存在
			....
		*/
		$result=[];//定义一个用于返回的空数组

		$model=M('reglist');//实例化
		// $data=$model->select();
		// dump($data);
		if(isset($_GET['name'])){
			$data=array(
				'name'=>$_GET['name']
			);	
			$res=$model->where($data)->select();//根据条件查询用户
			// dump($res);
			if(!empty($res)){
				$result['code']=2;
				$result['txt']="用户名已存在";
			}else{
				$result['code']=1;
				$result['txt']="可以注册";
			}

		}else{//code 0
			$result['code']=0;
			$result['txt']="未接收到name";
		};

		echo $_GET['callback']."(".json_encode($result).")";

	}
}