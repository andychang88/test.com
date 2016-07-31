$(document).ready(function(){
 $('.huobi_a').click(function(){
    $(".one_alert").show();

});
 $('.win-close').click(function(){
    $(".one_alert").hide();

});
$('.nav li').hover(function(){
		var index = $(this).index();

		 $(".menu_yin_main").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
	$('.menu').mouseleave(function(){
		

		 $(".menu_yin_main").hide();
	});

$('.index_4_t a').click(function(){
		var index = $(this).index();
		 $(this).addClass('ahover').siblings().removeClass('ahover');
		  $(this).parent(".index_4").find(".index_4_b_main").eq(index).show().addClass('active').siblings().removeClass('active').hide();
	});
});