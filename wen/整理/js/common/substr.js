(function(){
//	使用方法
//	直接调用GetRequest();

//	截取url中的字段
	function GetRequest() {   
	   var url = location.search; //获取url中"?"符后的字串   
	   console.log(url);
	   var theRequest = new Object();   
	   if (url.indexOf("?") != -1) {   
	      var str = url.substr(1);  
	      console.log(str);
	      strs = str.split("&");  
	      console.log(strs);
	      for(var i = 0; i < strs.length; i ++) {   
	         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
	      }   
	   }   
	   console.log(theRequest);  
	   return theRequest; 
	   
	}   
})()
