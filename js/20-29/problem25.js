// Finds the fibonacci using recursion.
/*function fibonacci(n) {
	return (n === 1 || n === 2) ? 1 : (fibonacci(n-1) + fibonacci(n-2));
};*/

// Finds the fibonacci without using recursion.
function fibonacci(n) {
	var arr = [1, 1];
	for (var i = 1; i < n - 1; i++) {
		arr.push(arr[i] + arr[i - 1]);
	}
	return arr;
};

// Takes a number and turns it into an array.
function intToArray(n) {
  var arr = [];
  var str = String(n);
  for (var i = 0; i < str.length; i++) {
    arr.push(Number(str.charAt(i)));
  }
  return arr;
};

// Finds the first number to find X amount of digits in certain mathematical function.
function xDigits(numDigits, func) {
	for (var i = 1; i < Infinity; i++) {
		if (intToArray(func(i)).length >= numDigits) {
			return i;
		}
	}
};

//console.log(xDigits(14, fibonacci));
console.log(fibonacci(1475));

// Not practical in javascript because the numbers get too big.
