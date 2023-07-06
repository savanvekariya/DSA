function countVowels(inputString) {
    // console.time('count-vowels-1')
    let count = 0
    for (let char of inputString) {
        if (/[aeiou]/gi.test(char.toLowerCase())) {
            count++
        }
    }
    // console.timeEnd('count-vowels-1')
    return count
}

console.log(countVowels('banana'))

function countVowels2(inputString) {
    // console.time('count-vowels-2')
    let pattern = /[aeiou]/gi
    let count = inputString.match(pattern) ? inputString.match(pattern).length : 0
    // console.timeEnd('count-vowels-2')
    return count
}

console.log(countVowels2('b'))

function countVowels3(inputString) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (char of inputString) {
        if (vowels.includes(char.toLowerCase())) {
            count++
        }
    }
    return count
}

console.log(countVowels3('banana'))

function countVowels4(inputString) {

    const result = inputString.split("").reduce((count, char) => {
        if (/[aeiou]/gi.test(char.toLowerCase())) {
            return count + 1
        }
        else {
            return count
        }
    }, 0)

    return result
}

console.log(countVowels4('banana'))