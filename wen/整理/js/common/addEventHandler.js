///移动端点击事件调用 touchstart touchmove touchend
//addEventHandler(keyboard[m],"touchstart",keypress);
//pc端点击事件调用
//addEventHandler(keyboard[m],"click",keypress);


//点击事件封装
function addEventHandler(target,type,fn){
 	if(target.addEventListener){
 		target.addEventListener(type,fn);
	}else{
	 	target.attachEvent("on"+type,fn);
	}
}