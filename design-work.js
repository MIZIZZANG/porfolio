$(document).ready(function () {
    const work_img_content = [
        "images/상세페이지(한율)최종.jpg",
        "images/돼정담mockup.jpg",
        "images/이벤트페이지(신카)최종.png",
        "images/샴푸패키지디자인mockup.jpg",
    ]

    $(".content .design .work-content img").click(function (e) { 
        // let i = $(this).index();
        let i = $(".content .design .work-content img").index(this)
        $(".window").fadeIn()
        $(".window-content").slideDown()
        $(".window-content img").attr("src", work_img_content[i])
        $("html, body").css("overflow", "hidden")
    });

});