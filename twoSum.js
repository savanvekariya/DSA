const findPair = (numArr, sum) => {
  let result = new Map();
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === sum) {
        result.set(numArr[i], numArr[j]);
      }
    }
  }
  console.log(result);
};

const findPair1 = (numArr, sum) => {
  const result = new Map();
  for (let item in numArr) {
    let item2 = sum - Number(item);
    if (numArr.indexOf(item2) !== -1) {
      result.set(item, item2);
    }
  }
  console.log(result);
};

console.log(findPair1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
