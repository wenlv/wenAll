(function(){
	angular.module("bookCartCtrlModule",[])
	.controller("bookCartController",[
		"$scope",
		"bookCartDataService",
		"postDataService",
		"USERDATA",
		"messageService",
		"$timeout",
		"$location",
		function($scope,bookCartDataService,
			postDataService,USERDATA,messageService,$timeout,
			$location){
			$scope.cartList=bookCartDataService.cartList;

			$scope.goodAdd=function(id){
				//考虑商品的库存数据
				$scope.cartList[id].num++;
			};
			$scope.goodSub=function(id){
				$scope.cartList[id].num--;
				if($scope.cartList[id].num<=0){
					delete $scope.cartList[id];
				}
			};
			$scope.$watch(function(){
				return bookCartDataService.cartList;
			},
			function(){
				var total=0;
				for(var index in $scope.cartList){
					total+=$scope.cartList[index]['price']*$scope.cartList[index]['num'];

				}
				$scope.total=total;
			},true);

			//提交订单 将订单提交给服务器端
			$scope.submitOrder=function(){
				messageService.showLoading("订单提交中...");
				//将用户的购物车的数据都提交
				postDataService.postRequst(
					"order.php",
					{
						user_id:USERDATA.user.user_id,
						cart:bookCartDataService.cartList
					},
					function(response){
						messageService.hideLoading();
						//console.log(response);
						if(response.data.code==0){
							//订单提交成功了
							messageService.showMessageBox(response.data.data);
							bookCartDataService.cartList={};
							$timeout(function(){
								$location.path("/bookList");
							},2000);
						}else{
							messageService.showMessageBox(response.data.data);
						}
					},
					function(error){
						messageService.hideLoading();
						console.log(error);
						messageService.showMessageBox("服务器错误");
					})
			}
		}])
})()