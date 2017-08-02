var eventUtil = {  
    // 添加句柄  
    addHandler: function(element, type, handler) {  
        if (element.addEventListener) {  
            element.addEventListener(type, handler, false);  
        } else if (element.attachEvent) {  
            element.attachEvent('on' + type, handler);  
        } else {  
            element['on' + type] = handler;  
        }  
    },  
    // 删除句柄  
    removeHandler: function(element, type, handler) {  
        if (element.removeEventListener) {  
            element.removeEventListener(type, handler, false);  
        } else if (element.detachEvent) {  
            element.detachEvent('on' + type, handler);  
        } else {  
            element['on' + type] = null;  
        }  
    },  
    //获取事件  
    getEvent: function(event) {  
        return event ? event : window.event;  
    },  
    //获取事件类型  
    getType: function(event) {  
    	event=window.event || event;
        return event.type;  
    },  
    //获取事件源  
    getElement: function(event) {  
    	event=window.event || event;
        return event.target || event.srcElement;  
    },  
    //阻止默认事件比如a链接跳转  
    preventDefault: function(event) {  
    	event=window.event || event;
        if (event.preventDefault) {  
            event.preventDefault();  
        } else {  
            event.returnValue = false;  
        }  
    },  
    //阻止事件冒泡  
    stopPropagation: function(event) {  
    	event=window.event || event;
        if (event.stopPropagation) {  
            event.stopPropagation();  
        } else {  
            event.cancelBubble = true;  
        }  
    }  
}  
