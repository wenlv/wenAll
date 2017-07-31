<?php 
	header("content-type:text/html;charset=utf-8");
	
	//将文件夹里的所有图片名称取出来放到数据库操作如下

	try{
		$pdo=new PDO('mysql:host=localhost;dbname=h507','root','123456');
	}catch(PDOException $e){
		echo $e->getMessage();exit;
	}

	$pdo->query('set names utf8');
	

	$handle = opendir('./uploads'); //当前目录   图片所在的目录
	// echo $handle;
	$i=0;
	
    while (false !== ($file = readdir($handle))) { //遍历该php文件所在目录
    	// echo $file;
      list($filesname,$kzm)=explode(".",$file);//获取扩展名
        if($kzm=="gif" or $kzm=="jpg" or $kzm=="JPG") { //文件过滤
	        if (!is_dir('./uploads'.$file)) { //文件夹过滤
	            $array[]=$file;//把符合条件的文件名存入数组
	            $i++;//记录图片总张数
	           
	            // echo '图片名：'.$file;
	            // 将从文件夹里的图片名放入数据库
	            $sql = "insert into pic value(null,'$file')";
				$num = $pdo->exec($sql);
				echo '添加了：'.$i.'条数据';  
	        }
   		}


    }
 

 ?>