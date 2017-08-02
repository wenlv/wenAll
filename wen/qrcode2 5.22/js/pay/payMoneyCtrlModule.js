(function() {
angular.module("payMoneyCtrlModule", [])
	.controller("paymoneyController", [
			"$scope", "$state", "keyService",
			"getDataService", "USERDATA","$window",
			"$location","messageService",
			function($scope, $state, keyService,
				getDataService, USERDATA,$window,
				$location,messageService) {
				//初始化页面
				$scope.user = {};
				$scope.user.getMoney = 0;
				$scope.user.seller = "xxx";
				
				//点击时调用数字键盘
				$scope.keyboard = keyboard;
				
				//设置微信调用时的参数code
				localStorage.setItem("code",$location.search().code);
				
				//是否可以支付
				var canPay=0;
				
				//进来后直接显示数字键盘
				keyboard();
				//调用数字键盘函数
				function keyboard() {
					var text = angular.element(document.getElementById("text1"));
					function key(key) {
						
						$scope.$apply($scope.user.getMoney = key);
					}
					keyService.getKey(text, $scope.user.getMoney, key);
				};	
				//离开之前关闭数字键盘
				$scope.$on("$ionicView.beforeLeave", function() {
					var keyId = angular.element(document.getElementById("__w_l_h_v_c_z_e_r_o_divid"));
					keyId.remove(keyId);
				});

				//判断判断微信或者支付宝
				var payEnv = getTransType();
				function getTransType() {
					// 判断微信还是支付宝
					if(/MicroMessenger/.test(window.navigator.userAgent)) {
						// 微信 
						$scope.user.getPay = '微信支付';
						$scope.isApliay=false;
						$scope.isWeiXin=true;
						$scope.isChecked=true;
						return 'wx';
					} else if(/AlipayClient/.test(window.navigator.userAgent)) {
						// 支付宝 
						$scope.user.getPay = "支付宝支付";
						$scope.isApliay=true;
						$scope.isWeiXin=false;
						$scope.isChecked=true;
						return 'alipay';
					} else {
						$scope.user.getPay = "其他支付";
						$scope.isApliay=false;
						$scope.isWeiXin=false;
						$scope.isChecked=false;
						return payEnv = 'others';
					}
				}

               var tokenName;
				//获取token
				getDataService.getRequest("merchantInfo/requestToken", null,
					function(data) {
						if(data.data.returnCode == 1) {
							canPay++;
							tokenName=data.data.data;
						} else {
							messageService.showMessage(data.data.returnMsg);
						}
					},
					function(error) {
						messageService.showMessage(error);
					}
				);

		
				//商户查询
				getDataService.getRequest("merchantInfo/queryMerchantInfo", {
					merchantId: localStorage.getItem("merchantId")},
					function(data) {
						if(data.data.returnCode == 1) {
							$scope.user.seller = data.data.data.merchantName;
							if(data.data.data.status==4){
								canPay++;	
								localStorage.setItem("merchantName",data.data.data.merchantName);
							}else{
								messageService.showMessage("已经禁止向该商户付款");
							}
							//商户状态 4，canPay++;
						} else {
							messageService.showMessage(data.data.returnMsg);
						}	
					},
					function(error) {
						messageService.showMessage(error);
					}
				);

				//点击时去支付
				$scope.goPayCommer=function(){				
					if(canPay==2){
						if($scope.user.getMoney>0){
							getPayParams();
						}else{
							messageService.showMessage("金额不合法");
						}					
					}
				}
				//微信时支付调用
				if(payEnv=="wx"){
					getUserOpenId();
				}
				//点击支付时调用支付接口付款
				function getPayParams(){
					var payParams = {
						tradeAmt:$scope.user.getMoney,
						merchantId:localStorage.getItem("merchantId"),
						codeId:localStorage.getItem("codeId"),
						transType:payEnv,
						orderName:localStorage.getItem("merchantName"),
						tokenName:tokenName,
						openId:localStorage.getItem("openId"),
//						callBackUrl:"http://1706pc2379.iask.in:36389/qrcode2/index.html#/paysuccess"
						callBackUrl:"http://17o15913w4.iok.la:42026/qrcode2/index.html#/paysuccess"
					};
					 getDataService.getRequest("incomeOrder/addOrder", payParams,
						function(data) {
							if(data.data.returnCode == 1) {	
								window.location = data.data.data.codeUrl;								
							}else{
                            	messageService.showMessage(data.data.returnMsg);
                            }
						},
						function(error) {
							messageService.showMessage(error);
						}
					);
				}
				
				
				//微信时获取openID
				function getUserOpenId(){
					var wxCode=$location.search().code;
					var lastWxCode=localStorage.getItem("wxCode");
					if(lastWxCode!=null&&lastWxCode==wxCode){
						return;
					}
					
					 getDataService.getRequest("wxMerchantInfo/getOpenId", {
						code:wxCode
					},
						function(data) {
							if(data.data.returnCode == 1) {	
								localStorage.setItem("openId",data.data.data);
								localStorage.setItem("wxCode",wxCode);
							}else{
                            	messageService.showMessage(data.data.returnMsg);
                            }
						},
						function(error) {
							messageService.showMessage(error);
						}
					);
				}
			}
		])
})()