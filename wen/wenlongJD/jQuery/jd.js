// ////////////////////////导航开始
// 地址开始
$('navleft p').mouseenter(function(){
	$(this).css({
		'background':'#FFFFFF',
		'border-bottom':'0px'
	}).next('ul').css({
		'display':'block',
		'border':'1px solid #ccc',
		'border-top':'0px'
	})
	
}).mouseleave(function(){
	$(this).next('ul').css({
		'diaplay':'none'
	})
});

var arr=['北京','上海', '天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','港澳','台湾','钓鱼岛','海外']
$.each(arr,function(key,value){
	$('<li>').text(value).appendTo($('navleft ul'));
})

$('navleft ul li').mouseenter(function(){
	$(this).css({
		'background':'#F4F4F4',
		'color':'red'
	})
	$('navleft p').css({
		'background':'#fff',
		'color':'#999',
	});
}).mouseleave(function(){
	$(this).css({
		'background':'',
		'color':''
	})
}).mousedown(function(){
	$('navleft p').empty(),
	$(this).css({
		'list-style':'none',
		'color':'#fff',
		'background':'red'
	})
	// $(this).clone().appendTo($('navleft p'))
	$(this).clone().appendTo($('navleft p')).css({
		'background':'',
		'color':'#999',
	});
}).mouseup(function(){
	$('navleft ul').css({
		'display':'none'
	})
})

$('navleft ul').mouseenter(function(){
	$('navleft ul').css({
		'display':"block"
	})
}).mouseleave(function(){
	$('navleft ul').css({
		'display':"none"
	}).siblings('p').css({
		'background':'#E3E4E5'
	})
})
///////////////////////导航我的京东开始
$('.navr >li:nth-of-type(5)').mouseenter(function(){
	$(this).css({
		'background':'#fff',
		'border':'1px solid #999',
		'border-bottom':'0px'
	}).children('ul').addClass('active')

}).mouseleave(function(){
	$(this).css({
		'background':'',
		'border':'0px'
	}).children('ul').removeClass('active')
})
// ///////////////////////导航客服服务开始
$('.navr >li:nth-of-type(2)').mouseenter(function(){
	$(this).css({
		'background':'#fff',
		'border':'1px solid #999',
		'border-bottom':'0px'
	}).children('ul').addClass('active')

}).mouseleave(function(){
	$(this).css({
		'background':'',
		'border':'0px'
	}).children('ul').removeClass('active')

})
// ///////////////////////网站导航开始
$('.navr >li:nth-of-type(1)').mouseenter(function(){
	$(this).css({
		'background':'#fff',
		'border':'1px solid #999',
		'border-bottom':'0px'
	}).children('ul').addClass('active')

}).mouseleave(function(){
	$(this).css({
		'background':'',
		'border':'0px'
	}).children('ul').removeClass('active')

})
// ///////////////////////logo开始////////////////////////////////
	

// ///////////搜索框获取焦点开始
$('.seach .inp input').focus(function(){
	this.placeholder='平板二合一'
	$('.seach .inp input').attr('placeholder');	
}).blur(function(){
	$(this).removeAttr('placeholder')
})
// ///////////////////////首焦左边栏hover
$('.focusmain >.focusleft >li').mouseenter(function(){
	$(this).children('.lefts').toggleClass('active')
}).mouseleave(function(){
	$(this).children('.lefts').removeClass('active')
})
// /////////////首焦轮播滚动轮播开始////////////////////
var i=1;
// var f='';
var timer=setInterval(playing,1000);
function playing(){
	if(i>7){
		i=0;
	}
	imgRun(i);
	spanRun(i);
	i++;
}
function imgRun(m){
	$('.focuscenter .lunbo .imglist a').eq(m).children('img').fadeIn();
	$('.focuscenter .lunbo .imglist a').eq(m).siblings('a').children('img').fadeOut();
}
function spanRun(m){
	$('.focuscenter .lunbo .spanlist span').eq(m).addClass('active').siblings().removeClass('active');
}
 // 给lunbo绑定点击事件
 $('.focuscenter .lunbo').mouseenter(function(){
 	clearInterval(timer);

 	//给span绑定点击事件
 	$('.focuscenter .lunbo .spanlist span').mouseenter(function(){
 		// console.log(this)
 		imgRun($(this).index());
 		spanRun($(this).index());
 		// console.log($(this).index());
 		// $index=$(this).index();
 		// console.log("小标",$index);
 		// $('.focuscenter .lunbo .spanlist span').eq($(this).index()).addClass('active').siblings().removeClass('active');
 		// // $('.focuscenter .lunbo .spanlist img').eq($(this).index()).addClass('active').siblings().removeClass('active');
 		// $('.focuscenter .lunbo .imglist img').eq($index).fadeIn().siblings().fadeOut();

 		i=$(this).index() +1;
 		// f=$(this).index() +1;
 		// console.log(i)
 		// console.log(f)
 	})

 	// //给左耳朵耳朵绑定点击事件
 	// $('.focuscenter .lunbo .leftlun').css({'display':'block'}).mousedown(function(){
 	// 	f-=1;
 	// 	if(f<0){
 	// 		f=7;
 	// 	}
 	// 	console.log('f:'+f);
 	// 	 $('.focuscenter .lunbo .spanlist span').eq(f).addClass('active').siblings().removeClass('active');
 	// 	$('.focuscenter .lunbo .imglist a').eq(f).children('img').fadeIn();
		// $('.focuscenter .lunbo .imglist a').eq(f).siblings('a').children('img').fadeOut();
		// i=f+1;
 	// 	console.log('f+1:'+i)
	 // 	}).mouseenter(function(){
	 // 		$(this).css({'background':'rgb(12,17,17)'})
	 // 	}).mouseleave(function(){
	 // 		$(this).css({'background':'rgba(12,17,17,.2)'})
	 // 	})

 	// //给右耳朵耳朵绑定点击事件
 	// $('.focuscenter .lunbo .rightlun').css({'display':'block'}).mousedown(function(){
 	// 	f+=1;
 	// 	if(f>7){
 	// 		f=0;
 	// 	}
 	// 	// console.log(i);
 	// 	 $('.focuscenter .lunbo .spanlist span').eq(f).addClass('active').siblings().removeClass('active');
 	// 	$('.focuscenter .lunbo .imglist a').eq(f).children('img').fadeIn();
		// $('.focuscenter .lunbo .imglist a').eq(f).siblings('a').children('img').fadeOut();
		// i=f+1;
	 // 	}).mouseenter(function(){
	 // 		$(this).css({'background':'rgb(12,17,17)'})
	 // 	}).mouseleave(function(){
	 // 		$(this).css({'background':'rgba(12,17,17,.2)'})
	 // 	})
 }).mouseleave(function(){
 	timer=setInterval(playing,1000);
 	// $('.focuscenter .lunbo .leftlun').css({'display':'none'});
 	// $('.focuscenter .lunbo .rightlun').css({'display':'none'});

 })
 // ///////////首焦右侧news开始///////
 $('.focusright .news .newhd div:not(:last-child) ').mouseenter(function(){
 	$('.focusright .newcont div').removeClass('active');
 	$('.focusright .news .newhd div span').removeClass('active');
 	$('.focusright .newcont div').eq($(this).index()).toggleClass('active');
 	 $('.focusright .news .newhd div span').eq($(this).index()).addClass('active');
 })
 // /////////////首焦右侧功能项 话费滑过时状态开始////////////
 $('.xuan >li:first-child').mouseenter(function(){
 	// 滑过的时候让其他的两行元素消失
 	$('.xuan >li:nth-of-type(4)').nextAll().children('a').addClass('active');
 	// 滑过第一行的span图标消失
 	$('.xuan >li:first-child >a:first-of-type span').addClass('active').parent().css({'color':'red'});
 	// 当话费或是机票滑过的时候让其他的 span消失
 	$('.xuan >li:nth-of-type(1)').nextUntil('3').find('span').addClass('active');
 	// 滑过span横条出现
 	$('.xuan >li:first-child > span:first-child').addClass('active');
 	// 滑过出现下拉框
 	$('.xuan >li:first-child > .phone').addClass('active');
 	// 下拉框关闭
 	$('.xuan >li >.phone> div:first-child  span').click(function(){
 		// 点击下拉框消失
 		$('.xuan >li:first-child > .phone').removeClass('active');
 		// 滑过的时候让其他的两行元素出现
	 	$('.xuan >li:nth-of-type(4)').nextAll().children('a').removeClass('active');
	 	// 滑过第一行的span图标出现
	 	$('.xuan >li:first-child >a:first-of-type span').removeClass('active').parent().css({'color':''});
	 	// 当话费或是机票滑过的时候让其他的 span出现
	 	$('.xuan >li:nth-of-type(1)').nextUntil('3').find('span').removeClass('active');
	 	// 滑过span横条消失
	 	$('.xuan >li:first-child > span:first-child').removeClass('active');

	 })
 	// ///////////////////input获取焦点时变化
	$('.xuan >li >.phone >div div input').focus(function(){
			$(this).attr('placeholder', "")
		}).blur(function(){
			var place=$(this).attr('place');
			console.log($(this).attr('placeholder',place))
		})
 }).mouseleave(function(){
 	// 模拟一次点击关闭下拉框
 	$('.xuan >li >.phone> div:first-child  span').trigger('click');
 })
// ///////////////////获取select放入p元素中

$('.xuan >li >.phone >.huafei div select').change(function(){
	var n=Number($(this).val());
	$('.xuan >li >.phone >.huafei div p').empty();
	var minaz=[];
		minaz[0]=['￥9.8-￥11.0']
		minaz[1]=['￥19.6-￥21.0'];
		minaz[2]=['￥29.4-￥31.0'];
		minaz[3]=['￥49.0-￥50.0'];
		minaz[4]=['￥98.0-￥100.0'];
		minaz[5]=['￥196.0-￥200.0'];
		minaz[6]=['￥294.0-￥300.0'];
		minaz[7]=['￥490.0-￥500.0'];
		
	$.each(minaz[$(this).val()],function(key,value){
		console.log($('<span>').text(value))
		$('<p>').text(value).appendTo($('.xuan >li >.phone >.huafei div p'));
	})
})
// //////////////话费 流量 套餐切换/////////////
$('.xuan >li >.phone ul li:first-child').mouseenter(function(){
	$('.xuan >li >.phone .huafei').addClass('active').siblings().removeClass('active');
})
$('.xuan >li >.phone >ul >li:nth-child(2)').mouseenter(function(){
	$('.xuan >li >.phone .liuliang').addClass('active').siblings().removeClass('active');
})
$('.xuan >li >.phone >ul >li:nth-child(3)').mouseenter(function(){
	$('.xuan >li >.phone .taocan').addClass('active').siblings().removeClass('active');
})
// /////////////////////////////////////////////////
// /////////////////京东秒杀倒计时开始/////////////////////
var n=7810000;
daoshu();
function daoshu(){


var myTime=new Date(n);
// console.log(myTime);
var h=myTime.getHours();
h=h<10?'0'+h:h;
// console.log(h);
var m=myTime.getMinutes();
m=m<10?'0'+m:m;
// console.log(m);
var s=myTime.getSeconds();
s=s<10?'0'+s:s;
// console.log(s);
var hourTime=document.getElementById('hour');
var minTime=document.getElementById('minute');
var secTime=document.getElementById('sec');
	hourTime.innerHTML=h;
	minTime.innerHTML=m;
	secTime.innerHTML=s;
n-=1000;
}
setInterval(daoshu,1000)

// //////////秒杀图片滑过位移///////////
$('.miao >ul li:not(:last-child) a:first-child  img').mouseenter(function(){
	$(this).css({
		'margin-top':'10px'
	})
}).mouseleave(function(){
	$(this).css({
		'margin-top':'15px'
	})
})
// ////////////发现好货开始/////////////////
$('.fa .hao div ul:nth-of-type(2) li a').mouseenter(function(){
	$(this).children('img').css({'margin-left':'0px'})
}).mouseleave(function(){
	$(this).children('img').css({'margin-left':'6px'})
})
$('.fa .pin div ul:nth-of-type(2) li a').mouseenter(function(){
	$(this).children('img').css({'margin-left':'10px'})
}).mouseleave(function(){
	$(this).children('img').css({'margin-left':'20px'})
})
$('.fa .pin div ul:nth-of-type(2) li:last-child a').mouseenter(function(){
	$(this).children('img').css({'margin-left':'0px'})
}).mouseleave(function(){
	$(this).children('img').css({'margin-left':'0px'})
})
// /////////////////排行榜开始////////////
$('.fa .pai div ul:nth-of-type(2) li').mouseenter(function(){
	$(this).children('a').addClass('active');
	$(this).children('span').addClass('active');
	$($('.fa .pai div .men')[$(this).index()]).css({
		'display':'block'
	})
}).mouseleave(function(){
	$(this).children('a').removeClass('active')
	$(this).children('span').removeClass('active')
	$($('.fa .pai div .men')).css({
		'display':'none'
	})
	$($('.fa .pai div .men')[$(this).index()]).css({
		'display':'block'
	})
})
// /////////////领券中心开始
$('.ling ul:not(:first-child)').mouseenter(function(){
	$(this).find('li:last-child img').css({'margin-right':'0px'})
}).mouseleave(function(){
	$(this).find('li:last-child img').css({'margin-right':'13px'})
})

// /////////////享品质开始////////
$('.pinzhi div:last-child >ul a').mouseenter(function(){
	// console.log($(this).children('.pinzhi div:last-child >ul a img'))
	// $($(this).find(' a img')).css({'margin-right':'10px'})
	$(this).children('img').css({'margin-left':'10px'})
}).mouseleave(function(){
	$(this).children('img').css({'margin-left':'0px'})
})

// ///////////////侧边栏导航开始///////////////
//当鼠标滑过侧边楼层出现效果
$(function() {
	//当鼠标滑过侧边楼层出现效果
	$(".side a").hover(
		function(){
			$(this).addClass('active');
		},
		function(){
			$(this).removeClass('active');
		}
	).click(function(){
		// console.log($(this).index());
		// 当点击该楼层时,变色
		changeColor($(this).index());
		// 点击楼层跳转到指定的楼层
		// $(window).scrollTop(getScroll($(this).index()));
		$('body,html').animate({
			'scrollTop':getScroll($(this).index())
		}, 500)
	})

})
// 变色方法
function changeColor(n){
	$('.side a').eq(n).css({
		'background':'red',
		'color':'white'
	}).siblings().css({
		'background':'',
		'color':''
	})
}
// 获取楼层距离顶部的距离
$(function(){
	$(window).scroll(function(){
		//获取当前位置到顶部的距离
		var num = $(this).scrollTop()
		console.log(num)
		// 判断当滚动到某一层时,侧边栏发生改变
		if(num>=6525){
			changeColor(10);
		}else if(num>=6125){
			changeColor(9);
		}else if(num>=5625){
			changeColor(8);
		}else if(num>=5225){
			changeColor(7);
		}else if(num>=4725){
			changeColor(6);
		}else if(num>=4225){
			changeColor(5);
		}else if(num>=3825){
			changeColor(4);
		}else if(num>=3325){
			changeColor(3);
		}else if(num>=2700){
			changeColor(2);
		}else if(num>=2125){
			changeColor(1);
		}else if(num>=1600){
			// 当滑动到第一层时,出现侧边栏
			$('.side').css("display","block");
			changeColor(0);
		}else{
			// 小于第一层则隐藏侧边栏
			$('.side').css("display","none");
		}
		 if(num>=1000){
			$('.headseach').css("display","block");
		}else{
			$('.headseach').css("display","none");
		}

	})
})
// 定义方法,当点击楼层,获得该楼层距离顶部的距离
function getScroll(n){
	switch(n){
		case 0:return 1880;break;
		case 1:return 2480;break;
		case 2:return 3000;break;
		case 3:return 3547;break;
		case 4:return 4047;break;
		case 5:return 4547;break;
		case 6:return 5000;break;
		case 7:return 5500;break;
		case 8:return 5966;break;
		case 9:return 6325;break;
		case 10:return 0;break;
	}
}
// /////////////右侧边栏导航/////////////////
$('.custom >ul >li ').mouseenter(function(){
	if(!$(this).children('.custom >ul >li >a:first-child').is(':animated')){
		$(this).children('.custom >ul >li >a:first-child').animate({'margin-left':'0px'},100)
	}
	
}).mouseleave(function(){
	$(this).children('.custom >ul >li >a:first-child').animate({'margin-left':'69px'},100)
})

	$(this).children('.custom >ul >li >a:last-child').click(function(){
	$('body').animate({
			'scrollTop':'0'
		}, 500)
})