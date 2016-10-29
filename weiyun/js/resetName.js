/**
 * Created by TF on 2016/9/1.
 */
/*--------------封装重命名的函数---------------*/
function resetName() {
    var select = whoSelect();
    if(select.length != 1 ){
        tools.addClass(tip,"tipBg");	//给tip添加class,改变背景图位置
        tip.innerHTML = "请选择文件";			//改变显示的文字
        //获取到当前要删除文件的id
        run(tip);		//运动
    }else{



        var resetName_userId = select[0].dataset.userId;        //获取到当前选中元素的id
        var textBox = select[0].lastElementChild;               //获取到当前点击的最后一个元素节点
        var titles = select[0].lastElementChild.firstElementChild.title;//获取左后一个节点的第一个元素的title
        textBox.innerHTML = '<input type="text" value="'+titles+'">';   //改变它的页面结构,显示输入框
        select[0].lastElementChild.firstElementChild.select();      //给输入框的内容全部选中状态


        var titleText = $('input',textBox)[0];



        //循环数据中所有的项数,如果我的值发生改变的时候,找到选中的元素身上的id,
        titleText.onchange = function () {
            var titleTextCont = this.value;
            console.log(titleTextCont);
            for(var i = 0; i < data.files.length; i++){
                console.log(!data.files[i] &&  data.files[i].id == resetName_userId )
                if( data.files[i].id == resetName_userId ){
                    data.files[i].title = titleTextCont;
                }
            }
            console.log(data.files);
        }


        resetname.statues = false;
    }
    resetname.removeEventListener("click", resetName,false);
}





///////////////////重命名功能///////////////////

resetname.statues = true;
resetname.addEventListener('mousedown',function (ev) {
    ev.stopPropagation();
    resetname.addEventListener('click',resetName,false);
},false);