// js
// 20170818
// yoon

$(window).load(function() {

    $('.web_bxs,.m_bxs,.r_bxs').bxSlider({
        auto: false,
        pager: true,
        controls:false
    });

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css("color", "#333");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css("color", "gray");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });

    $('.group1').colorbox({rel:'.group1'});
});
