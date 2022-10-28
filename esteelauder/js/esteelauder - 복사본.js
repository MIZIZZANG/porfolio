$(document).ready(function () {
    $(".side").click(function (e) { 
        $("html, body").stop().animate({
            scrollTop: 0
        },1000)
        
    });

    $(".header .nav > ul > li").mouseover(function(){
        let i = $(this).index();
        $(".header .submenu").eq(i).addClass("on")
    }).mouseout(function(){
        $(".header .submenu").removeClass("on")
    })
    $(".header .submenu").mouseover(function(){
        
        $(".header .submenu").addClass("on")
    }).mouseout(function(){
        $(".header .submenu").removeClass("on")
    })

    const swiper = new Swiper(".swiper.banner-slide",{
        autoplay: {
            delay: 3000
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })


    const swiper2 = new Swiper(".swiper.event-slide", {
        autoplay: {
            delay: 3000
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const swiper3 = new Swiper(".swiper.sns-content", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});