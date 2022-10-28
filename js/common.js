$("document").ready(function(){
    $(".m-btn, .window").click(function(){
        if(!$(".window-content").is(":visible")){
            $(".m-btn").toggleClass("on")
            $(".m-nav").toggleClass("on")
            $(".window").fadeToggle()   
        }
    })

    $("html *").attr("data-dark", "false");


    $(".window, .window-content i").click(function (e) { 
        $(".window").fadeOut()
        $(".window-content").slideUp()
        $("html, body").css("overflow", "visible")
    });

    let close = parseInt($(".window-content i").css("top"))

    $(".window-content").scroll(function () { 
        
        $(".window-content i").css("top", close+$(".window-content").scrollTop()+"px")
        // 스크롤 해도 .window-content i 상단에 고정
    });

    const dark_mode = localStorage.getItem("dark_mode");
    console.log(dark_mode)

    if(!dark_mode){
        $("html *").attr("data-dark", "false");
        $(".header .etc ul li i").eq(0).removeClass("fa-moon").addClass("fa-sun");
        $(".dark-btn i").eq(0).removeClass("fa-moon").addClass("fa-sun");
        $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk.png")
    }else{
        $("html *").attr("data-dark", "true");
        $(".header .etc ul li i").eq(0).removeClass("fa-sun").addClass("fa-moon");
        $(".dark-btn i").eq(0).removeClass("fa-sun").addClass("fa-moon");
        $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk-dark.png")
    }

    $(".header .etc ul li").eq(0).click(function(){
        
         if($("html *").attr("data-dark") == "true"){
            $("html *").attr("data-dark", "false");
            localStorage.removeItem("dark_mode")
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk.png")
        }else{
            localStorage.setItem("dark_mode", "fa-moon")
            $("html *").attr("data-dark", "true");
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk-dark.png")
        }
        $(this).find("i").toggleClass("fa-moon fa-sun")
        $(".dark-btn i").toggleClass("fa-moon fa-sun")

    })
    $(".dark-btn").click(function(){
        
         if($("html *").attr("data-dark") == "true"){
            $("html *").attr("data-dark", "false");
            localStorage.removeItem("dark_mode")
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk.png")
        }else{
            $("html *").attr("data-dark", "true");
            localStorage.setItem("dark_mode", "fa-moon")
            $(".contact-content .sns ul li").eq(4).find("img").attr("src","images/talk-dark.png")
        }
        $(this).find("i").toggleClass("fa-moon fa-sun")
        $(".header .etc ul li i").eq(0).toggleClass("fa-moon fa-sun")
    })

})