$(document).ready(function() {
    $('.main-loader').fadeOut("slow");
    $('footer').css("display", "flex").hide().fadeIn("slow");
    let arrofspan = [];
    for(let i = 5; i <= 13; i++) {
        arrofspan.push($('span')[i])
    }
    arrofspan.forEach((e) => {
        $(e).html(getRandom(450, 185))
    })
})

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}