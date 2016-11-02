;(function(w,d){
        var tabpic=document.getElementById('slider_box'),
            slider_ul=document.getElementById('slider_ul'),
            oOl=tabpic.getElementsByTagName('ol')[0],
            num=oOl.getElementsByTagName('li');
        var startTouchx=0,
            index=0,
            startx=0,
            totalx=0;
        var screenWidth=document.documentElement.clientWidth;
        var timer=null;
       // alert(screenWidth);
        /* bindEvent(slider_ul,'touchstart',startFn)
        bindEvent(slider_ul,'touchmove',moveFn)
        bindEvent(slider_ul,'touchend',endFn)*/
        
        slider_ul.addEventListener('touchstart',startFn,false);
        slider_ul.addEventListener('touchmove',moveFn,false);
        slider_ul.addEventListener('touchend',endFn,false);
       
            function startFn(e){
                startTouchx=e.changedTouches[0].pageX;
                //console.log(startTouchx);
                startx=totalx;
            }
            function moveFn(e){
                var dis=e.changedTouches[0].pageX-startTouchx;
                   // console.log(dis);
                totalx=startx+dis;
               // console.log(startx);
                slider_ul.style.webkitTransform="translateX("+totalx+"px)";
            }
            function endFn(e){
                index=totalx/screenWidth;
                index=-Math.round(index);
                if(index<0){
                    index=0; 
                }else if(index>num.length-1){
                   index=num.length-1;
                }
                move();
            }
        
        function move(){
            totalx=-index*screenWidth;
            slider_ul.style.transition="0.6s";
            slider_ul.style.webkitTransform="translateX("+totalx+"px)";
            for(var i=0;i<num.length;i++){
                num[i].className="";
            }
            num[index].className="light";
        }
        function autoPlay(){
            timer=setInterval(function(){
                index++;
                index=index%(num.length);
                move();
            },2000)
        
        }
        autoPlay();
        
       document.addEventListener('touchmove',function(e){
            e.preventDefault;
       },false) 

    })(window,document);