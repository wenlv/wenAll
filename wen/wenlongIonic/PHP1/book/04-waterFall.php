<?php
   define("HOST", "localhost");
   define("USER", "root");
   define("PASS", "123456");
   define("DBNAME", "shopdb");

   header('Access-Control-Allow-Origin: *');

   require "./extends/Model.class.php";
   sleep(1);
   $model = new Model('image');
   //  0    10   20   30   历史数据 加 10
   //  最新的数据怎么实现呢
   //  20   10   0  
   //  中间是20   最新的数据 是 减10   

   $start = empty($_GET['start'])? 0: $_GET['start'];
   $length = empty($_GET['length'])? 10:$_GET['length'];
   $data = $model ->limit($start,$length)->order("id desc")->select();
   if($data){
   		$result['code'] = 0;
   		$result['data'] = $data;
   		echo json_encode($result,JSON_UNESCAPED_SLASHES);
   }else {
   		$result['code'] = 1;
   		$result['data'] = "no data";
   		echo json_encode($result);
   }


