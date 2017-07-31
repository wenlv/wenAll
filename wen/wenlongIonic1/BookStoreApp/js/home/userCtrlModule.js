(function(){
	angular.module("userCtrlModule",[])
		.controller("userController",[
			"$scope","$state","USERDATA",
			"$rootScope","$ionicModal",
			"modalDataService","cartDataService",
			function($scope,$state,USERDATA,
				$rootScope,$ionicModal,
				modalDataService,cartDataService){
				console.log("用户");
				$scope.backHomePage=function(){
					$state.go("tab.list");
				};
				
				$scope.$on("loginSuccess",function(event,data){
					$rootScope.isLogin=true;
					$scope.username=USERDATA.user.user_name;
				});
				$scope.$watch(function(){
					return USERDATA.user;
				},function(event,data){
					if(USERDATA.user){							
						console.log("有");
						$scope.username=USERDATA.user.user_name;
						$scope.isLogin=false;
					}else{
						console.log("wu");
						$scope.username="未登录";
						$scope.isLogin=true;
					}
					
				});
				$scope.login=function(){
					$ionicModal.fromTemplateUrl("tpl/login/login.html",{
						animation:'slide-in-up'
					}).then(function(modal){
						$scope.modal=modal;
						$scope.modal.show();
						modalDataService.myModal=modal;
					});
				};

				$scope.loginOut=function(){
					$rootScope.isLogin=false;
					//清空用户数据
					USERDATA.user=null;
					if(cartDataService){
						cartDataService.cart={};
					}
					
					$ionicModal.fromTemplateUrl("tpl/login/login.html",{
						animation:'slide-in-up'
					}).then(function(modal){
						$scope.modal=modal;
						$scope.modal.show();
						modalDataService.myModal=modal;
					});
				};

				$scope.goOrderdetail=function(){
					$state.go("tab.order");
				};
				
				


		}]);
})()