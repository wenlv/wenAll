(function(){
	angular.module("messageModule",[])
	.factory("messageService",["$rootScope","$timeout",
		function($rootScope,$timeout){
			return {
				showLoading:function(msgText){
					$rootScope.loading=true;
					if(msgText){
						$rootScope.loadingText=msgText;
					}else{
						$rootScope.loadingText="正在加载中...";
					}
				},
				hideLoading:function(){
					$rootScope.loading=false;
				},
				showMessageBox:function(msgText){
					$rootScope.showMessage=true;
					$rootScope.message=msgText;
					$timeout(function(){
						$rootScope.showMessage=false;
					},2000);
				}
			}
		}])
})()