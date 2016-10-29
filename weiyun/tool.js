/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-20 10:46:56
 * @version $Id$
 */


 /*------------获取id,class,tagName-----------------*/
function $(selector,content){
	var firstChar = selector.charAt(0);
	content = content || document;
	if( firstChar === '#' ){
		return document.getElementById(selector.slice(1));
	}else if(  firstChar === '.'  ){							// 通过 class  来获取 元素
		var allElement = document.getElementsByTagName('*');   	//首先获取所有元素
		var arr =[];											// 定义一个数组 用来储存获取到的 元素
		for( var i = 0; i < allElement.length ; i++ ){          
			 var classname = allElement[i].className;           //循环所有的元素 并获取其的className
			 var classArr = classname.split(' ');				// 把该元素的 className 解析为数组 用空格分开
			 for( var j = 0; j < classArr.length ; j++ ){       // 循环该元素的className 每一项 如果有一项与传入的 selector.slice(1) 相同 
			 	if( classArr[j] == selector.slice(1) ){			// 则表示该元素 有其 class 并把它放入 数组( arr ) 中 
			 		arr.push( allElement[i] );          
			 		break;                                      // 同事停止该循环
			 	}
			 }
		};
		return arr;                                             //最后输出 该数组中的所有 元素;
	}else{
		return content.getElementsByTagName(selector);
	}
}


/*----------------获取可视区的宽高------------------*/
function view(){
	return {
		W: document.documentElement.clientWidth,
		H: document.documentElement.clientHeight
	}
}

/*----------------获取指定元素的所有尺寸------------*/
/*返回值为对象*/
/*比如要获取box的right值,getRect(box).right*/
/*使用时通常是将这个函数的返回值给了一个声明好的变量*/
function getRect(obj){
	return obj.getBoundingClientRect();
}





function shake(obj,attr,speed,callBack){                           //抖动
	if(obj.timer2) return;   // 如果定时器还在运行则不执行函数
	var n = 0;				// 变量 n 用来控制数组的第 n 项
	var arr = [];			// 生成空的数组用来储存 设置的抖动范围
	for( var i = speed; i>0 ; i -= 3){
		arr.push(-i,i)         
	}
	arr.push(0);            //循环生成数组内容 并在数组的最后一个值加入 0 时期在最后回到初始位置
	var num = parseFloat(getStyle(obj,attr));  //获取 obj[attr] 的值
	obj.timer2 = setInterval(function(){        //生成定时器
		obj.style[attr] = num + arr[n] + 'px'; //把数组的 第n个值 赋给 obj[attr]
		n++;									// 增加n 值 为下次获取 数组的下一个值
		if( n > arr.length-1 ){           
			clearInterval( obj.timer2 );         //如果循环到数组的最后一个值 则停止定时器 并清空 obj.timer 的值
			obj.timer2 = null;
			if( typeof callBack === 'function' ){
				callBack();
			};
		}
	},30)
};




