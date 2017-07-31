(function(){
	angular.module("detailCtrlModule",[])
		.controller("detailController",[
			"$scope","$stateParams","getDataService",
			"ionicMessageService","IMAGEURL",
			"$sce","cartDataService","$rootScope",
			"$ionicTabsDelegate","$ionicModal",
			"modalDataService","USERDATA","cartDataService",
			function($scope,$stateParams,
				getDataService,ionicMessageService,
				IMAGEURL,$sce,cartDataService,$rootScope,
				$ionicTabsDelegate,$ionicModal,
				modalDataService,USERDATA,cartDataService){
				$scope.IMAGEURL=IMAGEURL;
				console.log($stateParams["id"]);
				// $scope.good={};
				getDataService.getRequest(
					"bookId.php",
					$stateParams,
					function(data){
						console.log(data);
						ionicMessageService.hideLoading();
						if(data.data.code==0){
							$scope.good=data.data.data;
							$scope.shop=data.data.data["username"];
							console.log(data.data.data);
						}else{
							ionicMessageService.showMessage(data.data.data);
						}
					},
					function(error){
						ionicMessageService.hideLoading();
						ionicMessageService.showMessage("服务器错误...");
					}
					);
			
				$scope.addCart=function(good){
					console.log(good);
					if(cartDataService.cart[good.id]){
						cartDataService.cart[good.id]["num"]++;
					}else{
						cartDataService.cart[good.id]={
							book_id:good.id,
							book_title:good.title,
							price:good.price,
							images:good.images[0].image_name,
							num:1
						};
					}
					$scope.$watch(function(){
						return cartDataService.cart
					},function(event,data){
						var badge=0;
						for(var key in cartDataService.cart){
							badge++;
						}
						$rootScope.cartBadge=badge;
					},true);
					
					ionicMessageService.showMessage("商品已添加到购物车");
				};


				

				$scope.loginClick=function(){
					$ionicModal.fromTemplateUrl("tpl/login/login.html",{
						animation:'slide-in-up'
					}).then(function(modal){
						$scope.modal=modal;
						$scope.modal.show();
						modalDataService.myModal=modal;
					});
				};

				$scope.$on("loginSuccess",function(event,data){
					$rootScope.isLogin=true;
					$rootScope.username=USERDATA.user.user_name;
				});


			}]);
})()