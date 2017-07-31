(function(){
	angular.module("showOrderCtrlModule",[])
		.controller("showOrderController",[
			"$scope","getDataService",
			"cartDataService","USERDATA",
			"ionicMessageService","$state",
			function($scope,getDataService,
				cartDataService,USERDATA,
				ionicMessageService,$state){
				$scope.backHomePage=function(){
					$state.go("tab.list");
				};
				console.log(USERDATA.user);
				console.log(cartDataService);
                function getData(start,length){
                	 getDataService.getRequest(
						"orderQuery.php",
						{user_id:USERDATA.user.user_id,
						 user_name:USERDATA.user.user_name,
						 start:start
						 // ,
						 // length:length
						},
						function(response){
							console.log(response.data.data);
							// ionicMessageService.hideLoading();
							if(response.data.code==0){
								console.log(response.data);
								$scope.orders=response.data.data;
								// console.log("下拉");
								console.log(start);
								nextPage = true;
								$scope.$broadcast('scroll.refreshComplete');
							}else{
								ionicMessageService.showMessage("没有最新数据了");
								console.log("下拉错误");
							}
						},
						function(error){
							console.log("服务器错误");
							// ionicMessageService.hideLoading();
							ionicMessageService.showMessage("服务器错误");
							$scope.$broadcast('scroll.refreshComplete');
						});

                };

                var start=0;
				$scope.$on("$ionicView.enter",function(){
					$scope.orders={};
					// getData(start);
					getData(start);
				});

				var start1=start;
				$scope.doRefresh=function(){
					

					
			};
			if(start1>0){
				start1=start1;
				length=3;
				console.log("2222");
				refresh();
			}else{
				console.log("333333");
			};

				function refresh(){
					getDataService.getRequest(
					"orderQuery.php",
					{user_id:USERDATA.user.user_id,
					 user_name:USERDATA.user.user_name,
					 start:start1
					 ,
					 length:length
					},
					function(response){
						if(response.data.code==0){

							$scope.orders=response.data.data.concat($scope.orders);
							$scope.$broadcast('scroll.refreshComplete');
						}else{
							ionicMessageService.showMessage("没有最新数据了");
							console.log("下拉错误");
							$scope.$broadcast('scroll.refreshComplete');
						}
					},
					function(error){
						console.log("服务器错误");
						ionicMessageService.hideLoading();
						ionicMessageService.showMessage("服务器错误");
						$scope.$broadcast('scroll.refreshComplete');
					});
				}
				var nextPage=false;
				$scope.hasNextPage=function(){
					return nextPage;
				};
				var start2=start;
				$scope.loadMore=function(){
					console.log(start2);
					start2=start2+3;
					console.log(start2);
					 getDataService.getRequest(
						"orderQuery.php",
						{user_id:USERDATA.user.user_id,
						 user_name:USERDATA.user.user_name,
						 start:start2
						 // ,
						 // length:length
						},
						function(response){
							console.log(response.data.data);
							ionicMessageService.hideLoading();
							if(response.data.code==0){
								if(response.data.data.length>=3){
									nextPage=true;
								}else{
									nextPage=false;
								}
								
								$scope.orders=$scope.orders.concat(response.data.data);
								console.log("啦啦啦啦",$scope.orders);
								$scope.$broadcast("scroll.infiniteScrollComplete");
							}else{
								nextPage=false;
								ionicMessageService.showMessage("我可是有底线滴");
								console.log("下拉错误");
								$scope.$broadcast("scroll.infiniteScrollComplete");
							}
						},
						function(error){
							nextPage=false;
							console.log("服务器错误");
							ionicMessageService.hideLoading();
							ionicMessageService.showMessage("服务器错误");
							$scope.$broadcast("scroll.infiniteScrollComplete");
						});
					
					
				}
				
				


		}]);
})()