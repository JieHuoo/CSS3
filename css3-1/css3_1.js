window.onload = function() {
    var title = document.getElementById("title");
    var change = document.getElementById("change");
    var underline = document.getElementsByTagName("hr")[0];
    var display = false;
    change.onclick = function() {
        display = !display;
        //点击按钮时的字体变化
        title.style.color = display? "blue" : "#000";    
        //点击按钮时下划线宽度位置变化
        underline.style.width = display? "100%" : "0";    
        underline.style.left = display? "0" : "50%";
    };
}
