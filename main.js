const iconNext = document.querySelector('.carousel .right')
const iconPre = document.querySelector('.carousel .left')
const buttons = document.querySelectorAll('.buttons button')

let translate = 0
const array = [0, 100, 200, 300]
iconNext.onclick = () => {
    if (translate < 3) {
        translate += 1
        document.querySelector('.slider').style.transform = `translateX(-${array[translate]}%)`
        console.log(translate);
    }
    else {
        translate = 0
        document.querySelector('.slider').style.transform = `translateX(-${array[translate]}%)`
        console.log(translate);
    }
    for (let i = 0; i < buttons.length; i++) {
        if (i == translate) {
            buttons[i].classList.add('active')
        }
        else {
            buttons[i].classList.remove('active')
        }
    }
}

iconPre.onclick = () => {
    if (translate > 0) {
        translate -= 1
        document.querySelector('.slider').style.transform = `translateX(-${array[translate]}%)`
        console.log(translate);
    }
    else {
        translate = 3
        document.querySelector('.slider').style.transform = `translateX(-${array[translate]}%)`
        console.log(translate);
    }
    for (let i = 0; i < buttons.length; i++) {
        if (i == translate) {
            buttons[i].classList.add('active')
        }
        else {
            buttons[i].classList.remove('active')
        }
    }
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        buttons[i].classList.add('active')
        for (let j = 0; j < buttons.length; j++) {
            if (j != i) {
                buttons[j].classList.remove('active')
            }
        }
        translate = i
        document.querySelector('.slider').style.transform = `translateX(-${array[translate]}%)`
    }
}

setInterval(() => {
    if (translate < 3) {
        translate += 1
        document.querySelector('.slider').style.transform = `translateX(-${array[translate]}%)`
        console.log(translate);
    }
    else {
        translate = 0
        document.querySelector('.slider').style.transform = `translateX(-${array[translate]}%)`
        console.log(translate);
    }
    for (let i = 0; i < buttons.length; i++) {
        if (i == translate) {
            buttons[i].classList.add('active')
        }
        else {
            buttons[i].classList.remove('active')
        }
    }
}, 3000)