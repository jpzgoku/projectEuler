// Only works for exponents of '2';
let sumOfDigits = function(n, p) {

  let arrayMultiplication = function(arr) {
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

    while (product[0] === 0) {
      product.shift();
    }

    return product;
  };

  let x = Number.intToArray(n);
  for (let i = 1; i < p; i++) {
    x = arrayMultiplication(x);
  }
  console.log(x);
  return x;
};

console.log(sumOfDigits(2, 1000).sum());