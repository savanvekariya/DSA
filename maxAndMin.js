const arr = [4, 5, 8, 2, 4, 5, 6, 1, 7, 0, 3, 5, 8, 2, 7]

console.log(Math.min(...arr))
console.log(Math.max(...arr))

function getMaxMin(inputArr) {
    let max = inputArr[0]
    let min = inputArr[0]
    inputArr.forEach(current => {
        if (current > max) {
            max = current
        }
        if (current < min) {
            min = current
        }
    });

    console.log(min, max)
}

getMaxMin(arr)