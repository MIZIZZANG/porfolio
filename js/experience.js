$(document).ready(function () {
    $(window).scroll(function () { 
        AOS.init()
    });
    var swiper = new Swiper(".mySwiper", {
    loop: true,
    mousewheel: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    });
});