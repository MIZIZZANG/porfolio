$(document).ready(function () {

    Array.prototype.shuffle = function(){
        return this.concat().sort(
            function(){return Math.random() - Math.random();}
        );
    }

    var nums = [0,1,2,3,4];
    var arr = nums.shuffle();
    console.log(arr)

    function skill(id, per, list){
        const colors = ["#00ACD5", "#E76900", "#FCAF17", "#00AE4D", "#5B57A6"];
        // let index = Math.floor(Math.random() * colors.length);
        let newColor = []
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 3,
            trailWidth: 3,
            color: colors[list], 
            // "#E76900",
            duration: 1400,
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        })
        bar.animate(per)
    }

    let chk =false;
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        // console.log($(".profile-skill").offset().top)
        if(pos > $(".about-content").offset().top){
        if(chk == true)return;
        skill("#ps", 0.9, arr[0])
        skill("#ai", 0.8, arr[1])
        skill("#html", 0.9, arr[2])
        skill("#css", 0.8, arr[3])
        skill("#js", 0.7,arr[4])
        chk = true;
        }
    })
});