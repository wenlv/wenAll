(function(){
	angular.module("introCtrlModule",[])
		.controller("introController",["$scope","$state",
			"VERSION","INTROHEIGHT",
			function($scope,$state,VERSION,INTROHEIGHT){
				$scope.VERSION=VERSION;

				$scope.heightObj={
					"height":INTROHEIGHT+"px"
				};

				$scope.slideHasChanged=function(index){
					console.log(index);
				};

				$scope.goHomePage=function(){
					$state.go("tab.list");
				}

		}])
})()