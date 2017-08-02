(function(){
	angular.module("wifiCtrlModule",[])
		.controller("wifiController",[
			"$scope","$rootScope","$state",
			"getDataService","messageService",
			function($scope,$rootScope,$state,
				getDataService,messageService){
				$scope.user={};	
				$scope.wifiConnect="ChineNet";
//				$scope.isWifi=false;
				//点击链接wifi时
//				$scope.wifiLink=function(){
//					
//				}
				console.log(window);
				console.log(Window.devices);
				console.log(navigator);
				//选择wifi时
				$scope.selectWifi=function(w){
					console.log(w);
					console.log(angular.element(document.getElementById(w.wifiname)));
//					console.log(angular.element(document.getElementsByClassName("wifiName"))[0].style.color="red");
					var wifiCheck=angular.element(document.getElementById(w.wifiname))[0].children[1];
					console.log(wifiCheck);
					if(wifiCheck.style.display!=="block"){
						wifiCheck.style.display="block";
					}else{
						wifiCheck.style.display="none";
					}
				}
				 $scope.wifiNames = [
			       {
			            "wifiname" : "ChineNet1",
			            "isWifi" : "false"
			        },{
			            "wifiname" : "ChineNet2",
			            "isWifi" : "true"
			        },{
			            "wifiname" : "ChineNet3",
			            "isWifi" : "false"
			        },{
			            "wifiname" : "ChineNet4",
			           "isWifi" : "false"
			        }
			    ];
			}])
})()
