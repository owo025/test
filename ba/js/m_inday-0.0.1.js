/* 2016.08.25
// 인데이
// jin
*/

$(window).load(function(){
	$('.ba_bxs').bxSlider({
		mode: 'horizontal',
		auto: true,
		pager: false,
		pager:true,
		autoControls: true
	});
	var sw=true;
	$('.m_btn').on('click',function(){
		if(sw==true){
			$('.m_gnb').animate({left:0});
			$('.cover').fadeIn();
		sw=false;
		}else{
			$('.m_gnb').animate({left:-200});
			$('.cover').fadeOut();
		sw=true;
		}
	});
	$('.gnb_close, .cover').on('click',function(){
		$('.m_gnb').animate({left:-200});
		$('.cover').fadeOut();
	});
	var menu= $(".m_gnb>.menu>li>a")
	menu.click(function(){
		$(this).next().stop().slideToggle().parent().siblings().find("ul").slideUp();
	});
});
