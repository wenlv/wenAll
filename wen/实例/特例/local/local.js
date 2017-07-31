/*
* 设置cookie
 	1. key     		键
 	2. value		值
*/
	var myLocalStorage={
		setLocalStorage:function(key,value){	//存入本地
			//判断是否是对象

			// console.log(typeof(value));
			if(typeof(value)=="object"){
				// console.log(value);
				window.localStorage[key]=JSON.stringify(value);
				// JSON.stingify  将对象转化为JSON字符串
			}else{
				window.localStorage[key]=value;
			}
		},
		getLocalStorageObject:function(key){//取出本地对象数据

			return JSON.parse(window.localStorage[key]);
		},
		getLocalStorage:function(key){//取出本地单条数据

			return window.localStorage[key];
		},
		deleteLocalStorage:function(key){
			window.localStorage.removeItem(key);
		}
	}