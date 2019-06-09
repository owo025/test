// js
// 20170124
// inday jin

$(window).load(function() {

    $('.qna_tb table tr .td4').click(function(){
		var ntcTridx = $(this).closest('tr').index()+1;
		$(this).toggleClass('activ');
		$(this).closest('table').find('tr').eq(ntcTridx).toggleClass('dtr');
	});
    var menu= $(".p_menu>li")
		menu.click(function(){
		$(this).next().stop().slideToggle().parent().siblings().find("ul").slideUp();
	});
    $(".hd_menu, .gnbsub").mouseenter(function() {
    	$('.gnbsub').show();
    });
	$(".hd_menu, .gnbsub").mouseleave(function() {
        $('.gnbsub').hide();
    });
    $('.color_ulw ul li img').click(function(){
		$('.ptn_top img').attr('src',$(this).attr('data-l'));
		$('.ptn_top img').attr('src',$(this).attr('data-r'));
	})
});
