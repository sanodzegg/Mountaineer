var european = {
    0: {
        name: 'Mount Elbrus',
        height: 5642
    },
    1: {
        name: 'Mont Blanc',
        height: 4810
    },
    2: {
        name: 'Mount Etna',
        height: 3329
    },
    3: {
        name: 'Mulhacén', 
        height: 3479
    },
    4: {
        name: 'Aneto',
        height: 3404
    },
    5: {
        name: 'Mount Ida',
        height: 2456
    }
}
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
    for(let i = 0; i <= getRandom(0, 5); i++) {
        $('.dynamic-points').append(`<div class="pt ${i}"><span class="mount-name">${european[i].name}</span><div class="outer-dot"><div class="dot"></div></div><span class="mount-height">${european[i].height} m</span></div>`).hide().fadeIn("slow");
        console.log(european[i].name);
        let top = getRandom(30, 60);
        let left = getRandom(10, 90);
        $(`.${i}`).css({
            'position' : 'absolute',
            'top' : `${top}%`,
            'left' : `${left}%`,
            'transform' : `translate(-${top}%, -${left}%)`
        });
    }
})

$('li').on('click', function() {
    for(let i = 0; i < $('li').length; i++) {
        $(this).addClass('list-selected')
        for(let e = 0; e < $('li').length; e++) {
            if(i == e) {
                $(this).addClass('list-selected')
            } else {
                $('li').removeAttr('class')
            }
        }
    }
})

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}