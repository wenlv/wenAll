(function(){
	angular.module("cartListCtrlModule",[])
	.controller("cartListController",[
		"$scope","cartDataService","IMAGEURL",
		"$state","ionicMessageService",
		"postDataService","USERDATA",
		"cartDataService","$rootScope",
		function($scope,cartDataService,
			IMAGEURL,$state,ionicMessageService,
			postDataService,USERDATA,
			cartDataService,$rootScope){
			$scope.IMAGEURL=IMAGEURL;
			$scope.cartList=cartDataService.cart;
			console.log(cartDataService.cart);
			$scope.add=function(good){
				console.log(good);
				// console.log(cartDataService.cart[good.goods_id]);
				cartDataService.cart[good.book_id]["num"]++;
			};

			$scope.sub=function(good){
				console.log(cartDataService.cart);
				cartDataService.cart[good.book_id]["num"]--;
				if(cartDataService.cart[good.book_id]["num"]<=0){
					delete cartDataService.cart[good.book_id];
				}
			};
			$scope.$watch(function(){
					return cartDataService.cart
				},function(event,data){
					$scope.cartList=cartDataService.cart;

					// if(JSON.stringify(cartDataService.cart)==="{}"){
					if(angular.equals(cartDataService.cart,{})){
						$scope.isCart=true;
						$scope.isShow=true;
						console.log("meiyou数据",cartDataService.cart);
						// ionicMessageService.showMessage("您的购物车还没有商品哦!");
					}else{
						
						$scope.isCart=false;
						$scope.isShow=false;
						console.log("有数据",cartDataService.cart);

						$scope.submitOrder=function(){
							console.log(cartDataService.cart);
							// ionicMessageService.hideLoading();
							postDataService.postRequst(
								"order.php",
								{
									user_id:USERDATA.user.user_id,
									cart:cartDataService.cart
								},
								function(response){
									console.log(response);
									// ionicMessageService.hideLoading();
									if(response.data.code==0){
										// ionicMessageService.showMessage("订单提交成功");
										console.log("测试");
										console.log(cartDataService);
										// delete cartDataService.cart;
										cartDataService.cart={};
										console.log("2",cartDataService);
									}else{
										ionicMessageService.showMessage(response.data.data);
									}
								},
								function(error){
									// ionicMessageService.hideLoading();
									console.log(error);
									ionicMessageService.showMessage("服务器错误");
								});
							$state.go("tab.order");
						};
				
					}
				},true);

			$scope.$watch("cartList",function(event,data){
				var total=0;
				console.log("购物车变化了");
				console.log(cartDataService);
				for(var key in cartDataService.cart){
					total+=cartDataService.cart[key]["price"]*cartDataService.cart[key]["num"];
				}
				$scope.total=total;
			},true);


			$scope.goHomePage=function(){
				$state.go("tab.list");
			};

			

		}]);
})()