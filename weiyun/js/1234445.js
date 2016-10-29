/*
//鼠标右键
tools.addEvent(document,'contextmenu',function(ev){

    ev.preventDefault();
    if(mask.style.display === 'block') return;
    var target = ev.target;
    target = tools.parents(target,".list") 
   // target = tools.parents(target,".list");
    if(ev.button !== 2) return;

    if(selectRight.length <= 1){
        ////只有在文件夹上点击的时候才可以出现右键菜单

        if( target ){
            //显示自定义菜单
            menu.style.display = 'block';
            //给自定义菜单定位
            menu.style.left = ev.clientX + 'px';
            menu.style.top = ev.clientY + 'px';

            for(var i = 0; i < allList.length; i++){
                tools.removeClass(allList[i],'active');
                allList[i].firstElementChild.style.opacity = 0;
                tools.removeClass(allList[i].firstElementChild,'conCheckbox');
            }

            tools.addClass(target,"active");
            target.firstElementChild.style.opacity = 1;
            tools.addClass(target.firstElementChild,"conCheckbox");
        }
    }else if(selectRight.length === checkboxs.length){
        menu.style.display = 'block';
        //给自定义菜单定位
        menu.style.left = ev.clientX + 'px';
        menu.style.top = ev.clientY + 'px';
    }else{      
        //选中几个文件的时候,判断当前点击的文件是否选中,
        //如果当前选中,在自己身上右键的时候,显示右键,
        //不在自己身上右键的时候,清空所有的,只在当前点击的自己身上勾选上
        var targetBox = target.firstElementChild;
        //当前点击的元素的身上有勾选框
        if( tools.hasClass(targetBox,"conCheckbox") ){
            //////当前加上class
            tools.addClass(target,"active");
            target.firstElementChild.style.opacity = 1;
            tools.addClass(target.firstElementChild,"conCheckbox");

        }else {     //当前点击的元素的身上没有勾选框
            //清空所有的
            for(var i = 0; i < allList.length; i++){
                tools.removeClass(allList[i],'active');
                allList[i].firstElementChild.style.opacity = 0;
                tools.removeClass(allList[i].firstElementChild,'conCheckbox');
            }
            //给自己身上加
            tools.addClass(target,"active");
            target.firstElementChild.style.opacity = 1;
            tools.addClass(target.firstElementChild,"conCheckbox");
        }   

        menu.style.display = 'block';
        //给自定义菜单定位
        menu.style.left = ev.clientX + 'px';
        menu.style.top = ev.clientY + 'px';     
    }
})



tools.addEvent(delectBtn,'mousedown',function(ev){
    ev.stopPropagation();
})

//////右键删除 
tools.addEvent(delectBtn,'mouseup',function(ev){
    delectBtn.onOff = true;
    ev.stopPropagation();

    if(ev.button === 2 ) return;
    alertBox.style.display = mask.style.display ='block';

    alertBox.style.left = (views().W - alertBox.offsetWidth)/2 + "px";
    alertBox.style.top = (views().H - alertBox.offsetHeight)/2 + "px";

    okCancleClose();        //点击确定
    menu.style.display = 'none';
})

//y右键重命名阻止冒泡
tools.addEvent(renameBtn,'mousedown',function(ev){
    ev.stopPropagation();
    if(ev.button === 2 ) return;
});
//右键重命名
tools.addEvent(renameBtn,'mousedown',function(ev){
    ev.stopPropagation();
})
tools.addEvent(renameBtn,'mouseup',reNameFn);

//右键移动到

tools.addEvent(moveBtn,'mousedown',function(ev){
    ev.stopPropagation();
})
tools.addEvent(moveBtn,'mouseup',moveBtnFn)*/
