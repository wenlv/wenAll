(function(){
	angular.module("registCtrlModule",[])
		.controller("registController",[
			"$scope","modalDataService","postDataService",
			"ionicMessageService","USERDATA",
			"$rootScope","$ionicModal",
			function($scope,modalDataService,
				postDataService,ionicMessageService,
				USERDATA,$rootScope,$ionicModal,$state){
				$scope.user={};

				$scope.backToHome=function(){
					modalDataService.myModal.remove();
				};
				$scope.registUser=function(){
					
					console.log($scope.user.name);
					console.log($scope.user.password);
					console.log($scope.user.tel);
					ionicMessageService.showLoading("正在注册中...");
					postDataService.postRequst(
						"userRegistPOST.php",
						{
							username:$scope.user.name,
							password:hex_md5($scope.user.password),
							tel:$scope.user.tel
						},
						function(response){
							console.log(response);
							ionicMessageService.hideLoading();
							if(response.data.code==0){
								//存储用户的数据
								USERDATA.user=response.data.data;
								ionicMessageService.showMessage("注册成功");
								$rootScope.$broadcast("registSuccess");
								modalDataService.myModal.remove();

								modalDataService.myModal.remove();
								$ionicModal.fromTemplateUrl("tpl/login/login.html",{
									animation:'slide-in-up'
								}).then(function(modal){
									$scope.modal=modal;
									$scope.modal.show();
									modalDataService.myModal=modal;
								});
							}else{
								ionicMessageService.showMessage(response.data.data);
							}
						},function(error){
							console.log(error);
							ionicMessageService.showMessage("服务器发生错误");
						});
				};

				// $scope.regist=function(){
				// 	$ionicModal.fromTemplateUrl("tpl/login/regist.html",{
				// 		animation:'slide-in-up'
				// 	}).then(function(modal){
				// 		$scope.modal=modal;
				// 		$scope.modal.show();
				// 		modalDataService.myModal=modal;
				// 	});
				// }
			}])
})()