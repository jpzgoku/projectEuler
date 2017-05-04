// Adds to arrays of numbers together then returns a new array of single digit values.
let arrayAddition = function(arr1, arr2) {
  let big;
  let little;
  if (arr1.length >= arr2.length) {
    big = arr1;
    little = arr2;
  } else {
    big = arr2;
    little = arr1;
  }

  for (let i = big.length - little.length; i > 0; i--) {
    little.unshift(0);
  }
  big.unshift(0);
  little.unshift(0);
  let sum = [];
  for (let j = 0; j < big.length; j++) {
    sum.push(big[j] + little[j]);
  }
  return singleDigitValues(sum);
};

// Finds the factorial sigit sum of a number.
let factorialDigitSum = function(n) {
  let intArray = Number.intToArray(n);
  for (let i = n - 1; i > 0; i--) {
    if (i > 9) {
      let helperArray = Number.intToArray(i);
      let firstInt = arrayMultiplication(intArray, helperArray[1]);
      let secondInt = arrayMultiplication(intArray, helperArray[0]);
      secondInt.push(0);
      intArray = arrayAddition(firstInt, secondInt);
    } else {
      intArray = arrayMultiplication(intArray, i)
    }
  }
  console.log(intArray);
  return intArray;
};

// Multiples each value in an array by m then returns an array made
// up of single digit values.
let arrayMultiplication = function(arr, m) {

  // Takes an array and multiples each value by 'mul'
  let multiplyByX = function(arrIn, arrOut, mul) {
    for (let i = arrIn.length - 1; i >= 0; i--) {
      arrOut[i + 2] = arrIn[i] * mul;
    }
    return arrOut;
  };

  let product = function() {
    let empty = [];
    for (let i = 0; i <= arr.length + 1; i++) {
      empty.push(0);
    }
    return empty;
  }();
  product = singleDigitValues(multiplyByX(arr, product, m));

  while (product[0] === 0) {
    product.shift();
  }

  return product
};

//Takes an array, does addittion and carries the 1 so that each value is only one digit long.
let singleDigitValues = function(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let intArray = Number.intToArray(arr[i]);
    if (intArray.length >= 2) {
      let firstDigit = intArray[0];
      arr[i] = arr[i] - (firstDigit * 10);
      arr[i - 1] = arr[i - 1] + firstDigit;
    }
  }
  return arr;
};

// Finds the factorial of a number.
let factorial = n => (n === 1) ? 1 : n * factorial(n-1);

//console.log(factorial(100));
console.log(factorialDigitSum(100).sum());
