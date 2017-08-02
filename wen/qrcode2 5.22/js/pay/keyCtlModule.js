(function(){
	angular.module("keyCtlModule",[])
		.service("keyService",[
			"$http","HOSTURL",
            function($http,HOSTURL){
	            this.getKey = function(input,keyNumber,key,options){
					var body = document.getElementsByTagName('body')[0];
					var DIV_ID = options && options.divId || '__w_l_h_v_c_z_e_r_o_divid';

					if(document.getElementById(DIV_ID)){
						body.removeChild(document.getElementById(DIV_ID));
					}
					
					this.input = input;
					this.el = document.createElement('div');
					
					var self = this;
					var zIndex = options && options.zIndex || 1000;
					var width = options && options.width || '100%';
					var height = options && options.height || '330px';
					var fontSize = options && options.fontSize || '15px';
					var backgroundColor = options && options.backgroundColor || '#fff';
					var TABLE_ID = options && options.table_id || 'table_0909099';
					var mobile = typeof orientation !== 'undefined';
					
					this.el.id = DIV_ID;
					this.el.style.position = 'absolute';
					this.el.style.left = 0;
					this.el.style.right = 0;
					this.el.style.bottom = 0;
					this.el.style.zIndex = zIndex;
					this.el.style.width = width;
					this.el.style.height = height;
					this.el.style.backgroundColor = backgroundColor;
					
					//样式
					var cssStr = '<style type="text/css">';
					cssStr += '#' + TABLE_ID + '{text-align:center;width:100%;border-top:1px solid #CECDCE;background-color:#FFF;}';
					cssStr += '#' + TABLE_ID + ' td{width:33%;line-height:64px;font-size:25px;border:1px solid #ddd;border-right:0;border-top:0;}';
					//手机样式
					//if(!mobile){
						cssStr += '#' + TABLE_ID + ' td:hover{background-color:#1FB9FF;color:#FFF;}';
					//}
					cssStr += '</style>';
					
					//Button
					var btnStr = '<div style="width:125px;height:67px;background-color:#1FB9FF;';
					btnStr += 'float:right;text-align:center;color:#fff;';
					btnStr += 'line-height:67px;cursor:pointer;font-size:20px" >删除</div>';
					
					//table
					var tableStr = '<table id="' + TABLE_ID + '" border="0" cellspacing="0" cellpadding="0">';
						tableStr += '<tr><td >1</td><td >2</td><td >3</td></tr>';
						tableStr += '<tr><td>4</td><td>5</td><td>6</td></tr>';
						tableStr += '<tr><td>7</td><td>8</td><td>9</td></tr>';
						tableStr += '<tr><td style="line-height:20px;" id="dotted">.</td><td>0</td>';
						tableStr += '<td style="background-color:#D3D9DF;font-size:20px;">完成</td></tr>';
						tableStr += '</table>';
					this.el.innerHTML = cssStr + btnStr + tableStr;
					
					function addEvent(e){
						var ev = e || window.event;
						var clickEl = ev.element || ev.target;
						var value = clickEl.textContent || clickEl.innerText;
						if(clickEl.tagName.toLocaleLowerCase() === 'td' && value !== "完成"){
							var money=document.querySelector(".pay-content-money");
							if(self.input){
								keyNumber+=value;
								String(keyNumber);
								 var regStrs = [  
							        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0  
							        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点  
							        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点  
							        ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上  
							    ];  
							      for(i=0; i<regStrs.length; i++){  
							        var reg = new RegExp(regStrs[i][0]);  
							        keyNumber= keyNumber.replace(reg, regStrs[i][1]);  
							    }  
								self.input.value += value;
								key(keyNumber);
							}
						}else if(clickEl.tagName.toLocaleLowerCase() === 'td' && value === "完成"){
							body.removeChild(self.el);
					}else if(clickEl.tagName.toLocaleLowerCase() === 'div' && value === "删除" ){
							
							var num = keyNumber;
							if(num){
								var num=num.replace(/^\./g, "");//验证第一个字符是数字而不是.
								 var regStrs = [  
							        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0  
							        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点  
							        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点  
							        ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上  
							    ];  
							      for(i=0; i<regStrs.length; i++){  
							        var reg = new RegExp(regStrs[i][0]);  
							        num= num.replace(reg, regStrs[i][1]);  
							    }  
								var newNum = num.substr(0, num.length - 1);
								keyNumber = newNum;
								key(keyNumber);
							}
						}
						
						if(clickEl.tagName.toLocaleLowerCase() === 'td' && value === "." ){
							var dotted = keyNumber;
							//输入金额时对金额进行处理
							if(dotted){
								var dotted=dotted.replace(/^\./g, "");//验证第一个字符是数字而不是.
								 var regStrs = [  
							        ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0  
							        ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点  
							        ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点  
							        ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上  
							    ];  
							      for(i=0; i<regStrs.length; i++){  
							        var reg = new RegExp(regStrs[i][0]);  
							        dotted= dotted.replace(reg, regStrs[i][1]);  
							    }  
								 keyNumber=dotted ;
								 key(keyNumber)
							}else{
							
							}
						}	
					}
					
						
					if(mobile){
						this.el.ontouchstart = addEvent;
					}else{
						this.el.onclick = addEvent;
					}
					body.appendChild(this.el);
				}
	           
        }])
})()
