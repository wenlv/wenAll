(function(){
	angular.module("bookListCtrlModule",[])
	.controller("bookListController",["$scope",
		"getDataService","messageService",
		"IMAGEURL","bookCartDataService",
		"USERDATA","$location",
		function($scope,getDataService,
			messageService,IMAGEURL,bookCartDataService,
			USERDATA,$location){
			console.log("bookListController");
			$scope.IMAGEURL=IMAGEURL;
			//数据请求 加载到界面
			messageService.showLoading();
			getDataService.getRequest(
				"book.php",
				null,
				function(response){
					messageService.hideLoading();
					console.log(response);
					if(response.data.code==0){
						$scope.books=response.data.data;
					}else{
						messageService.showMessageBox(response.data.data);
					}
				},function(error){
					console.log(error);
					messageService.hideLoading();
					messageService.showMessageBox("服务器错误");
				});

			$scope.addCart=function(book){
				//首先判断该用户是否已登录  如果没有登录则跳转到登录
				if(!USERDATA.isLogin){
					$location.path("/login");
					return;
				}
				//购物车的数组  采用 对象的方式实现
				// {
				// 	1001:{id:1001,name:"HTML5",price:8.6,num:1}
				// }
				if(bookCartDataService.cartList[book.id]){
					bookCartDataService.cartList[book.id].num++;
				}else{
					bookCartDataService.cartList[book.id]={
						id:book.id, //提交订单时需要使用id参数
						title:book.title,
						price:book.price,
						num:1
					}
				}
			};

			$scope.$watch(function(){
				return bookCartDataService.cartList;
			},function(newValue,oldValue){
				var kind=0;
				for(var i in bookCartDataService.cartList){
					kind++;
				}
				if(kind>0){
					$scope.showBadge=true;
				}else{
					$scope.showBadge=false;
				}
				$scope.kind=kind;
			},true);

			$scope.USERDATA=USERDATA;
			if(USERDATA.isLogin){
				$scope.username=USERDATA.user.user_name;
			};

			//登出
			$scope.loginOut=function(){
				USERDATA.isLogin=false;
				USERDATA.user={};

				//清空购物车里的数据
				bookCartDataService.cartList={};
				$location.path("/bookList");
			}
		}])
})()