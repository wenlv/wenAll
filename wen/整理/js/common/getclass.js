var GLOBAL={};
GLOBAL.namespace=function(str){
	var arr=str.split("."),o=GLOBAL;
	for(i=(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
		o[arr[i]]=o[arr[i]] || {};
		o=o[arr[i]];
	}
}


//Dom相关
GLOBAL.namespace("Dom");
GLOBAL.Dom.getNextNode=function(node){
	node=typeof node=="string" ? document.getElementById(node) :node;
	var nextNode=node.nextSibling;
	if(!nextNode) return null;
	if(!document.all){
		while(true){
			if(nextNode.nodeType==1){
				break;
			}else{
				if(nextNode.nextSibling){
					nextNode=nextNode.nextSibling;
				}else{
					break;
				}
			}
		}
	}
	return nextNode;
};
//添加类
GLOBAL.Dom.addClass=function(node,str){
	if(!new RegExp("(^|\\s+)"+str).test(node.className)){
		node.className=node.className+' '+str;
	}
}
//删除类
GLOBAL.Dom.removeClass=function(node,str){
	node.className=node.className.replace(new RegExp("(^|\\s+)"+str),"");
}
			
GLOBAL.Dom.setOpacity=function(node,lecel){
	node=typeof node=="string" ? document.getElementById(node) :node;
	if(document.all){
		node.style.filter="alpha(opacity=" + level +")";
	}else{
		node.style.opacity=level / 100;
	}
}

GLOBAL.Dom.get=function(node){
	node=typeof node=="string" ? document.getElementById(node):node;
	return node;
}
//获取class类
GLOBAL.Dom.getElementsByClassName=function(str,root,tag){
	if(root){
		root=typeof node=="string" ? document.getElementById(node):node;
	}else{
		root=document.body;
	}
	tag=tag || "*";
	var els=root.getElementsByTagName(tag),arr=[];
	for(var i=0;n=els.length;i<n;i++){
		for(var j=0;k=els.className.split(" ");l=k.length;j<l;j++){
			if(k[j]==str){
				arr.push(els[i]);
				break;
			}
		}
	}
	return arr;
}


//Event相关
GLOBAL.namespace("Event");
GLOBAL.Event.getEventTarget=function(e){
	e=window.event || e;
	return e.srcElement || e.target;
}
GLOBAL.Event.stopPropagation=function(e){
	e=window.event || e;
	if(document.all){
		e.cancelable=true;
	}else{
		e.stopPropagation();
	}
}

//on事件
GLOBAL.Event.on=function(node,eventType,handler){
	node=typeof node=="string" ? document.getElementById(node):node;
	if(document.all){
		node.attachEvent("on"+eventType,handler);
	}else{
		node.addEventListener(eventType,handler,false);
	}	
}
//Lang相关
GLOBAL.namespace("Lang");
GLOBAL.Lang.trim=function(ostr){
	return ostr.replace(/^\s+|\s+$/g,"");
}
GLOBAL.Lang.isNumber=function(s){
	return !isNaN(s);
}
GLOBAL.Lang.extend=fucntion(subCalss,superClass){
	var F=function(){};
	F.prototype=superClass.prototype;
	subClass.prototype=new F();
	subClass.prototype.constructor=subClass;
	subClass.superclass=superClass.prototype;
	if(superClass.prototype.constructor==Object.prototype.constructor){
		superClass.prototype.constructor=superClass;
	}
	
}
