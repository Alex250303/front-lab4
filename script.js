// Task 1
function getRandomColorStyle() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) 
    + ',' + Math.floor(Math.random() * 255) + ')';
}

const changeColorsById = () => {
    document.getElementById('element1').style.background = getRandomColorStyle();
    document.getElementById('element1').style.color = getRandomColorStyle();
}

const changeColorsQuerySelector = () => {
    document.querySelector('#element2').style.background = getRandomColorStyle();
    document.querySelector('#element2').style.color = getRandomColorStyle();
}

// Task 2
function add() {
    document.getElementById("picture").src = "https://i.pinimg.com/originals/16/68/e2/1668e2d82571f1a8bcd0dd753eccf6d4.jpg"
    document.getElementById("picture").style.display = ""  
}

var size = 600

function increase() {
    size += 25
    document.getElementById("picture").style.width = size + "px"
}

function decrease() {
    size -= 25
    document.getElementById("picture").style.width = size + "px"
}

function remove() {
    document.getElementById("picture").style.display = "none" 
}