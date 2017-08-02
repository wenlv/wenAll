(function() {
	angular.module("payCtrlModule", [])
		.controller("payProductController", [
			"$scope", "$state", "getDataService", "USERDATA",
			"messageService","$ionicModal","modalDataService",
			"$location",
			function($scope, $state, getDataService, USERDATA,
				messageService,$ionicModal,modalDataService,
				$location) {
				$scope.user = {};
				var toAddress = "";
				//是否可以支付
				var canPay = 0;
				//判断判断微信或者支付宝
				var payEnv = getTransType();
				function getTransType() {
					// 判断微信还是支付宝
					if(/MicroMessenger/.test(window.navigator.userAgent)) {
						// 微信 
						canPay++;
//						return 'weixin';
						return 'wx';
					} else if(/AlipayClient/.test(window.navigator.userAgent)) {
						// 支付宝 
						canPay++;
						return 'alipay';
					} else {
						canPay++;
						return payEnv = 'others';
					}
				}
				//获取token
				getDataService.getRequest("merchantInfo/requestToken", null,
					function(data) {
						if(data.data.returnCode == 1) {
							USERDATA.tokenName = data.data.data;
							canPay++;
						} else if(data.data.returnCode==2){
                        	messageService.showMessage(data.data.returnMsg);
                        	//登录超时重新登录页面
                        	$ionicModal.fromTemplateUrl("tpl/login/login.html",{
								animation:'slide-in-up'
							}).then(function(modal){
								$scope.modal=modal;
								$scope.modal.show();
								modalDataService.myModal=modal;
							});
                        }else{
                        	messageService.showMessage(data.data.returnMsg);
                        }
					},
					function(error) {
						messageService.showMessage(error);
					}
				);
	
				//费率选择开始
				//开通费用
//				USERDATA.fee = 0;
//				$scope.isfeeRateOne = true;
//				//0.5费率选择判断
//				function feeRate() {
//					if($scope.isfeeRateOne) {
////						$scope.rateone = 50;
//						$scope.rateone = 48;
//						//50%费率开通费用
////						USERDATA.fee = 99;
//						USERDATA.fee = 180;
//					} else {
////						$scope.rateone = 35;
//						$scope.rateone = 38;
//					}
//				}
//				//默认调用一次0.5费率
//				feeRate();
//				//点击选择费率
//				$scope.rateOne = function() {
//					feeRate();
//				}
//				$scope.rateTwo = function() {
//					$scope.isfeeRateTwo = true;
//					if($scope.isfeeRateTwo) {
////						$scope.rateone = 35;
//						$scope.rateone = 38;
//						//	35%费率开通费用
////						USERDATA.fee = 99;
//						USERDATA.fee = 180;
//					} else {
////						$scope.rateone = 50;
//						$scope.rateone = 48;
//					}
//				}
//				默认费率是48，开通费180
				$scope.rateone=48;
				USERDATA.fee = 180;
				$scope.rateOne=function(){
					$scope.isfeeRate=true;
					//0.38费率38
					$scope.rateone = 38;
				}
				$scope.rateTwo=function(){
					$scope.isfeeRate=false;
					//0.48费率48
					$scope.rateone = 48;
				}
				
				//产品选择开始
				//总的商品数
				var productTotal = 0;
				//默认显示地址信息
				$scope.isAddr = true;
				$scope.user.eleCode = 1;
				$scope.istrue = true;
				//电子码选中时
				$scope.codeSub = false;
				if($scope.istrue) {
					eleCodeClick();
				}
				//默认的电子吗数量
				var eleCode = 0;
				$scope.code = function() {
					$scope.istrue = !$scope.istrue;
					eleCodeClick();
				}
				//电子码选中时执行的函数
				function eleCodeClick() {
					if($scope.istrue) {
						$scope.codeSub = true;
						$scope.user.eleCode=1;
						if($scope.isSticker || $scope.isDecca) {
							$scope.isAddr = true;
						} else {
							$scope.isAddr = false;
						}
						//电子码减
						$scope.eleCodeSub = function() {
							$scope.user.eleCode--;
							if($scope.user.eleCode <= 1) {
								$scope.user.eleCode = 1;
							}
						}
						//电子码加
						$scope.eleCodeAdd = function() {
							$scope.user.eleCode++;
						}
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					} else {
						//显示收货地址
						if($scope.isSticker || $scope.isDecca) {
							$scope.isAddr = true;
						} else {
							$scope.isAddr = false;;
						}
						var eleCode = 0;
						$scope.eleCodeSub = function() {};
						$scope.eleCodeAdd = function() {};
						$scope.user.eleCode = 0;
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					}
				}
				//桌贴选中时
				$scope.user.tabsticker = 1;
				$scope.StickerSub = false;
				//桌贴的默认数量
				var tabsticker = 0;
				$scope.sticker = function() {
					$scope.isSticker = !$scope.isSticker;
					if($scope.isSticker) {
						//显示地址信息
						$scope.isAddr = true;
						$scope.user.tabsticker=1;
						//桌贴减
						$scope.tabStickerSub = function() {
							$scope.user.tabsticker--;
							$scope.total = $scope.user.tabsticker;
							if($scope.user.tabsticker <= 1) {
								$scope.user.tabsticker = 1;
							}
						}
						//桌贴加
						$scope.tabStickerAdd = function() {
							$scope.user.tabsticker++;
						}
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;

					} else {
						if(!$scope.isDecca) {
							$scope.isAddr = false;
						}
						var tabsticker = 0;
						$scope.StickerSub = false;
						$scope.tabStickerSub = function() {};
						$scope.tabStickerAdd = function() {};
						$scope.user.tabsticker = 0;
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					}
						//判断快递费和地址
					if($scope.isSticker || $scope.isDecca) {
						$scope.expressfee = USERDATA.expressFee?USERDATA.expressFee:0;
					} else {
						$scope.expressfee =0;
					}
				}
				//台卡选中时
				$scope.user.tabdecca = 1;
				$scope.deccaSub = false;
				$scope.deccaSub = true;
				//当选中时获取台卡的数量
				var tabdecca = 0;
				$scope.decca = function() {
					$scope.isDecca = !$scope.isDecca;
					if($scope.isDecca) {
						//显示地址信息
						$scope.isAddr = true;
						$scope.user.tabdecca=1;
						//台卡减
						$scope.decSub = function() {
							$scope.user.tabdecca--;
							if($scope.user.tabdecca <= 1) {
								$scope.user.tabdecca = 1;
							}
						}
						//台卡加
						$scope.deccaAdd = function() {
							$scope.user.tabdecca++;
						}
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					} else {
						if(!$scope.isSticker) {
							$scope.isAddr = false;
						}
						var tabdecca = 0;
						$scope.deccaSub = false;
						$scope.decSub = function() {};
						$scope.deccaAdd = function() {};
						$scope.user.tabdecca = 0;
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					}
//						//判断快递费和地址
					if($scope.isSticker || $scope.isDecca) {
						$scope.expressfee = USERDATA.expressFee?USERDATA.expressFee:0;
					} else {
						$scope.expressfee =0;
					}
				}
				//监控电子码数量变化
				$scope.$watch("user.eleCode", function() {
					if($scope.istrue) {
						//当选中时获取电子码的数量
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					} else {
						$scope.user.eleCode = 0;
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					}
				})
				//监控桌贴数量变化
				$scope.$watch("user.tabsticker", function() {
					//当选中时获取桌贴的数量
					if($scope.isSticker) {
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					} else {
						$scope.user.tabsticker = 0;
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					}
				})

				//监控台卡数量变化
				$scope.$watch("user.tabdecca", function() {
					//当选中时获取台卡的数量
					if($scope.isDecca) {
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					} else {
						$scope.user.tabdecca = 0;
						productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
						$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
					}
				})
				//监控运费变化
				$scope.$watch("expressfee", function() {
					$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
				})
				//监控费率变化
				$scope.$watch("rateone", function() {
					$scope.user.total = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca + $scope.expressfee + USERDATA.fee;
				})
				//产品费用
				var cost = $scope.user.eleCode + 5 * $scope.user.tabsticker + 20 * $scope.user.tabdecca;
				//产品总数
				var productTotal = $scope.user.eleCode + $scope.user.tabsticker + $scope.user.tabdecca;
				//默认快递费
				$scope.expressfee = 0.00;
				//选择快寄
				address();
				$scope.cities;
				$scope.areas;
				//快寄地址=省+市+区
				USERDATA.addressAll = "";
				$scope.isAddress=true;
				$scope.proToCity = function() {
					$scope.cities = $scope.user.pro.cityList;
					USERDATA.provce = $scope.user.pro.name;
					$scope.user.city = $scope.user.pro.cityList[0].name;
					$scope.user.area = $scope.user.pro.cityList[0].districtVoList[0].name;
					$scope.expressfee=0;
				}
				$scope.cityToArea = function() {
					$scope.areas = $scope.user.city.districtVoList;
					USERDATA.city = $scope.user.city.name;
					$scope.user.city.name = $scope.user.city.name;
					$scope.user.area = $scope.user.city.districtVoList[0].name;
				}
				$scope.Area = function() {
					//获取区域
					USERDATA.area = $scope.user.area.name;
					USERDATA.expressFee = $scope.user.area.expressFee;
					$scope.expressfee = USERDATA.expressFee;	
					$scope.isAddress=false;
				}
				//收件人地址input
				$scope.addAdress=function(){
					//快寄地址=省+市+区
					USERDATA.addressAll =$scope.user.pro.name+ $scope.user.city.name+$scope.user.area.name+$scope.user.address;
				}
				//实时快递费
				var expressfee = $scope.expressfee;
				//收件人
				$scope.ddressee = function() {
					var addr = $scope.user.addressee;
				}
				$scope.telNumber = function() {
					var number = $scope.user.telNumber;
				}
				//订单总计=开通费+产品总费用+快寄费
				var total = USERDATA.fee + cost + expressfee;
				//监控桌贴的选中时地址和邮费的变化
				$scope.$watch("user.sticker", function() {
					//判断快递费和地址
					if($scope.isSticker || $scope.isDecca) {
						$scope.expressfee = USERDATA.expressFee?USERDATA.expressFee:0;	
					} else {
						$scope.expressfee =0;
					}
				})
				//查看电子码说明
				$scope.lookDesc = function() {
					$scope.showImg = true;
					$scope.lookDescImg = "./images/zhuotie.jpg";
				}
				//查看桌贴
				$scope.lookTable = function() {
					$scope.showImg = true;
					$scope.lookDescImg = "./images/zhuotie.jpg";
				}
				//查看台卡
				$scope.lookTag = function() {
					$scope.showImg = true;
					$scope.lookDescImg = "./images/taika.jpg";
				}
				//关闭电子码说明
				$scope.closeLook = function() {
					$scope.showImg = false;
				}
				//点击时支付
				$scope.payMoney = function() {
					var payparam = {					
						merchantId:localStorage.getItem("curMerchantId"),						
						feeRate: $scope.rateone,
						productOne: $scope.user.eleCode,
						productTwo: $scope.user.tabsticker,
						productThree: $scope.user.tabdecca,
						total: productTotal,
						transType: payEnv,
						address: USERDATA.addressAll,
						postage: $scope.isAddr?$scope.expressfee:0,
						consignee: $scope.user.addressee,
						consigneeTel: $scope.user.telNumber,
						cost: cost,
						tokenName: USERDATA.tokenName,
						//	costTotal:$scope.user.total
						costTotal: 0.01,
						openId:localStorage.getItem("MeropenId"),
//						callBackUrl:"http://1706pc2379.iask.in:36389/qrcode2/index.html#/paysuccess"
						callBackUrl:"http://17o15913w4.iok.la:42026/qrcode2/index.html#/paysuccess"
					}
					identity(payparam);
				}
				//快寄地址请求
				function address(param) {
					getDataService.getRequest(
						"province/queryAreaList",
						null,
						function(data) {
							if(data.data.returnCode == 1) {
								$scope.provinces = data.data.data;
							} else if(data.data.returnCode==2){
                            	messageService.showMessage(data.data.returnMsg);
                            	//登录超时重新登录页面
                            	$ionicModal.fromTemplateUrl("tpl/login/login.html",{
									animation:'slide-in-up'
								}).then(function(modal){
									$scope.modal=modal;
									$scope.modal.show();
									modalDataService.myModal=modal;
								});
                            }else{
                            	messageService.showMessage(data.data.returnMsg);
                            }
						},
						function(error) {
							messageService.showMessage(error);
						}
					);
				}
				//购买商品请求
				function identity(param) {
					if(localStorage.getItem("curMerchantId")) {
						getDataService.getRequest(
							"/apply/applyQRCode",
							param,
							function(data) {							
								if(data.data.returnCode == 1) {
									window.location = data.data.data.codeUrl;
								} else if(data.data.returnCode==2){
	                            	messageService.showMessage(data.data.returnMsg);
	                            	//登录超时重新登录页面
	                            	$ionicModal.fromTemplateUrl("tpl/login/login.html",{
										animation:'slide-in-up'
									}).then(function(modal){
										$scope.modal=modal;
										$scope.modal.show();
										modalDataService.myModal=modal;
									});
	                            }else{
	                            	messageService.showMessage(data.data.returnMsg);
	                            }
							},
							function(error) {
								messageService.showMessage(error);
							}
						);
					} else {
						messageService.showMessage("您还没有注册，请您先注册!");
						//没有登录 返回注册页面
						$state.go("regist");
					}
				}
				
				
				//微信时支付调用
				if(payEnv=="wx"){
					getMerOpenId();
				}
				//微信时获取openID
				function getMerOpenId(){
					var MerwxCode=$location.search().code;
					var lastMerWxCode=localStorage.getItem("MerwxCode");
					if(lastMerWxCode!=null&&lastMerWxCode==MerwxCode){
						return;
					}
					 getDataService.getRequest(
					 	"wxMerchantInfo/getOpenId",
						{code: MerwxCode},
						function(data){
							if(data.data.returnCode == 1) {	
								localStorage.setItem("MeropenId",data.data.data);
								localStorage.setItem("MerwxCode",MerwxCode);
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