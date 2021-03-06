(function(){
	angular.module("appRouterModule",[])
	.config(["$stateProvider","$urlRouterProvider","VERSION",
		function($stateProvider,$urlRouterProvider,VERSION){
		
		var oldVersion=window.localStorage["userVersion"];
		if(oldVersion){
			if(oldVersion!=VERSION){
				$urlRouterProvider.otherwise("/intro");
				window.localStorage["userVersion"]=VERSION;
			}else{
				$urlRouterProvider.otherwise("/tab/list");
			}
		}else{
			$urlRouterProvider.otherwise("/intro");
			window.localStorage["userVersion"]=VERSION;
		}
		
		$stateProvider
			.state("intro",{
				url:"/intro",
				templateUrl:"tpl/startApp/intro.html",
				controller:"introController"
			})
			.state("tab",{
				url:"/tab",
				templateUrl:"tpl/tab/tab.html"
			})
			.state("tab.list",{
				url:"/list",
				views:{
					"listView":{
						templateUrl:"tpl/home/list.html",
						controller:"listController"
					}
				}
			})
			.state("tab.detail",{
				url:"/detail/:id",
				views:{
					"listView":{
						templateUrl:"tpl/home/detail.html",
						controller:"detailController"
					}
				}
			})
			.state("tab.cart",{
				url:"/cart",
				views:{
					"cartView":{
						templateUrl:"tpl/cart/cart.html",
						controller:"cartListController"
					}
				}
			})
			.state("tab.user",{
				url:"/user",
				views:{
					"userView":{
						templateUrl:"tpl/home/user.html",
						controller:"userController"
					}
				}
			})
			.state("tab.order",{
				url:"/order",
				views:{
					"orderView":{
						templateUrl:"tpl/showOrder/showOrder.html",
						controller:"showOrderController"
					}
				}
			})
			
	}])
})()