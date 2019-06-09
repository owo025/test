// js
// 20170124
// inday jin

$(window).load(function() {
    $('.pip_bxs').bxSlider({
		  mode: 'horizontal',
		  auto: true,
		  pager:true,
	});
    $(".bg56b, .menu,.gnbsub2").mouseenter(function() {
    	$('.gnbsub2').show();
    });
	$(".bg56b, .menu,.gnbsub2").mouseleave(function() {
        $('.gnbsub2').hide();
    });
});
