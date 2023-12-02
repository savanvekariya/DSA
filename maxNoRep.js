function maxNo(numArr) {
  let numObj = new Object();
  for (let item of numArr) {
    {
      let key = String(item);
      numObj[key] ? numObj[key]++ : (numObj[key] = 1);
    }
  }
  console.log(Math.max(...Object.values(numObj)));
}

maxNo([1, 2, 2, 3, 1, 5, 1, 8, 1]);
