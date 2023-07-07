function isAnagram(inputString1, inputString2) {
    const normalizeStrings = (str) => str.replace(/[^\w]/g, '').split('').sort().join('')

    return normalizeStrings(inputString1) === normalizeStrings(inputString2)
}

console.log(isAnagram('adc', 'bca'))

function createCharMap(str) {
    const map = {}
    const normalizedString = str.replace(/[^\w]/g, '').toLowerCase()
    for (let char of normalizedString) {
        map[char] = map[char] + 1 || 1
    }
    return map
}

function isAnagram2(inputString1, inputString2) {
    let charMapA = createCharMap(inputString1)
    let charMapB = createCharMap(inputString2)

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false
    }

    for (let char of inputString1) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }
    return true
}
console.log(isAnagram2('abbc', 'bbca'))