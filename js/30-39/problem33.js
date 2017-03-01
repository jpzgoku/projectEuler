// Takes a number and turns it into an array.
function intToArray(n) {
  let arr = [];
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    arr.push(Number(str.charAt(i)));
  }
  return arr;
};

// Finds digit cancelling fractions.
function isDigitCancelling(numerator, denominator) {
  let fraction = numerator / denominator
  let n = intToArray(numerator)
  let d = intToArray(denominator)
  if (n[0] === d[0]) {
    if (checkForSameValue(n[1], d[1], fraction)) {
      return true;
    }
  }
  if (n[0] === d[1]) {
    if (checkForSameValue(n[1], d[0], fraction)) {
      return true;
    }
  }
  if (n[1] === d[0]) {
    if (checkForSameValue(n[0], d[1], fraction)) {
      return true;
    }
  }
  if (n[1] === d[1]) {
    if (checkForSameValue(n[0], d[0], fraction)) {
      return true;
    }
  }
  return false;
};

let checkForSameValue = (n, d, fraction) => (n / d === fraction) ? true : false

// Returns all 4 digit cancelling functions.
function digitCancellingFunctions() {
  let arr = [];
  for (let n = 10; n < 100; n++) {
    for (let d = n + 1; d < 100; d++) {
      if (n % 10 === 0 || d % 10 === 0) {
        continue;
      }
      if (isDigitCancelling(n, d)) {
        arr.push([n, d]);
      }
    }
  }
  return arr;
};

// Divides the values in a nested array of 2. Returns an array.
function arrToDecimal(array) {
  let answer = []
	array.forEach( (element) => answer.push(element[0] / element[1]) );
  return answer;
};

// Return the product of an array.
function arrayProduct(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }
  return product;
};

//console.log(digitCancellingFunctions());
console.log(arrayProduct(arrToDecimal(digitCancellingFunctions())));
