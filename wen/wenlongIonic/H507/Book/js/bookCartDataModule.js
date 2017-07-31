(function(){
	angular.module("bookCartDataModule",[])
	//保护用户数据的全局对象
	.constant("USERDATA",{})
	.service("bookCartDataService",function(){
		this.cartList={}
	})
})()