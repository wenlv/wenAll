var GLOBAL={};
GLOBAL.namespace=function(str){
	var arr=str.split("."),o=GLOBAL;
	for(i=(arr[0]=="GLOBAL")?1:0;i<arr.length;i++){
		o[arr[i]]=o[arr[i]] || {};
		o=o[arr[i]];
	}
}
//GLOBAL.namespace("Dom");  使用规则 Dom换成想要加的类即可