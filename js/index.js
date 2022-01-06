var dataarr = [
    {
        0: {
            name: 'Mauna Kea',
            height: 10203
        },
        1: {
            name: 'Mt. Everest',
            height: 8848
        },
        2: {
            name: 'K2',
            height: 8611
        },
        3: {
            name: 'Kangchenjunga', 
            height: 8586
        },
        4: {
            name: 'Lhotse',
            height: 8516
        },
        5: {
            name: 'Makalu',
            height: 8485
        }
    },
    {
        0: {
            name: 'Mount Everest',
            height: 8849
        },
        1: {
            name: 'Kangchenjunga',
            height: 8586
        },
        2: {
            name: 'Gangkar Punsum',
            height: 7570
        },
        3: {
            name: 'Pik Pobeda', 
            height: 7439
        },
        4: {
            name: 'Mount Ararat',
            height: 5137
        },
        5: {
            name: 'Khüiten Peak',
            height: 4356
        }
    },
    {
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
    },
    {
        0: {
            name: 'Denali',
            height: 6190
        },
        1: {
            name: 'Mount Logan',
            height: 5956
        },
        2: {
            name: 'Pico de Orizaba',
            height: 5636
        },
        3: {
            name: 'Mount Sanford', 
            height: 4949
        },
        4: {
            name: 'Mount Slaggard',
            height: 4742
        },
        5: {
            name: 'Nevado de Toluca',
            height: 4690
        }
    },
    {
        0: {
            name: 'Mount Kilimanjaro',
            height: 5895 
        },
        1: {
            name: 'Mount Kenya',
            height: 5199
        },
        2: {
            name: 'Mount Stanley',
            height: 5109
        },
        3: {
            name: 'Mount Meru', 
            height: 4562
        },
        4: {
            name: 'Mount Semien',
            height: 4550
        },
        5: {
            name: 'Mount Karisimbi',
            height: 4507
        }
    }
]

$(document).ready(function() {
    $('.main-loader').fadeOut("slow");
    $('.landing-section').css({
        'background-image': `url(../media/jpg/peak-2.jpg)`
    })
    $('footer').css("display", "flex").hide().fadeIn("slow");
    let arrofspan = [];
    for(let i = 5; i <= 13; i++) {
        arrofspan.push($('span')[i])
    }
    arrofspan.forEach((e) => {
        $(e).html(getRandom(450, 185))
    })
    for(let i = 0; i <= getRandom(0, 5); i++) {
        $('.dynamic-points').append(`<div class="pt ${i}"><span class="mount-name">${dataarr[2][i].name}</span><div class="outer-dot"><div class="dot"></div></div><span class="mount-height">${dataarr[2][i].height} m</span></div>`).hide().fadeIn("slow");
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

const box = $('li');
for(let i = 0; i < $('li').length; i++) {
    box[i].addEventListener('click', function(){
        $('li').removeAttr('class')
        for(let e = 0; e < $('li').length; e++) {
            if(e == i) {
                $(this).addClass('list-selected')
                $('.landing-section').css({
                    'background-image': `url(../media/jpg/peak-${i}.jpg)`
                })
                $('.dynamic-points').empty()
                break;
            }
        }
        for(let a = 0; a <= getRandom(0, 5); a++) {
            $('.dynamic-points').append(`<div class="pt ${a}"><span class="mount-name">${dataarr[i][a].name}</span><div class="outer-dot"><div class="dot"></div></div><span class="mount-height">${dataarr[i][a].height} m</span></div>`).hide().fadeIn("slow");
            let top = getRandom(30, 60);
            let left = getRandom(10, 90);
            $(`.${a}`).css({
                'position' : 'absolute',
                'top' : `${top}%`,
                'left' : `${left}%`,
                'transform' : `translate(-${top}%, -${left}%)`
            });
        }
    })
}


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}