;(function(window){

	window.myajax=function (type,url,data,fn){
		// 1.实例化ajax对象, XMLHttpRequest
		var xhr = new XMLHttpRequest();
		// 2.调用监听方法 onreadystatechange
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					fn(xhr.responseText)
				}
			}
		}
		// 用户传入的data是对象形式的,需要转成 key=value&key=value
		if(data){
			var str = '';
			for(var i in data){
				str+= '&'+i+'='+data[i]
			}
			str = str.slice(1)
		}
		
		if(type=='get'){
			xhr.open(type,url+'?'+str);
			xhr.send();
		}else if(type=='post'){
			xhr.open(type,url);
			// 4.发送 send()，发送的数据要放在小括号中
			// 要求在send前加请求头
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xhr.send(str);
		}
	}
})(window)