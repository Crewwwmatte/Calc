// console.log('Yo')

// function stringHandler(word) {
//     console.log(word.replace(function(a) {return a.toUpperCase()}))
// }

// stringHandler('Harley davidson')

const zero = document.querySelector('#0')
const one = document.getElementById(1)
const two = document.querySelector('#two')
const three = document.querySelector('#3')
// const four = document.querySelector('#4')
// const five = document.querySelector('#5')
// const six = document.querySelector('#6')
// const seven = document.querySelector('#7')
// const eight = document.querySelector('#8')
// const nine = document.querySelector('#9')

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#mult')
const del = document.querySelector('#razdel')

zero.addEventListener('click', e => {
    console.log(e.target.innerHTML)
})

one.addEventListener('click', (e) => {
    console.log(e.target)
})

two.addEventListener('click', (e) => {
    console.log(e.target)
})


function print() {
    this.addEventListener('click', () => {

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











