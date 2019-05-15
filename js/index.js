'use strict'

let rests = [
        '食来食往',
        '福稻米线',
        '绿茶',
        '西域食府',
        '刘公烤鱼',
        '富来小厨',
        '龙升栈',
        'stay',
        '黄记煌',
        '98香',
        '满庭芳',
        '马路边边',
        '味千拉面',
        'Kinton',
        '马路边边',
        '嘿小面',
	'大斌家串串香',
	'小扁担鸡公煲',
	'Mo\'Ramyun']

let text_colors = [
    '#E16B8C',
    '#F596AA',
    '#D7C4BB',
    '#FB966E',
    '#E2943B',
    '#FFC408',
    '#B1B479',
    '#227D51',
    '#3A8FB7'
]

function onStart() {

    findNewFood()
    
}

function findNewFood() {

    let choice = Math.floor(Math.random() * rests.length)
    let today = rests[choice]
    let content = document.getElementById('content')
    let ref_btn = document.getElementById('refresh-btn')
    
    content.innerHTML = today
    content.style.color = text_colors[Math.floor(Math.random() * text_colors.length)]
    ref_btn.style.background = text_colors[Math.floor(Math.random() * text_colors.length)]
    ref_btn.style.width = today.length * 50 + 'px'
}
