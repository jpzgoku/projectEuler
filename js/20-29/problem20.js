// Takes a number and turns it into an array.
function intToArray(n) {
  var arr = [];
  var str = String(n);
  for (var i = 0; i < str.length; i++) {
    arr.push(Number(str.charAt(i)));
  }
  return arr;
};

// Adds to arrays of numbers together then returns a new array of single digit values.
function arrayAddition(arr1, arr2) {
  var big;
  var little;
  if (arr1.length >= arr2.length) {
    big = arr1;
    little = arr2;
  } else {
    big = arr2;
    little = arr1;
  }
  var y = big.length - little.length;
  for (var h = y; h > 0; h--) {
    little.unshift(0);
  }
  big.unshift(0);
  little.unshift(0);
  var newArray = []
  for (var i = 0; i < big.length; i++) {
    newArray.push(big[i] + little[i]);
  }
  singleDigitValues(newArray);
  return newArray;
};

// Finds the factorial sigit sum of a number.
function factorialDigitSum(n) {
  var x = intToArray(n);
  for (var m = n - 1; m > 0; m--) {
    if (m > 9) {
      var mArray = intToArray(m);
      firstInt = arrayMultiplication(x, mArray[1]);
      secondInt = arrayMultiplication(x, mArray[0]);
      secondInt.push(0);
      //console.log("FirstInt: " + firstInt);
      //console.log("SecondInt: " + secondInt);
      x = arrayAddition(firstInt, secondInt);
      //console.log(x);
    } else {
      x = arrayMultiplication(x, m)
    }
  }
  console.log(x);
  return x;
};

// Multiples each value in an array by m then returns an array made
// up of single digit values.
function arrayMultiplication(arr, m) {
  var product = function() {
    var empty = [];
    for (var i = 0; i <= arr.length + 1; i++) {
      empty.push(0);
    }
    return empty;
  }();
  multiplyByX(arr, product, m);
  return cutZeros(singleDigitValues(product));
};

// Takes an array and multiples each value by x
function multiplyByX(arrIn, arrOut, x) {
  for (var i = arrIn.length - 1; i >= 0; i--) {
    arrOut[i + 2] = arrIn[i] * x;
  }
  return arrOut;
};

//Takes an array, does addittion and carries the 1 so that each value is only one digit long.
function singleDigitValues(arr) {
  for (var j = arr.length - 1; j >= 0; j--) {
    var y = intToArray(arr[j]);
    if (y.length >= 2) {
      var firstDigit = y[0];
      arr[j] = arr[j] - (firstDigit * 10);
      arr[j - 1] = arr[j - 1] + firstDigit;
    }
  }
  return arr;
};

// Cuts the extra '0's from the beginning of the array.
function cutZeros(arr) {
  for (var k = 0; k <= arr.length; k + 0) {
    if (arr[k] === 0) {
      arr.shift();
    } else {
      return arr;
    }
  }
};

// Takes an array and adds up all the numbers.
function arraySum(array) {
	var sum = 0;
	for (i in array) {
		sum = sum + array[i];
	}
	return sum;
};

// Finds the factorial of a number.
let factorial = (n) => (n === 1) ? 1 : n * factorial(n-1);

console.log(factorial(100));
console.log(arraySum(factorialDigitSum(100)));
