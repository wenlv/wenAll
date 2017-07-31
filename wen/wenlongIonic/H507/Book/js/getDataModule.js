(function(){
	//通用的get请求服务  可以在其他项目中使用
	angular.module("getDataModule",[])
	.service("getDataService",["$http","HOSTURL",function($http,HOSTURL){
		this.getRequest=function(url,data,success,fail){
			$http.get(HOSTURL+url,{params:data})
			.then(success,fail);
		}
	}])
})()