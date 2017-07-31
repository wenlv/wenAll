<?php
    header("content-type:text/html;charset=utf-8");
//    var_dump($_POST);
    $pwd=md5($_POST['pwd']);
    try{
        $pdo = new PDO('mysql:host=localhost;dbname=h507','root','');//数据库信息
    }catch(PDOException $e){
        echo $e->getMessage();//返回错误信息
        exit;
    }
    $pdo->query('set names utf8');//字符集
    $sql = "select * from users WHERE user='{$_POST['user']}' AND pwd='{$pwd}'";//sql语句
    $res=$pdo->query($sql);//发送预处理
    $data=$res->fetchAll(PDO::FETCH_ASSOC);
//    var_dump($data);
    if(!empty($data)){//如果用户匹配到数据则存入session
        session_start();
        $_SESSION['userinfo']['username']=$data[0]['user'];
        $_SESSION['userinfo']['password']=$data[0]['pwd'];
        echo "<script>alert('登录成功!');location='index.php';</script>";
    }else{
        echo "<script>alert('登录失败!');location='login.php';</script>";
    }