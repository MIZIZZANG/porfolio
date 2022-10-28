$(document).ready(function () {
    function skill(id, per){
        const colors = ["#00ACD5", "#E76900", "#FCAF17", "#00AE4D", "#5B57A6"];
        let index = Math.floor(Math.random() * colors.length);
        const randomColor = colors[index];
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 3,
            trailWidth: 3,
            color: randomColor, 
            // "#E76900",
            duration: 1400,
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        })
        $(window).scroll(function(){
            let pos = $(window).scrollTop();
            if (pos >= 2111) {
                $(bar.animate(per)).show()
            } else {
                $(bar.animate(per)).hide()
            }
        })
        // bar.animate(per)
        console.log($(".about .about-content .progress-area").offset().top)
    }

    skill("#ps", 0.9)
    skill("#ai", 0.8)
    skill("#html", 0.9)
    skill("#css", 0.8)
    skill("#js", 0.7)
});