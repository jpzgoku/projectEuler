let emptyNestedArray = (n) => {
  let bigArr = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (j = 0; j < n; j++) {

      row.push('');
    }
    bigArr.push(row);
  }
  return bigArr;
};

function test(n) {
  let biggestNum = n * n;
  let arr = emptyNestedArray(n);
  arr = rightToLeft(n, arr, biggestNum);
  return arr
}

function rightToLeft(n, arr, num) {
  let x = 0;
  let y = n - 1;
  for (let j = num; j > num - n; j--) {
    arr[0][y] = num - x;
    x++
    y--;
  }
  return arr;
};

function leftToRight(n, arr, num) {
  let x = 0;
  let y = n - 1;
  for (let j = num; j > num - n; j--) {
    arr[y][x] = num - x;
    x++
  }
  return arr;
};

function downToUp(n, arr, num) {
  let x = 0;
  let y = n - 1;
  for (let j = num; j > num - n; j--) {
    arr[y][n - 1] = num - x;
    x++
    y--;
  }
  return arr;
};

function upToDown(n, arr, num) {
  let x = 0;
  let y = n - 1;
  for (let j = num; j > num - n; j--) {
    arr[x][0] = num - x;
    x++
    y--;
  }
  return arr;
};

console.log(rightToLeft(5, emptyNestedArray(5), 25));
console.log(leftToRight(5, emptyNestedArray(5), 25));
console.log(upToDown(5, emptyNestedArray(5), 25));
console.log(downToUp(5, emptyNestedArray(5), 25));
console.log(test(5));
