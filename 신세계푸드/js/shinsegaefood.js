$(document).ready(function () {
    
    let page = new fullpage(".fullpage",{
        anchors: ["menu1", "menu2", "menu3", "menu4", "menu5"],
        navigation: true,
        navigationPosition: "left",
        navigationTooltips: ["Main", "Business", "Brand", "Media", "Service"],
        slidesNavigation: true,
        onLeave: function(origin, destination, direction){
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
        },
        afterLoad: function(origin, destination){
            if(destination.index == 0){
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
            }
        },
    })
});