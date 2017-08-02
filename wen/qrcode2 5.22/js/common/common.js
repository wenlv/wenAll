(function(){
	 angular.module("comonModule",[])
	 	 .service("commonService",["$http","HOSTURL",
            function($http,HOSTURL){
	            this.getTransType=function() {
					// 判断微信还是支付宝
					if(/MicroMessenger/.test(window.navigator.userAgent)) {
						// 微信 
						return 'wx';
					} else if(/AlipayClient/.test(window.navigator.userAgent)) {
						// 支付宝 
						return 'alipay';
					} else {
						return payEnv = 'others';
					}
				}
        }])

})()
