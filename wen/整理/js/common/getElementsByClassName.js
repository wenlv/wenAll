//第一个参数str是class名；第二个参数是父容器，缺省为body；第三个参数是dom节点的标签名
function getElementsByClassName(str,root,tag){
	if(root){
		root=typeof root=="string" ? document.getElementById(root) : root;
	}else{
		root=document.body;
	};
	tag=tag || "*";
	var els=root.getElementsByTagName(tag),arr=[];
	for(var i=0;i<els.length;i++){
		for(var j=0;k=els[i].className.split(" "),j<k.length;j++){
			if(k[j]==str){
				arr.push(els[i]);
				break;
			}
		}
	}
	return arr;
}
//============================使用举例=================================
////使用举例
//<span class="a">1</span>
//<span class="a">2</span>
//<p class="a">3</p>
//<div class="b">4</div>
//<strong class="b">5</strong>
//<div class="wrapper">
//	<strong class="b">6</strong>
//</div>
//var aels=getElementsByClassName("a"),
//  bels=getElementsByClassName("b",wrapper),
//  cels=getElementsByClassName("a",null,"strong");
//alert(aelse.length); //3   (1,2,3)
//alert(belse.length); //1  (6)
//alert(celse.length); //2  (5,6)
//====================================================