<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
//        $this->show('<style type="text/css">*{ padding: 0; margin: 0; } div{ padding: 4px 48px;} body{ background: #fff; font-family: "微软雅黑"; color: #333;font-size:24px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.8em; font-size: 36px } a,a:hover{color:blue;}</style><div style="padding: 24px 48px;"> <h1>:)</h1><p>欢迎使用 <b>ThinkPHP</b>！</p><br/>版本 V{$Think.version}</div><script type="text/javascript" src="http://ad.topthink.com/Public/static/client.js"></script><thinkad id="ad_55e75dfae343f5a1"></thinkad><script type="text/javascript" src="http://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script>','utf-8');
            echo "aaa";
        dump("aaa");

        $model=M('users');//实例化对象,确定表
        $data=$model->select("丁纪翔");
        dump($data);
//        $model->id=5;
//        $model->name="李赟";//不建议这么写,抛弃
//        $data=array(
//          'id'=>"7",
//          "name"=>"程高峰"
//        );                  //增!!!!添加数据一般建议写成数组的形式,不抛弃
//        $res=$model->add($data);
//        $data=array(
//            'name'=>"方超你好ma "
//        );
//        $where=array(
//            'id'=>1
//        );                  //改!!!!修改的数据和条件都可以写成数组形式, 不抛弃

//        $res=$model->data($data)->where($where)->save();

//        $where=array(
//            'id'=>5
//        );
//        $res=$model->where($where)->delete();
//        dump(MD5(123456));
    }
    public function nihao(){
        echo "你好";
    }
}