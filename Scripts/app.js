// console.log('Yo')

// function stringHandler(word) {
//     console.log(word.replace(function(a) {return a.toUpperCase()}))
// }

// stringHandler('Harley davidson')
// const numberz = screen.textContent
const screen = document.querySelector('.calc_screen')


const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')



const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#mult')
const del = document.querySelector('#razdel')
const clear = document.querySelector('#clear')


zero.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
    screenHandler()
})

one.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

two.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

three.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

four.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

five.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

six.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

seven.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

eight.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})

nine.addEventListener('click', (e) => {
    screen.insertAdjacentHTML("beforeend", e.target.innerHTML)
})


plus.addEventListener('click', function () {
    let x = screen.textContent.split('')
    let numbersResult = x.filter(x => {
        if (Number(x) >= 0 && Number(x) <= 9) {
            console.log(x.join(numbersResult))
        }
    })
    console.log(x)
    console.log(numbersResult)
})





clear.addEventListener('click', (e) => {
    screen.textContent = ''
})


function print() {
    this.addEventListener('click', (e) => {
        return console.log(e.target.innerHTML)
    })
}

function spl(word) {
    let result = word.split('')
    let lastItem = result[result.length - 1]
    let numbers = result.filter(result => {
        if (Number(result) >= 0 && Number(result) <= 8) {
            return true
        }
    })
    let indexCount = result.length - numbers.length
    let numbersRes = numbers.join('')
    let numbResNum = Number(numbersRes)
    let numbResStr = String(numbersRes)
    if (numbResNum >=0 && Number(lastItem) >= 0 && Number(lastItem) <= 9) {
        result.splice(indexCount, numbers.length)
        numbResNum++
        numbResStr = numbResNum
        result.push(numbResStr)
        console.log(result.join(''))
    } else {
        result.push(1)
        console.log(result.join(''))
    }
}

function screenHandler() {
    let result = screen.textContent.split('')
    // let lastItem = result[result.length - 1]
    let numbers = result.filter(result => {
        if (Number(result) >= 0 && Number(result) <= 8) {
            return true
        }
    })
    let indexCount = result.length - numbers.length
    let numbersRes = numbers.join('')
    let numbResNum = Number(numbersRes)
    let numbResStr = String(numbersRes)
    if (numbResNum >=0 && Number(lastItem) >= 0 && Number(lastItem) <= 9) {
        result.splice(indexCount, numbers.length)
        numbResNum++
        numbResStr = numbResNum
        result.push(numbResStr)
        console.log(result.join(''))
    } else {
        result.push(1)
        console.log(result.join(''))
    }
}











