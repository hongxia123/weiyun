
/*8月10号课件*/

var tools = {
	/*--------------获取元素身上的样式-----------------*/
	/*obj指元素,attr是样式*/
	getStyle:function (obj,attr){
		if( obj.currentStyle ){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];s
		}	
	},
	/*--------------判断元素身上是否有class------------*/
	/*element指元素,classNames是元素身上的class*/
	hasClass:function (element,classNames) {
		var classAll = 	element.className.split(" ");  //"blue red"
		for( var i = 0; i < classAll.length; i++ ){
			if( classAll[i] === classNames ){
				return true;
			}
		}
		return false;
	},
	/*---------------移除元素身上的class------------*/
	/*element指元素,classNames是元素身上的class*/
	removeClass:function (element,classNames){
		if( tools.hasClass(element,classNames) ){  //如果有这个class，就删除
			var classAll = element.className.split(" "); // ["blue","red"]
			for( var i = 0; i < classAll.length; i++ ){
				if( classAll[i] === classNames ){
					classAll.splice(i,1);
					i--;
				}
			}
			//如果这个数组为kong，那么就删除标签上的class这个属性
			if( classAll.length === 0 ){
				element.removeAttribute("class");
			}else{
				element.className = classAll.join(" ");
			}
			

		}
	},

	/*---------------给元素添加class--------------*/
	/*判断某个元素身上是否有指定的class
			hasClass(element,classNames)
				参数说明：
					element：   元素            类型：元素对象
					classNames：查找的class名   类型：字符串
				返回值：boolean值
					true：有这个class
					false：没有这个class
*/
	addClass:function (element,classNames){
		var classAll = element.className;  // ""    "blue"
		if( !tools.hasClass(element,classNames) ){
			classAll += " " + classNames;
		}
		element.className = classAll.trim();

	},
	/*-----有指定的class就删除，没有指定的class就添加------*/
	/*toggleClass(element,classNames);
		element：元素
		classNames：指定的class 类型：String

		返回值：boolean值
			true：代表已经添加上了指定的class
			false：代表已经删除了指定的class
*/
	toggleClass:function (element,classNames){
		if( tools.hasClass(element,classNames) ){
			tools.removeClass(element,classNames);
			return false;
		}else{
			tools.addClass(element,classNames);
			return true;
		}	
	}
}