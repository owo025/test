/* 2016.08.25
// 인데이
// jin
*/

$(window).load(function(){
	var sw=true;
	$('.m_btn').on('click',function(){
		$('.menu_wrap2').show();
		$('.m_gnb').show();
		$('.cover').show();
		$('.mgnb_x').show();
		sw=false;
	});
	$('.mgnb_x, .cover').on('click',function(){
		$('.menu_wrap2').hide();
		$('.m_gnb').hide();
		$('.cover').hide();
		$('.mgnb_x').hide();
		sw=true;
	});
	$('.img_label').click(function(){
		if($(this).hasClass('disable_check')){
			$(this).removeClass('activ');
		}else{
			$(this).toggleClass('activ');
		}
	})
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
	$('.pun').click(function(){
		if($(this).hasClass('disable_check')){
			$(this).removeClass('activ');
		}else{
			$(this).toggleClass('activ');
		}
	})
	var menu= $(".m_gnb>.menu>li>a,.m_gnb>.menu>li>p")
	menu.click(function(){
		$(this).next().stop().slideToggle().parent().siblings().find("ul").slideUp();
	});

})
