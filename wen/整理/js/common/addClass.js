var GLOBAL={};
GLOBAL.namespace=function(str){
	var arr=str.split("."),o=GLOBAL;
	for(i=(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
		o[arr[i]]=o[arr[i]] || {};
		o=o[arr[i]];
	}
}
GLOBAL.namespace("Dom");
GLOBAL.Dom.addClass=function(node,root){
	if(!new RegExp("(^|\\s+)"+str).test(node.className)){
		node.className=node.className+' '+str;
	}
}
GLOBAL.Dom.removeClass=function(node,root){
	node.className=node.className.replace(new RegExp("(^|\\s+)"+str),"");
}