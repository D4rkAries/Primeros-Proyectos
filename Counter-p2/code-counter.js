// Variables globales
let number = 0

function printNumber(){
    let color
    let spanNumber = document.getElementById('spn-Number')
    if(number == 0) color = 'black'
    if(number > 0) color = 'green'
    if(number < 0) color = 'red'
    spanNumber.innerHTML = number
    spanNumber.style.color = color
}
function decrease(){
    number--

    printNumber()
}

function increase(){
    number++

    printNumber()
}
function reset(){
    number = 0
    printNumber()
}
function start(){
    let btIncrease = document.getElementById('increase-Button')
    let btDecrease = document.getElementById('decrease-Button')
    let btReset = document.getElementById('reset-Button')

    btDecrease.addEventListener('click', decrease)
    btIncrease.addEventListener('click', increase)
    btReset.addEventListener('click', reset)
}
window.addEventListener('load', start)