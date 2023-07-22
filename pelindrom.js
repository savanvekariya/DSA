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


//Pelindrome for numbers

var isPalindrome4 = function(x) {
    x = x.toString();
    let start = 0;
    let end = x.length - 1;

    while(start < end){
        if(x[start] !== x[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};