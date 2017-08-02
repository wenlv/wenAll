
//定义trim去除字符串首尾的空白字符
function trim(ostr){
	return ostr.replace(/^\s+|\s+$/g,"");
}
//var str=" abc ";
//console.log(trim(str).length);
//console.log("  "=="");       //false
//console.log(trim(" ")==="");   //true


//判断类型的方法
function isNumber(s){
	return !isNaN(s);
};
function isString(s){
	return typeof s==="struing";
};
function isBoolean(s){
	return typeof s==="boolean";
};
function isFunction(s){
	return typeof s==="function";
};
function isNull(s){
	return s===null;
};
function isUndefined(s){
	return typeof s==="undefined";
};
function isEmpty(s){
	return /^\s*$/.test(s);
};
function isArray(s){
	return s instanceof  Array;
};

