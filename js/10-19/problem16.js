function intToArray(n) {
  let arr = [];
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str.charAt(i)));
  }
  return arr;
};

function exponentiation(n, p) {
  let x = intToArray(n);
  for (let i = 1; i < p; i++) {
    x = arrayMultiplication(x);
  }
  console.log(x);
  return x;
};

function arrayMultiplication(arr) {
  let product = function() {
    let empty = [];
    for (let i = 0; i <= arr.length; i++) {
      empty.push(0);
    }
    return empty;
  }();

  for (let i = arr.length - 1; i >= 0; i--) {
    product[i + 1] = arr[i] * 2
  }

  for (let j = product.length - 1; j >= 0; j--) {
    if (product[j] >= 10) {
      product[j] = product[j] - 10;
      product[j - 1] = product[j - 1] + 1;
    }
  }

  for (let k = 0; k <= arr.length; k + 0) {
    if (product[k] === 0) {
      product.shift();
    } else {
      return product;
    }
  }
  return product;
};

function arraySum(array) {
	return array.reduce((prev, current) => prev + current);
};

console.log(arraySum(exponentiation(2, 1000)));
