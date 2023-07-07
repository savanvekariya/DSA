function getMaximumInString(str) {
    let max = 0
    let maxChar = ''
    let charMap = {}

    str.split('').forEach(char => {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1
        }
        else {
            charMap[char] = 1
        }
    });

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

console.log(getMaximumInString('kakskdkkfkghjasskwwwww'))