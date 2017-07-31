<?php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept');
   // 如果是application/json 获取的数据在哪里通过下面的方法获取
   $json = file_get_contents('php://input');
   if($json){
 	  echo $json;	
   }else {
   	  echo "no input json data";
   }
  