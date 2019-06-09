/* 2016.08.25
// 인데이
// jin
*/

$(window).load(function(){
	var sw=true;
	$('.m_btn').on('click',function(){
		$('.menu_wrap2').fadeIn();
		$('.m_gnb').fadeIn();
		$('.cover').fadeIn();
		$('.mgnb_x').fadeIn();
		sw=false;
	});
	$('.mgnb_x, .cover').on('click',function(){
		$('.menu_wrap2').fadeOut();
		$('.m_gnb').fadeOut();
		$('.cover').fadeOut();
		$('.mgnb_x').fadeOut();
		sw=true;
	});
	$('.m_gnb .menu li p').mouseenter(function() {
        $(this).addClass('activ').siblings().removeClass('activ');
        $('.gnb_s_cont ul.ul').eq($(this).index()).addClass('db').siblings().removeClass('db');
    })
	var menu= $(".m_gnb>.menu>li>a,.m_gnb>.menu>li>p")
	menu.click(function(){
		$(this).next().stop().slideToggle().parent().siblings().find("ul").slideUp();
	});
	$('.tabs2 li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab_container .tab_content').eq($(this).index()).addClass('db').siblings().removeClass('db');
	});
})
