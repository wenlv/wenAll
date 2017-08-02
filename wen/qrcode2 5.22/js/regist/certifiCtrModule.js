(function(){
	angular.module("certifiCtrModule",[])
		.controller("certifiController",[
			"$scope","$state","getDataService",
			"USERDATA",'$upload',"HOSTURL",
			"messageService","$ionicModal","modalDataService",
			function($scope,$state,getDataService,USERDATA,
				$upload,HOSTURL,messageService,
				$ionicModal,modalDataService){
				$scope.user={};
				$scope.ceshi=function(){
					var ce=$scope.user.username;
					var shen=$scope.user.shenfen;
				}
	           //个人验证
				$scope.onTabSelected=function(){
					//个人验证时清除公司的名称和
					$scope.user.companyname="";
					$scope.user.businessId="";
					$scope.certPerUser=function(){
						var param={
							merchantId:localStorage.getItem("curMerchantId"),
							legalName:$scope.user.username,
							legalIdentityNo:$scope.user.shenfen,
							identityFrontImg:$scope.getFile,
							identitySideImg:$scope.getFileTwo,
							handImg:$scope.getFileT3,
							doorImg:$scope.getFileDoor,
							cashImg:$scope.getFileCheckstand,
							merchantType:1
						}
						identity(param);
					}
				}
				//公司验证
				$scope.onComSelected=function(){
					$scope.user.username="";
					$scope.user.shenfen="";
					$scope.certComUser=function(){
						var comparam={
							merchantId:localStorage.getItem("curMerchantId"),
							legalName:$scope.user.companyname,
							legalIdentityNo:$scope.user.businessId,
							identityFrontImg:$scope.getFileThree,
							identitySideImg:"",
							handImg:$scope.getFileFour,
							doorImg:$scope.getFileBussiesDoor,
							cashImg:$scope.getFileForeground,
							officeImg:$scope.getFileOffice,
							merchantType:2
						}
						identity(comparam);
					}	
				}
				//验证请求
                function identity(param){
                	if(localStorage.getItem("curMerchantId")){
						getDataService.getRequest(
							"merchantDetailInfo/approveMerchant",
	                        param,
	                       function(data){
	                            if(data.data.returnCode==1){
	                            	//成功注册后跳到下一步 银行信息验证
	                            	$state.go("company");
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
						messageService.showMessage("验证失败");
						//没有登录 返回注册页面
						$state.go("regist");
					} 
                }
//***************************个人注册开始***542px  345px*****************************

//              个人  默认照片

			    $scope.getFile="./images/shen01.png";
				$scope.getFileTwo='./images/shen02.png';
				$scope.getFileT3="./images/shen03.png";
				$scope.getFileDoor="./images/door01.png";
				$scope.getFileCheckstand="./images/checkstand.jpg";
				//个人信息图片默认是不为空验证
				 $scope.isShen=true;
				 $scope.isFen=true;
				 $scope.isZheng=true;
				 $scope.isDoor=true;
				 $scope.isCheckstand=true;
				//个人 点击上传身份证正面图片
				$scope.onFileSelect =function($files) {
       			 	//$files:是已选文件的名称、大小和类型的数组
       			 	messageService.showLoading("上传中...");
			        for (var i = 0; i < $files.length; i++) {      
			            var file = $files[i];
			            var img='img/'+file.name;
			            /*文件上传函数*/
			            $scope.upload = $upload.upload({
			                url:HOSTURL+ "fileUpload/uploadFile?serviceType=0", //上传的url
			                method: 'POST' ,
			                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//			                withCredentials: true,
			                data:{file:file.name},
			                file: file, // or list of files ($files) for html5 only
			                //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
			                // customize file formData name ('Content-Disposition'), server side file variable name. 
			                //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
			                // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
			                formDataAppender: function(formData, key, val){
			                }
			            }).progress(function(evt) {//上传进度
			            	 messageService.showMessage("上传中");
			                parseInt(100.0 * evt.loaded / evt.total);
			                
			            }).success(function(data, status, headers, config) {
			                // 文件上传成功处理函数
			                $scope.user.getImgShen=file.name;
			                messageService. hideLoading();
			                 messageService.showMessage("上传成功");
			                 $scope.getFile=data.data;
			                 $scope.isShen=false;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                messageService.showMessage("上传失败");    
			            });
			        };
			    };
			    
			    //点击上传反面图片
			    //个人 点击上传身份证反面图片
				$scope.onFileSelects =function($files) {
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
			                url:HOSTURL+ "fileUpload/uploadFile?serviceType=0",//上传的url
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
			                 $scope.getFileTwo=data.data;
			                 $scope.isFen=false;
			                 $scope.user.getImgFen=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                 messageService.showMessage("上传失败");
			            });
			        };
			    };
			    
			     //个人 点击上传手持身份证图片
			    //点击上传手持身份证图片
				$scope.onFileSelects3 =function($files) {
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
			                url:HOSTURL+ "fileUpload/uploadFile?serviceType=0",//上传的url
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
			                 $scope.getFileT3=data.data;
			                 $scope.isZheng=false;
			                 $scope.user.getImgZheng=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                 messageService.showMessage("上传失败");
			            });
			        };
			    };
			      //个人 点击上传门头照图片
				$scope.onFileSelects4 =function($files) {
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
			                url:HOSTURL+ "fileUpload/uploadFile?serviceType=0",//上传的url
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
			                 $scope.getFileDoor=data.data;
			                 $scope.isDoor=false;
			                 $scope.user.getImgDoor=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                 messageService.showMessage("上传失败");
			            });
			        };
			    };
			     //个人点击上传收银台照图片
				$scope.onFileSelects5 =function($files) {
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
			                url:HOSTURL+ "fileUpload/uploadFile?serviceType=0",//上传的url
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
			                 $scope.getFileCheckstand=data.data;
			                 $scope.isCheckstand=false;
			                 $scope.user.getImgCheckstand=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                messageService.showMessage("上传失败");
			            });
			        };
			    };
//******************************公司注册开始**********************************
			    //公司营业执照验证
			    //营业执照照片
			    $scope.getFileThree="./images/ying01.png";
			    $scope.getFileFour="./images/kai01.png";
			    $scope.getFileBussiesDoor="./images/bussiesDoor.jpg";
			    $scope.getFileForeground="./images/foreground.png";
			    $scope.getFileOffice="./images/office.jpg";
			    //营业照片不为空
			    $scope.isYing=true;
			    $scope.isXu=true;
			    $scope.isBussiesDoor=true;
			    $scope.isForeground=true;
			    $scope.isOffice=true;
				$scope.onFileSelectss =function($files) {
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
			            	 $scope.geterror="上传中";
			            	  messageService.showMessage("上传中...");
			                parseInt(100.0 * evt.loaded / evt.total);   
			            }).success(function(data, status, headers, config) {
			                // 文件上传成功处理函数
			                 messageService. hideLoading();
			                  messageService.showMessage("上传成功");
			                  $scope.getFileThree=data.data;
  							  $scope.isYing=false;
  							  $scope.user.getImgYing=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                 messageService.showMessage("上传失败");
			            });
			        };
			    };
			    
			    //公司开户照片
				$scope.onFileSelectsss =function($files) {
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
			                 $scope.getFileFour=data.data;
			                 $scope.isXu=false;
			                 $scope.user.getImgXu=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                messageService.showMessage("上传失败");
			            });
			        };
			    };
			     //公司门头照片
				$scope.onFileSelectss6 =function($files) {
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
			                 $scope.getFileBussiesDoor=data.data;
			                 $scope.isBussiesDoor=false;
			                 $scope.user.getImgBussiesDoor=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                messageService.showMessage("上传失败");
			            });
			        };
			    };
			     //公司前台照片
				$scope.onFileSelectsss7 =function($files) {
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
			                 $scope.getFileForeground=data.data;
			                 $scope.isForeground=false;
			                 $scope.user.getImgForeground=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                messageService.showMessage("上传失败");
			            });
			        };
			    };
			     //公司办公照片
				$scope.onFileSelectss8 =function($files) {
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
			                 $scope.getFileOffice=data.data;
			                 $scope.isOffice=false;
			                 $scope.user.getImgOffice=file.name;
			            }).error(function(data, status, headers, config) {
			                //失败处理函数
			                messageService. hideLoading();
			                messageService.showMessage("上传失败");
			            });
			        };
			    };
			}
		])	
})()
