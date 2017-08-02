
//========================jquery ajax用法 跨域         推荐使用======================================
$.ajax({
	url: getURL+"shareProfit/queryShareProfitDetail",
	data:params,
	type: "GET",
	dataType:'json',
	xhrFields:{
      withCredentials:true
    },
	success:function(data){
		if(data.returnCode==1){
			console.log(data);	
		}else if(data.returnCode==2){
			console.log("超时");
		}else{
			console.log(data);
		}
	},
	error:function(error){
		console.log(error);
	}
});
