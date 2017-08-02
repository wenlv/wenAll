//封装stoppagation
function stopPropagation(e){
	e=window.event || e;
//	判断ie
	if(document.all){
		e.cancelable=true;
	}else{
		e.stopPropagation();
	}
}


//封装getEventTarget  使用方法 document.get
//document.getElementsById("btn").onclick=function(e){
//	var node=getEventTarget(e);
//	console.log(node.tagName;);
//}
function getEventTarget(e){
	e=window.event || e;
	return e.srcElement || e.target;
}


//封装getOpacity透明度  使用 setOpacity("btn",20);调用
function setOpacity(node,level){
	node=typeof node=="string" ? document.getElementById(node) :node;
//	node=typeof node=="string" ? document.querySelector(node) :node;
	if(document.all){
		node.style.filter="alpha(opacity="+ level +")";
	}else{
		node.style.opacity=level / 100;
	}
}


//getNextNode  获取节点
//使用方法 var nextNode=getNextNode("btn");
//console.log(nextNode.id);
function getNextNode(node){
	node=typeof node=="string" ? document.getElementById(node) : node;
//	node=typeof node=="string" ? document.querySelector(node) : node;
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
}


//定义全局变量
//使用方法
//GLOBAL.namespace("A.CAT");
var GLOBAL={};
GLOBAL.namespace=function(str){
	var arr=str.split("."),o=GLOBAL;
	for(i=(arr[0]=="GLOBAL") ? 1:0;i<arr.length;i++){
		o[arr[i]]=o[arr[i]] || {};
		o=o[arr[i]];
	}
}
