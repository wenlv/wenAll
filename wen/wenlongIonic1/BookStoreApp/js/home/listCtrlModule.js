(function(){
	angular.module("listCtrlModule",[])
		.controller("listController",[
			"$scope","getDataService",
			"ionicMessageService",
			"cartDataService",
			"$rootScope",
			"$ionicTabsDelegate",
			"$state","IMAGEURL",
			"$ionicModal",
			"modalDataService",
			"USERDATA",
			function(
				$scope,getDataService,
				ionicMessageService,
				cartDataService,
				$rootScope,
				$ionicTabsDelegate,
				$state,IMAGEURL,
				$ionicModal,
				modalDataService,
				USERDATA){
				$scope.IMAGEURL=IMAGEURL;
				getGoodData();
				function getGoodData(){
					getDataService.getRequest("book.php",
						null,
						function(data){
							console.log(data);
							$scope.showReloadBtn=false;
							ionicMessageService.hideLoading();
							if(data.data.code==0){
								console.log(data.data.data);
								$scope.goods=data.data.data;
							}else{
								ionicMessageService.showMessage(data.data.data);
							}
						},
						function(error){
							$scope.showReloadBtn=true;
							ionicMessageService.hideLoading();
							console.log(error);
							ionicMessageService.showMessage("服务器错误");
						}
					);
				}

				$scope.loadBtnClick=function(){
					getGoodData();
				};

				//添加购物车的功能
				$scope.addCart=function(good){
					if(!$rootScope.isLogin){
						$ionicModal.fromTemplateUrl("tpl/login/login.html",{
							animation:'slide-in-up'
						}).then(function(modal){
							$scope.modal=modal;
							$scope.modal.show();
							modalDataService.myModal=modal;
						});
					}else{
						console.log(good);
						console.log(cartDataService.cart);
						if(cartDataService.cart[good.id]){
							cartDataService.cart[good.id]["num"]++;
						}else{
							cartDataService.cart[good.id]={
								book_id:good.id,
								book_title:good.title,
								price:good.price,
								images:good.images[0].image_name,
								username:good.username,
								num:1
							}
						}
					}
				};

				//监听购物车的数据是否发生了变化
				//如果发生了变化 则修改cartBadge的值
				$scope.$watch(function(){
					return cartDataService.cart
				},function(event,data){
					var badge=0;
					for(var key in cartDataService.cart){
						badge++;
					}
					$rootScope.cartBadge=badge;
				},true);

				$scope.$on("$ionicView.beforeEnter",function(){
					$ionicTabsDelegate.showBar(true);
				});

				$scope.goToDetail=function(good){
					$ionicTabsDelegate.showBar(false);
					$state.go("tab.detail",{id:good.id});
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

				$scope.loginOut=function(){
					$rootScope.isLogin=false;
					//清空用户数据
					USERDATA.user=null;
					cartDataService.cart={};
					$rootScope.orders={};
				};

				$scope.$on("loginSuccess",function(event,data){
					$rootScope.isLogin=true;
					$rootScope.username=USERDATA.user.user_name;
				});


				$rootScope.goCart=function(){
					if(!$rootScope.isLogin){
						$ionicModal.fromTemplateUrl("tpl/login/login.html",{
							animation:'slide-in-up'
						}).then(function(modal){
							$scope.modal=modal;
							$scope.modal.show();
							modalDataService.myModal=modal;
						});
					}else{
						$state.go("tab.cart");
					}
				};
				$rootScope.goUser=function(){
					if(!$rootScope.isLogin){
						$ionicModal.fromTemplateUrl("tpl/login/login.html",{
							animation:'slide-in-up'
						}).then(function(modal){
							$scope.modal=modal;
							$scope.modal.show();
							modalDataService.myModal=modal;
						});
					}else{
						$state.go("tab.user");
					}	
				}
				$rootScope.goOrder=function(){
					if(!$rootScope.isLogin){
						$ionicModal.fromTemplateUrl("tpl/login/login.html",{
							animation:'slide-in-up'
						}).then(function(modal){
							$scope.modal=modal;
							$scope.modal.show();
							modalDataService.myModal=modal;
						});
					}else{
						$state.go("tab.order");
					}
				}
				
			}])
})()