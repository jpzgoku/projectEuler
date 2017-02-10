// Takes a number and turns it into an array.
function intToArray(n) {
  var arr = [];
  var str = String(n);
  for (var i = 0; i < str.length; i++) {
    arr.push(Number(str.charAt(i)));
  }
  return arr;
};

// Takes an array and adds up all the numbers.
function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum;
};

// Returns the factorial of a number without using recursion.
let factorial = (n) => {
  if (n == 0) {
    return 1;
  }
  let product = n;
  for (let i = n - 1; i > 0; i--) {
    product = product * i;
  }
  return product;
}

// Returns an array of the factorials of the digits in 'n'.
function factorialArray(n) {
  let answer = [];
  for (let i of (intToArray(n))) {
    answer.push(factorial(i))
  }
  return answer
}

/* Returns an array of numbers that equal the sum of the factorials of their
digits up to 'max'. */
function digitFactorials(max) {
  let answer = [];
  for (let i = 3; i <= max; i++) {
    if (i === arraySum(factorialArray(i))) {
      answer.push(arraySum(factorialArray(i)))
    }
  }
  return answer;
}

console.log(arraySum(digitFactorials(100000)));
