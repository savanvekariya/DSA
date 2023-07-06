function countVowels(inputString) {
    console.time('count-vowels-1')
    let count = 0
    for (let char of inputString) {
        if (/[aeiou]/gi.test(char.toLowerCase())) {
            count++
        }
    }
    console.timeEnd('count-vowels-1')
    return count
}

console.log(countVowels('banana'))

function countVowels2(inputString){
    console.time('count-vowels-2')
    let pattern = /[aeiou]/gi
    let count = inputString.match(pattern).length
    console.timeEnd('count-vowels-2')
    return count
}

console.log(countVowels2('banana'))