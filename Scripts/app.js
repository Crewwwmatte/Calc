// console.log('Yo')

function stringHandler(word) {
    console.log(word.replace(function(a) {return a.toUpperCase()}))
}

stringHandler('Harley davidson')

const plus = document.querySelector('#plus')

function plusHandler() {
    console.log(28+49)
}

plus.addEventListener('click', plusHandler)

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











