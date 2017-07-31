<?php
header("Content-type: text/html; charset=utf-8"); 
header("Access-Control-Allow-Origin:*");
//载入ecd类
require_once('lib/Ecd.class.php');
require('lib/config.php');
require('lib/Model.class.php');

$model=new Model("h507_code");
//接口生产地址(应用上线后正式环境必须使用该地址)
//const url = "http://www.etuocloud.com/gateway.action";
//接口测试地址（未上线前测试环境使用）
const url = "http://www.etuocloud.com/gateway.action";
const app_key = '';
const app_secret = '';
const format = 'json';

//初始化
$ecd = new Ecd(url,app_key,app_secret,format);
/*
接口
code 0 未接收到数据
...

..
*/
$result=[];


if(isset($_POST['tel'])){

	if($_POST['tel']=="" || $_POST['tel']=="undefined"){
		$result['code']=2;
		$result['data']="不能为空";
	}else{//接收到具体的手机号
		$res=$model->where("tel={$_POST['tel']}")->select();
		if(!empty($res)){
			//不为空,不能注册
			$result['code']=3;
			$result['data']="该账号已注册";
		}else{
			//为空,可已注册
			//随机生成验证码
			$code=rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9).rand(0,9);
			$data=[
				"tel"=>$_POST['tel'],
				"code"=>$code
			];
			$res=$model->add($data);//添加手机号和验证码
			if($res){
				$result['code']=1;
				$result['data']='验证码发送成功';
							//发送验证码短信
				$result['sendData']=json_decode($ecd->send_sms_code($_POST['tel'],'1',$code,''));
			}else{
				$result['code']=4;
				$result['data']="验证码发送失败";
			}
		}


		// $result['code']=1;
		// $result['data']=$_POST['tel'];
	}
	

}else{
	$result['code']=0;
	$result['data']="未接收到数据";
}


echo json_encode($result);


//发送验证码短信
// echo $ecd->send_sms_code('17858500402','1','888888','');

//发送模板短信
//echo $ecd->send_sms_tpl('接收模板短信的手机号','模板短信模板ID','模板中的参数，以英文逗号分隔','商户订单号，可空');

//发送自定义短信
//echo $ecd->send_sms_custom('接收自定义短信的手机号','自定义短信内容','商户订单号，可空');

//发送语音验证码
//echo $ecd->send_voice_code('接收验证码语音的手机号','语音验证码模板ID','验证码','商户订单号，可空');

//发送语音通知
//echo $ecd->send_voice_notice('接收语音通知的手机号','语音通知模板ID','商户订单号，可空');

//获取流量产品列表
//echo $ecd->get_flow_product_list();

//流量充值
//echo $ecd->recharge_flow('被充值流量的手机号','流量产品编码','商户订单号，可空');




