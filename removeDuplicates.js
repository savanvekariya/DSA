const arr = ['a', 'b', 'c', 'a', 'c']

function removeDuplicate(inputArr) {
    const set1 = [...new Set(inputArr)]
    return set1
}

console.log(removeDuplicate(arr))

function removeDuplicate2(inputArr) {
    const map = new Map()

    inputArr.forEach(char => {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        }
        else {
            map.set(char, 1)
        }
    });

    console.log([...map.keys()])
}

removeDuplicate2(arr)

function removeDuplicate3(inputArr) {
    const map = {}

    inputArr.forEach(char => {
        if (map[char]) {
            map[char] = map[char] + 1
        }
        else {
            map[char] = 1
        }
    })
    return Object.keys(map)
}

console.log(removeDuplicate3(arr))