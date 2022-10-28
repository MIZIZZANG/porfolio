$(document).ready(function () {
    $(".content .content-list > ul li").click(function (e) { 
        let i = $(this).index()
        $(".content .content-list > ul li").removeClass("on").eq(i).addClass("on");
        $(".content .content-list .work-content").hide().eq(i).show()
    });
});