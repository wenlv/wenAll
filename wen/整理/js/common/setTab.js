//==========================================================================
//===========================用hash对象封装自动切换的tab选项卡===============================================
//==========================================================================

var GLOBAL = {};
GLOBAL.namespace = function(str) {
	var arr = str.split("."),
		o = GLOBAL;
	for(i = (arr[0] == "GLOBAL") ? 1 : 0; i < arr.length; i++) {
		o[arr[i]] = o[arr[i]] || {};
		o = o[arr[i]];
	}
}

GLOBAL.namespace("Dom");
GLOBAL.namespace("Event");

GLOBAL.Dom.getElementsByClassName = function(str, root, tag) {
	if(root) {
		root = typeof root == "string" ? document.getElementById(root) : root;
	} else {
		root = document.body;
	};
	tag = tag || "*";
	var els = root.getElementsByTagName(tag),
		arr = [];
	for(var i = 0; i < els.length; i++) {
		for(var j = 0; k = els[i].className.split(" "), j < k.length; j++) {
			if(k[j] == str) {
				arr.push(els[i]);
				break;
			}
		}
	}
	return arr;
}

GLOBAL.Dom.addClass = function(node, str) {
	if(!new RegExp("(^|\\s+)" + str).test(node.className)) {
		node.className = node.className + ' ' + str;
	}
}
GLOBAL.Dom.removeClass = function(node, str) {
	node.className = node.className.replace(new RegExp("(^|\\s+)" + str), "");
}

GLOBAL.Event.on = function(node, eventType, handler) {
	node = typeof node == "string" ? document.getElementById(node) : node;
	if(document.all) {
		node.attachEvent("on" + eventType, handler);
	} else {
		node.addEventListener(eventType, handler, false);
	}
}

function setTab(config) {
	var root = config.root; //J_tab 即tab的最外层标签 可以有n个tab
	var currentClass = config.currentClass; //tab导航要改变的类
	var trigger = config.trigger || "click"; //触发的事件  点击  鼠标等  默认是点击
	var handler = config.handler; //回调函数 成功调用后要执行的函数
	var autoPlay = config.autoPlay; //是否自动播放 默认false  
	var playTime = config.playTime || 3000; //自动播放的时间  默认是3s
	//	var tabMenus = GLOBAL.Dom.getElementsByClassName("J_tab-menu", root), //获取导航栏元素组
	//		tabContents = GLOBAL.Dom.getElementsByClassName("J_tab-content", root); //获取内容栏元素组
	var tabMenus = tabMenus; //获取导航栏元素组
	var tabContents = tabContents; //获取内容栏元素组
	var currentIndex = 0;

	function showItem(n) {
		for(var i = 0; i < tabContents.length; i++) {
			tabContents[i].style.display = "none";
		}
		tabContents[n].style.display = "block";
		if(currentClass) {
			var currentMenu = GLOBAL.Dom.getElementsByClassName(currentClass, root)[0]; //获取含有当前 类的所有组
			if(currentMenu) {
				GLOBAL.Dom.removeClass(currentMenu, currentClass);
			};
			GLOBAL.Dom.addClass(tabMenus[n], currentClass);
		}
		if(handler) {
			handler(n);
		}
	}

	function autoHandler() {
		currentIndex++;
		if(currentIndex >= tabMenus.length) {
			currentIndex = 0;
		}
		showItem(currentIndex);
	}
	if(autoPlay) {
		setInterval(autoHandler, playTime);
	}
	for(var i = 0; i < tabMenus.length; i++) {
		tabMenus[i]._index = i;
		GLOBAL.Event.on(tabMenus[i], trigger, function() {
			showItem(this._index);
			currentIndex = this._index;
		});
	}
}
//================================使用说明===============================================
//需要设置最外层的类 J_tab 导航栏每个的类 J_tab-menu   内容栏的父级类J_tab-content
//需要设置最外层的类 J_tab 导航栏每个的类 J_tab-menu   内容栏的父级类J_tab-content


//tab的htm结构如下(可以有n个以下tab表)
//<div class="tab J_tab">
//	<ul>
//		<li class="J_tab-menu">menu1111111</li>
//		<li class="J_tab-menu">menu2222222</li>
//		<li class="J_tab-menu">menu3333333</li>
//	</ul>
//	<div class="tab-contentWrapper">
//		<div class="J_tab-content" style="display:none;">
//			....
//		</div>
//		<div class="J_tab-content">
//			...
//		</div>
//		<div class="J_tab-content" style="display:none;">
//			.......
//		</div>
//	</div>
//</div>

var tabs = GLOBAL.Dom.getElementsByClassName("J_tab"); // 需要设置最外层的类 J_tab 
var tabMenus = GLOBAL.Dom.getElementsByClassName("J_tab-menu", tabs[0]); //获取导航栏元素组
var tabContents = GLOBAL.Dom.getElementsByClassName("J_tab-content", tabs[0]); //获取内容栏元素组
//			setTab({ root: tabs[0], trigger: "mouseover" });
//第一个选项卡调用如下
setTab({
	root: tabs[0], //哪一个tab选项卡
	tabMenus: tabMenus, //获取这个tab选项卡下的导航列表
	tabContents: tabContents, //获取这个tab选项卡下的内容列表
	currentClass: "tab-currentMenu", //导航栏点击时添加的类
	trigger: "mouseover", //如何触发事件   滑过  点击等 默认是点击
	handler: function(index) { //需要执行的回调函数
		console.log(index);
		console.log("您激活的是第" + (index + 1) + "个标签");
	},
	autoPlay: true, //是否自动播放 默认false
	playTime: 500 //自动播放的间隔  默认是3s
});

//第二个选项卡调用如下
setTab({
	root: tabs[1],
	tabMenus: tabMenus,
	tabContents: tabContents,
	currentClass: "tab-currentMenu1",
	autoPlay: true,
	playTime: 500
});

//第三个选项卡调用如下
setTab({
	root: tabs[2],
	tabMenus: tabMenus,
	tabContents: tabContents,
	trigger: "mouseover",
	currentClass: "tab-currentMenu2",
	handler: function(index) {
		console.log(index);
		console.log("您激活的是第" + (index + 1) + "个标签");
	},
	autoPlay: true,
	playTime: 500
});