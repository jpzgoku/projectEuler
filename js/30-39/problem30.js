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

/* Takes an integer and a power, changes all the digits to their 'p' power.
returns the sum. */
function digitPowers(n, p) {
  let x = intToArray(n);
  for (let i = 0; i < x.length; i++) {
    x[i] = Math.pow(x[i], p)
  }
  return arraySum(x);
};

/* Returns an array of all the numbers that can be written as the sum
 of 'p' powers of their digits.*/
function allXDigitPowers(max, p) {
  let arr = [];
  for (let i = 2; i <= max; i++) {
    if (digitPowers(i, p) === i) {
      arr.push(i)
    }
  }
  return arr;
};

console.log(arraySum(allXDigitPowers(1000000, 5)));
