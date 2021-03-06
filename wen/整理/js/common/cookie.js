var GLOBAL={};
GLOBAL.namespace=function(str){
	var arr=str.split("."),o=GLOBAL;
	for(i=(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
		o[arr[i]]=o[arr[i]] || {};
		o=o[arr[i]];
	}
}

GLOBAL.namespace("Cookie");

GLOBAL.Cookie={
//	读取
	read:function(name){
		var cookieStr="; "+document.cookie+"; ";
		var index=cookieStr.indexOf("; "+name+"=");
		if(index!=-1){
			var s=cookieStr.substring(index+name.length+3;cookieStr.length);
			return unescape(s.substring(0,s.indexOf("; ")));
		}else{
			return null;
		}
	};
//	设置
	set:function(name,value,expires){
		var expDays=sxpires*24*60*60*1000;
		var expDate=new Date();
		expDate.setTime(expDate.getTime()+expDate);
		var expString=expires?"; expires="+expDate.toGMTString():"";
		var pathString=";path=/";
		document.cookie=name+"="+escape(value)+expString+pathString;
	};
	
	//删除
	del:function(name){
		var exp=new Date(new Date().getTime()-1);
		var s=this.read(name);
		if(s!=null){
			document.cookie=name+"="+s+";expires="+exp.toGMTString()+";path=/";
		}
	}
}
