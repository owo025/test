$(window).load(function(){
	// var sw=true;
	// $('.m_btn').on('click',function(){
	// 	$('.m_gnb').animate({top:0});
	// 	$('.cover').fadeIn();
	// 	$('.mgnb_x').fadeIn();
	// 	sw=false;
	// });
	// $('.mgnb_x, .cover').on('click',function(){
	// 	$('.m_gnb').animate({top:-1000});
	// 	$('.cover').fadeOut();
	// 	$('.mgnb_x').fadeOut();
	// 	sw=true;
	// });
	// $('.m_gnb .menu li p').mouseenter(function() {
    //     $(this).addClass('activ').siblings().removeClass('activ');
    //     $('.gnb_s_cont ul.ul').eq($(this).index()).addClass('db').siblings().removeClass('db');
    // })
	// var menu= $(".m_gnb>.menu>li>a,.m_gnb>.menu>li>p")
	// menu.click(function(){
	// 	$(this).next().stop().slideToggle().parent().siblings().find("ul").slideUp();
	// });
	// $('.s_btn').on('click',function(){
	// 	$('.s_box').fadeIn();
	// });
	// $('.x_btn').on('click',function(){
	// 	$('.s_box').fadeOut();
	// });
	// $('.faq_tb .q_tr .td1').click(function(){
	// 	var clickIdx = $(this).closest('tr').index();
	// 	$('.faq_tb tr').eq(clickIdx).toggleClass('activ');
	// 	$('.faq_tb tr').eq(clickIdx+1).toggleClass('db');
	// });
	// $('body').on('click', '.idxul1 li', function(){
	// 	$('.map_pop').addClass('db');
	// 	var thisIndex = $(this).index();
	// 	console.log(thisIndex)
	// 	$('.map_cont').eq(thisIndex).addClass('db').siblings().removeClass('db');
	// 	$('.map_cont:eq('+thisIndex+') iframe').empty();
	// 	$('.map_cont:eq('+thisIndex+')').find('.map_api_box').append("<iframe src='http://orangeshop12.cafe24.com/map.php?uid="+(thisIndex+2)+"' width='290' height='171' frameborder='0' scrolling='no' scroll='no' class='asdf'></iframe>")
	// })
	// $('body').on('click', '.pop_c_btn', function(){
	// 	$('.map_pop').removeClass('db');
	// 	$(this).closest('.map_cont').find('.map_api_box iframe').remove();
	// })
	// $("td.cb .class_pop").click(function () {
	// 	$(".help_wrap").toggle();
	// });
	// $('.help_wrap .tit1 .x_btn2').click(function () {
	// 	$(".help_wrap").hide();
	// });

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
	$('.pd_bxs_wrap ul').bxSlider({
	   auto: true,
	   pager: true
   });

})
