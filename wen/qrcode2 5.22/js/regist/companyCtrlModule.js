(function(){
	angular.module("companyCtrlModule",[])
		.controller("companyController",[
			"$scope","$state","getDataService","USERDATA",
			'$upload',"HOSTURL","messageService","$ionicModal",
			"modalDataService",
			function($scope,$state,getDataService,USERDATA,
				$upload,HOSTURL,messageService,$ionicModal,
			modalDataService){
				$scope.user={};

				//默认的银行
				$scope.user.bankOption="中信银行";
				$scope.bankSelect=function(){
					$scope.user.bankOption;
				}
				$scope.companyUser=function(){
					var bankparam={
						merchantId:localStorage.getItem("curMerchantId"),
						bankType:$scope.user.bankOption,
						bankName:$scope.user.bankName,
						bankAccount:$scope.user.bankAccount,
						bankImg:$scope.getFileFive
					}
					identity(bankparam);
				}
				//判断判断微信或者支付宝
				var payEnv = getTransType();
				function getTransType() {
					// 判断微信还是支付宝
					if(/MicroMessenger/.test(window.navigator.userAgent)) {
						// 微信 
						return 'wx';
					} else if(/AlipayClient/.test(window.navigator.userAgent)) {

						return 'alipay';
					} else {
						return payEnv = 'others';
					}
				}
				//点击上传银行账户照片
				 $scope.getFileFive="./images/bank2.jpg";
				 $scope.getFileFive="./images/bank01.png";
				 $scope.isYin=true;
				$scope.onFileSelectFive =function($files) {
       			 	//$files:是已选文件的名称、大小和类型的数组
       			 	messageService.showLoading("上传中...");
			        for (var i = 0; i < $files.length; i++) {      
			            var file = $files[i];
			            var img='img/'+file.name;
			            var param={
			            	file:file.name,
			            	serviceType:0
			            }
			            /*文件上传函数*/
			            $scope.upload = $upload.upload({
			                url:HOSTURL+ "fileUpload/uploadFile?serviceType=0", //上传的url
			                method: 'POST' ,
			                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			                //withCredentials: true,
			                data: {file:file.name},
			                file: file, // or list of files ($files) for html5 only
			                //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
			                // customize file formData name ('Content-Disposition'), server side file variable name. 
			                //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
			                // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
			                formDataAppender: function(formData, key, val){
			                }
			            }).progress(function(evt) {//上传进度
			            	  messageService.showMessage("上传中...");
			                  parseInt(100.0 * evt.loaded / evt.total);
			                
			            }).success(function(data, status, headers, config) {
			                // 文件上传成功处理函数
			                 messageService. hideLoading();
			                 messageService.showMessage("上传成功");
			                 $scope.getFileFive=data.data;
			                 $scope.isYin=false;
			                 $scope.user.getImgYin=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                 messageService. hideLoading();
			                 messageService.showMessage("上传失败");
			            });
			        };
			    };
			    //登录/注册进来后自动获取开户名称
			    getDataService.getRequest(
			    	"merchantDetailInfo/queryMerchantDetailInfo",
			    	{merchantId:localStorage.getItem("curMerchantId")},
			    	function(data){
			    		if(data.data.returnCode==1){
			    			$scope.user.bankName=data.data.data.legalName;
			    		}else{
			    			messageService.showMessage(data.data.returnMsg);
			    		}
			    	},
			    	function(error){
			    		messageService.showMessage(error);
			    	}
			    )
				//验证银行信息
				function identity(param){
                	if(localStorage.getItem("curMerchantId")){
						getDataService.getRequest(
							"merchantDetailInfo/bankAccountCertification",
	                        param,
	                        function(data){
	                            if(data.data.returnCode==1){
	                            	//判断是否是微信
	                            	if(payEnv == "wx") {		
	                            		//微信转到微信专用的
										window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7dbedebd42b16dde&redirect_uri=http%3a%2f%2fapp.71bill.com%2ftestCode.html&response_type=code&scope=snsapi_base&state=123#wechat_redirect"
									} else {		
										//成功注册后跳到下一步
										$state.go("payproduct");
									}
	                            }else if(data.data.returnCode==2){
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
	                        function(error){
	                           messageService.showMessage(error);
	                        }
	                    );
					}else{
						messageService.showMessage("您还没有注册,请您先注册!");
						//没有登录 返回注册页面
						$state.go("regist");
					} 
                }
			}
		])	
})()
