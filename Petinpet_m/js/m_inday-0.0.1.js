$(window).load(function(){
	$('.idxbxs').bxSlider({
		auto: true,
		pager:true,
	});
	var sw=true;
	$('.m_btn').on('click',function(){
		if(sw==true){
			$('.m_gnb').animate({left:0});
			$('.cover').fadeIn();
			$('.mgnb_x').fadeIn();
			sw=false;
		}else{
			$('.m_gnb').animate({left:-200});
			$('.cover').fadeOut();
			$('.mgnb_x').fadeOut();
			sw=true;
		}
	});
	$('.mgnb_x, .cover').on('click',function(){
		$('.m_gnb').animate({left:-200});
		$('.cover').fadeOut();
		$('.mgnb_x').fadeOut();
		sw=true;
	});
	var menu= $(".m_gnb>.menu>li>a,.m_gnb>.menu>li>p")
	menu.click(function(){
		$(this).next().stop().slideToggle().parent().siblings().find("ul").slideUp();
	});

});
