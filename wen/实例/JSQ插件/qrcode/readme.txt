官网 
https://larsjung.de/jquery-qrcode/

下载
1.先引入 jquery,引入qrcode文件
	$(selector).qrcode(options);

2.选择元素,引入配置项
	

text: 写入路径 (核心)
	一般使用变量,生成动态二维码
	路径: 字符串(一般不用)
	      网址 如 www.baidu.com (加Http:// 直接跳转)

render 二维码格式: 'canvas', 'image' or 'div'
	默认 canvas

minVersion,maxVersion  最低版本和最高版本'L', 'M', 'Q' or 'H'


left top 相对父div进行偏移


size 二维码的尺寸


注意:获取图片用 jquery 获取,注意下标
fill: 填充  颜色或图片

background 背景  颜色或图片


radius 圆角 0~ 0.5


 quiet: 0 默认值

modes  模式		    

0: normal
1: label strip 横条插入文字
2: label box	方框插入文字
3: image strip	横条插入图片
4: image box	方框插入图片


(一般不调整)
mSize: 0.1,  	中间内容的大小
mPosX: 0.5,	中间内容的左右偏移
mPosY: 0.5,	中间内容的上下偏移
