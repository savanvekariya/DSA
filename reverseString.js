function reverseString(inputString) {
    return inputString.split('').reverse().join('')
}

console.log(reverseString('Hello'))

function reverseString2(inputString) {
    reverseString = ''
    inputString.split('').forEach(element => {
        reverseString = element + reverseString
    });
    console.log(reverseString)
}

reverseString2('hello')


function reverseString3(inputString) {
    return inputString.split('').reduce((prev, curr) => {
        // console.log('prev-> ', prev)
        // console.log('curr-> ', curr)
        return prev + curr
    })
}
console.log(reverseString3('hello'))