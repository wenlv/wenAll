/**
 * Created by lin on 2017/1/10.
 */
(function(){
    angular.module("httpPostConfigModule",[])
        .config(["$httpProvider",function($httpProvider){
            // $httpProvider 可以用来修改系统提供的服务函数 $http
            // 设置POST的请求头
            $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            // transformRequest 只能获取post请求的数据
            $httpProvider.defaults.transformRequest.push(
                function (data){
                    //console.log(data);
                    if(data){
                        //console.log(typeof data);
                        try {
                            var obj = JSON.parse(data);
                            var paramsString=null;
                            for(var key in obj){
                                if(paramsString){
                                    paramsString +='&'+key +"="+obj[key];
                                }else {
                                    paramsString = key+"="+obj[key];
                                }
                            }
                            return paramsString;
                        }catch(e){
                            return data;
                        }
                    }
                }
            )
        }])
})()