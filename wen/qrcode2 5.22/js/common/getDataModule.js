(function(){
    angular.module("getDataModule",[])
        .service("getDataService",["$http","HOSTURL",
            function($http,HOSTURL){
	            this.getRequest = function(url,data,success,fail){
	                $http.get(HOSTURL+url,{params:data,withCredentials: true})
	                    .then(success,fail);
	            }
        }])
})();