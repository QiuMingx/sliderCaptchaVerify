function mockVerify(){
    console.log("mockVerify");

    var btn=document.querySelector('.slider');
    var mousedown = document.createEvent("MouseEvents");
    var rect = btn.getBoundingClientRect();
    var x = rect.x;
    var y = rect.y;
    mousedown.initMouseEvent("mousedown",true,true,window,0,  
            x, y, x, y,false,false,false,false,0,null);
    btn.dispatchEvent(mousedown);
    
    var dx = 0;
    var dy = 0;
    var  interval = setInterval(function(){
        var mousemove = document.createEvent("MouseEvents");
        var _x = x + dx;
        var _y = y + dy;
        mousemove.initMouseEvent("mousemove",true,true,window,0,  
                _x, _y, _x, _y,false,false,false,false,0,null);
        btn.dispatchEvent(mousemove);
        
        btn.dispatchEvent(mousemove);
        if(_x - x >= 300){
            clearInterval(interval);
            var mouseup = document.createEvent("MouseEvents");
            mouseup.initMouseEvent("mouseup",true,true,window,0,  
            _x, _y, _x, _y,false,false,false,false,0,null);
            btn.dispatchEvent(mouseup);
            
            setTimeout(function(){
                if(btn.className.indexOf('btn_ok') > -1){
                    console.log(btn.className);
                    document.getElementById("verify").click();
                    
                }
            }, 1000);
        }
        else{
            dx += Math.ceil(Math.random() * 50);
            console.log(dx);
        }
    }, 30);  
}
