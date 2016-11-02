;(function(w,d) {
	var myScroll,pullDown,pullDownH,pullUp,pullUpH,newsList;
	
	
	
	
	
	document.addEventListener('toumove',function(e) {
		e.preventDefault();
	},false);
	
	// load,DOMContentLoaded => $(docudent).ready()
	document.addEventListener('DOMContentLoaded',loaded,false)
	
	//下拉刷新请求数据
	function pullDownFn() {
		var newsList=$('#news-lists');
		$.getJSON('test.json',function(data) {
		    if(data && data.state==1) {
			  //  console.log(data);
			  setTimeout(function() {
			  	 newsList.prepend(data.data);
			  	 myScroll.refresh();
			  },1000);
				
			} 
		
		});
	
	
	}
	
	//上拉刷新请求数据
	function pullUpFn() {
		var newsList=$('#news-lists');
		$.getJSON('test.json',function(data) {
		    if(data && data.state==1) {
			  //  console.log(data);
			  setTimeout(function() {
			  	 newsList.append(data.data);
			  	 myScroll.refresh();
			  },1000);
				
			} 
		
		});
	
	
	}
	
	function loaded() {	
		pullDown=document.getElementById('pullDown');
		pullUp=document.getElementById('pullUp');
		pullDownH=pullDown.offsetHeight;
		
		
		myScroll=new iScroll("wrapper",{
			vScrollbar:true,
			topOffset:pullDownH,
			onRefresh:function() {
				if(pullDown.className.match("load")) {
					pullDown.className="";
					pullDown.querySelector('.pullDownLabel').innerHTML="下拉刷新....";
				
				}
				
				if(pullUp.className.match("load")) {
					pullUp.className="";
					pullUp.querySelector('.pullUpLabel').innerHTML="上拉加载更多....";
				
				}
			},
			onScrollMove:function() {
				//console.log(this.y);
				if(this.y>10 && !pullDown.className.match("flip")) {
					pullDown.className="flip";
					pullDown.querySelector('.pullDownLabel').innerHTML="松开手开始刷新....";
				}else if(this.y<this.maxScrollY-10 && !pullUp.className.match("flip")) {
					//alert('bottom');
					pullUp.className="flip";
					pullUp.querySelector('.pullUpLabel').innerHTML="松开手开始刷新....";
					
				
				}
				
				this.minScrollY=0;
			
			},
			onScrollEnd:function() {
				//alert(this.maxScrollY)
				if(pullDown.className.match("flip")) {
				      pullDown.className="load";
					  pullDown.querySelector('.pullDownLabel').innerHTML="正在加载中....";
					  pullDownFn();
				}else if(pullUp.className.match("flip")) {
					
					  pullUp.className="load";
					  pullUp.querySelector('.pullUpLabel').innerHTML="正在加载中....";
				     pullUpFn();
				
				}
			
			}
		
		});
		
		
	}

})(window,document);