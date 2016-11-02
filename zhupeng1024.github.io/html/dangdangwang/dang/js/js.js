$(function(){
		var j=0
	function auto(){
		j++;
	if(j>$("#slidcontent>li").length-1){j=0};

	$("#slidcontent>li").eq(j).fadeIn(1000).siblings().fadeOut(1000);
	$("#slide_num li").eq(j).addClass("bg").siblings().removeClass("bg");
	$("#slidepic ul").eq(j).fadeIn(1000).siblings().fadeOut(1000);


	}
	timer=setInterval(auto,2000);


	$("#center1").hover(function(){
		clearInterval(timer);
		$("#btn_lfet").stop().animate({"left":0},500);
		$("#btn_right").stop().animate({"right":0},500);
	},function(){
		timer=setInterval(auto,2000);
		$("#btn_lfet").stop().animate({"left":-35},500);
		$("#btn_right").stop().animate({"right":-35},500);
	});

$("#btn_right").click(function(){

	auto();
});

$("#btn_left").click(function(){
	j--
	if(j<0){j=$("#slidcontent>li").length-1}

	$("#slidcontent>li").eq(j).fadeIn(1000).siblings().fadeOut(1000);
	$("#slide_num li").eq(j).addClass("bg").siblings().removeClass("bg");
	$("#slidepic ul").eq(j).fadeIn(1000).siblings().fadeOut(1000);

})


	$("#slide_num li").mouseover(function(){
		$(this).addClass("bg").siblings().removeClass("bg")
		j=$(this).index()-1;
		auto();
	})



	$("#center2").hover(function(){
		$("#c_left").stop().animate({"left":0},1000);
		$("#c_right").stop().animate({"right":0},1000);
	},function(){
		$("#c_left").stop().animate({"left":-35},1000)
		$("#c_right").stop().animate({"right":-35},1000)
	})


$("#c_right").click(function(){
	auto();
})

$("#c_left").click(function(){
	j--;
	if(j<0)	j=$("#slidcontent>li").length-1

	$("#slidcontent>li").eq(j).fadeIn(1000).siblings().fadeOut(1000);
	$("#slide_num li").eq(j).addClass("bg").siblings().removeClass("bg");
	$("#slidepic ul").eq(j).fadeIn(1000).siblings().fadeOut(1000);
})
	
	$("#list>li").mouseover(function(){
		$(this).addClass("bj").find("ul").show().parent().siblings().
		removeClass("bj").find("ul").hide()
	})

$("#cont_tab ul li").mouseover(function(){
	$(this).addClass("List").find("p").show().parent().siblings().
	removeClass("List").find("p").hide()

})

})