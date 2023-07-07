function isPelindrome(inputString) {
    return inputString === inputString.split('').reverse().join('')
}

console.log(isPelindrome('abcba'))

function isPelindrome2(inputString) {
    const n = inputString.length
    for (let i = 0; i < n; i++) {
        if (inputString[i] !== inputString[n - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(isPelindrome2('aba'))


function isPelindrome3(inputString) {
    return inputString.split('').every((char, i) => {
        return char === inputString[inputString.length - 1 - i]
    })
}

console.log(isPelindrome3('aba'))