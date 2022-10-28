$(document).ready(function () {
    $(".main .scroll").click(function (e) { 
        e.preventDefault();
            $("html, body").stop().animate({
                scrollTop: 1060
            }, 1000)
    });

    const SwiperTxt = ["딥클린플러스 파워젤", "딥클린플러스 컬러젤","딥클린플러스 라벤더젤", "딥클린플러스 퓨어프레쉬", "딥클린플러스 하이진젤"]

    const swiper = new Swiper(".productSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        watchSlidesProgress: true,
        // mousewheel: true,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev",
            clickable: true,
        },
        breakpoints:{
            640:{freeMode: false, slidesPreView: 1},
            1024:{slidesPreView: 3},
            1400:{slidesPreView: 3}
        },
        // 반응형

        on: {
            slideChange: function () {
                $(".slide-title-text").text(SwiperTxt[this.realIndex])
            }
        }
    });

    const SwiperTxt2 = ["색깔있는 빨래를 세탁하는 방법", "아기 옷을 세탁하는 방법", "청바지를 세탁하는 방법", "스포츠웨어를 세탁하는 방법"]
    const swiper2 = new Swiper(".tipsSwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction"
        },
        navigation: {
            nextEl: ".swiper2 .swiper-button-next",
            prevEl: ".swiper2 .swiper-button-prev",
        },

        on: {
            slideChange: function () {
                $(".slide-title-text2").text(SwiperTxt2[this.realIndex])
            }
        }
    });

});