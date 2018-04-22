$(document).ready(function(){
	$(window).scroll(function() {
		var top = $(".jumbotron").offset().top; //获取指定位置
		var scrollTop = $(window).scrollTop();  //获取当前滑动位置
		if(scrollTop > top){                 //滑动到该位置时执行代码
			$(".navbar").removeClass("transparent");
			$(".navbar").addClass("blur");
			$("#backtotop").removeClass("hide");
			$("#dashboard").removeClass("hide");
		}else{
			$(".navbar").addClass("transparent");
			$(".navbar").removeClass("blur");
			$("#backtotop").addClass("hide");
			$("#dashboard").addClass("hide");
		}
	});
});
function backtop(){$("body").animate({scrollTop:0})}
