<?php
    header("content-type:text/html;charset=utf-8");
//    $link = mysqli_connect('bdm12737084.my3w.com','bdm12737084','12345678') or die('连接失败!');//数据库信息
//    mysqli_query($link,'set names utf8');//设置字符集
      //选择库（选择要操作的库名）
//    mysqli_query($link,'use bdm12737084_db');
      //sql语句（选择要操作的表）
//    $sql = "select * from tm_goodslist";
//    $res = mysqli_query($link,$sql);//连接数据库
////    var_dump($res);

    //遍历出数据来
////    $result=array();
////    while($data=mysqli_fetch_assoc($res)){
////        $result[]=$data;
////    }
////    var_dump($result);

    //第二种方法链接时遍历出来
//    $data=mysqli_fetch_all($res);
////    var_dump($data);
//    foreach ($data as $k=>$v){
//        var_dump($v);
//    }


    //pdo链接阿里云服务器
       try{
           $pdo = new PDO('mysql:host=bdm12737084.my3w.com;dbname=bdm12737084_db','bdm12737084','12345678');//数据库信息
       }catch(PDOException $e){
           echo $e->getMessage();//返回错误信息
           exit;
       }
       $pdo->query('set names utf8');//字符集
       $sql = "select * from tm_goods";//sql语句
       $res=$pdo->query($sql);//发送预处理
       $data=$res->fetchAll(PDO::FETCH_ASSOC);
        var_dump($data);