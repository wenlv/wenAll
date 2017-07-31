<?php
   header('Access-Control-Allow-Origin: *');
   if(isset($_GET['user_id'])){
   	   require "./extends/config.php";
   	   require "./extends/Model.class.php";

   	   // 先查询该用户ID是否存在 不可以查询不存在的用户
   	   $userModel = new Model("b_user");
   	   $selectResult = $userModel->find($_GET['user_id']);
   	   if($selectResult){
                $userId = $_GET['user_id'];
                $start =empty($_GET['start'])? 0: $_GET['start'];
   	   	    $length =empty($_GET['length'])? 3: $_GET['length'];
                // $ordername=$_GET['user_name'];
   	   		$order = new Model("b_order");
   	   	    $orderIdResult = $order->where("user_id=$userId")->limit($start,$length)->order("order_id desc")->select();
                //var_dump($orderIdResult);
   	   	    // 一个人可能有多个订单 每个订单 对应多个商品
   	   	    if($orderIdResult){
   	   	    	// 查订单的详情  详细数据
   	   	    	$orderDetailModel = new Model("b_orderdetail");
   	   	    	$bookModel = new Model("b_book");
   	   	    	foreach ($orderIdResult as $key => $value) {
                     $orderId = $value['order_id'];
                     // 思考时间怎么显示出来???
                     $addTime = $value['order_addtime'];
   	   	    		$orderDetailResult = $orderDetailModel->where("order_id=$orderId")->select();
   	   	    		// 清空之前的数据信息
                     //var_dump($orderDetailResult);
   	   	    		// unset($tempDetail);
   	   	    		foreach ($orderDetailResult as $key => $value) {
   	   	    			$bookInfo =  $bookModel->find($value['book_id']);
   	   	    			$value['book_title'] = $bookInfo['book_title'];
                        $value['book_price'] = $bookInfo['book_price'];
                        $value['user_id'] = $orderId ;
                        // $value['ordername'] = $ordername ;
   	   	    			$value['order_addtime'] = $addTime ;
   	   	    			$tempDetail[$key] = $value;
   	   	    		}
   	   	    		$orderArray[] = $tempDetail;
   	   	    	}
   	   	    	$result['code'] = 0;
   	   	    	$result['data'] = $orderArray;
   	   	    	echo json_encode($result);
   	   	    }else {
   	   	    	$result['code'] = 3;
   	   			$result['data'] = "用户不存在订单";
   	   			echo json_encode($result);
   	   	    }
   	   }else {
   	   		$result['code'] = 2;
   	   		$result['data'] = "该用户id不存在";
   	   		echo json_encode($result);
   	   }
   }else {
   	   $result['code'] = 1;
   	   $result['data'] = "没有提交用户id";
   	   echo json_encode($result);
   }