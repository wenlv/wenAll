<?php
	require "./extends/Model.class.php";
	require "./extends/config.php";

	sleep(1);

	$bookModel = new Model("b_book");
	$selectResult = $bookModel->select();
	//var_dump($result);
	//数据分页
	if($selectResult){
		foreach ($selectResult as $key => $value) {
			$tempBook['id'] = $value['book_id'];
			$tempBook['title'] = $value['book_title'];
			$tempBook['author'] = $value['book_author'];
			$tempBook['price'] = (double)$value['book_price'];
			$tempBook['pudate'] = $value['book_pudate'];
			$tempBook['status'] = $value['book_status'];
			$tempBook['username'] = $value['username'];

			$imageModel = new Model('b_images');
			$bookId = $value['book_id'];
			$imageResult =$imageModel->where("book_id=$bookId")->select();
			if($imageResult){
				$tempBook['images'] = $imageResult;
			}else{
				$tempBook['images'] = [];
			}
			$resultArray[] = $tempBook;
		}
		$result['code'] = 0;
		$result['data'] = $resultArray;
	}else {
		$result['code'] = 1;
		$result['data'] = 'no data';
	}
	header('Access-Control-Allow-Origin: *');

	echo json_encode($result);

