<?php
   	require "./extends/config.php";
	require "./extends/Model.class.php";

	header("Access-Control-Allow-Origin:*");

	if(isset($_POST['username']) && 
			isset($_POST["password"]) && 
			isset($_POST["tel"])){
			$userModel = new Model("b_user");
			$username = $_POST["username"];
			$selectResult = $userModel->where("user_name='$username'")->select();
			if($selectResult){
				$result['code'] = 1;
				$result['data'] = "该用户名已经注册";
				echo  json_encode($result);
			}else {
				// 插入到数据库中
				$newUser["user_name"] = $_POST["username"];
				$newUser["user_password"] = $_POST["password"];
				$newUser["user_tel"] = $_POST["tel"];
				// $newUser["user_sex"] = "w";
				$addResult =  $userModel->add($newUser);
				if($addResult>0){
					$result['code'] = 0;
					//$result['data'] = "恭喜注册成功";
					$userInfo =  $userModel->where("user_name='$username'")->select();
					// 删除用户的密码
					unset($userInfo[0]['user_password']);
					$result['data'] = $userInfo[0];
					echo  json_encode($result);
				}else {
					$result['code'] = 4;
					$result['data'] = "注册失败 服务器异常 sql错误";
					echo  json_encode($result);
				}
			}
	}else {
		$result['code'] = 2;
		$result['data'] = "没有提交注册的信息";
		echo json_encode($result);
	}
	