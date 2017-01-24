// Returns an array of all the proper divisors of a number.
function divisors(num) {
	var saveTime = Math.ceil(num /2) + 1;
	var arr = [];
	var max = num;
	for (i = 1; i < max; i++) {
		if (num % i === 0) {
			var max = num / i;
			arr.push(i);
			arr.push(max);
		}
	}
  arr.splice(1, 1);
  if (arr[arr.length - 1] === arr[arr.length - 2]) {
    arr.pop();
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

// Finds pairs of amicableNumbers up to 'max'
function amicableNumbers(max) {
  var arr = [];
  var d = function(n) {
    return arraySum(divisors(n))
  };
  for (var a = 1; a < max; a++) {
    var b = d(a);
    if (d(b) === a && a !== b) {
      arr.push(a);
      arr.push(b);
      a = b;
    }
  }
  console.log(arr);
  return arr;
};

console.log(arraySum(amicableNumbers(10000)));
