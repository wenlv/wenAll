(function(){
//	
//	
//	//使用用方法
//	<button id="btn">点我</button>
//	<button id="sec">解除绑定</button>

//	addEvent(btn,'click',show);
//	addEvent(btn,'click',toshow);
//	addEvent(btn,'contextmenu',thirdshow)		
//	function show(){
//		alert('我是第一次绑定');
//	}
//	function toshow(){
//		alert('我是第二次绑定');
//	}
//	function thirdshow(){
//		alert('我是右击事件');
//
//	}
	
	//标准绑定事件的函数
		function addEvent(element,event,fn){
				if(element.addEventListener){
					element.addEventListener(event,fn);
				}else if(element.attachEvent){
					element.attachEvent('on'+event,fn);
				}else{
					alert('您的浏览器不支持事件');
					return;
				}
			}
		
		//标准解除事件绑定的函数
		function delEvent(element,event,fn){
			if(element.removeEventListener){
				element.removeEventListener(event,fn);
			}else if(element.detachEvent){
				element.detachEvent('on'+event,fn);
			}else{
				alert('尔等浏览器不支持事件');
			}
		}
})()
