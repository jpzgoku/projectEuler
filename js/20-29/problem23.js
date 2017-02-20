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

// Finds all abundant numbers up to 'max'
function abundantNumbers(max) {
  var abundant = [];
  for (var i = 1; i <= max; i++) {
     if (arraySum(divisors(i)) > i) {
      abundant.push(i);
    }
  }
  return abundant;
};

// Finds the possible sums of all the numbers in an array up to 'max'.
function possibleSums(arr, max) {
  var sums = [];
  for (var i = 0; i < arr.length; i++) {
    var num1 = arr[i];
    for (var j = i; j < arr.length; j++) {
      if (num1 + arr[j] >= max) {
        continue;
      }
      sums.push(num1 + arr[j]);

    }
  }
  return sums;
};

/* Finds all positive integers which cannot be written
 as the sum of two abundant numbers, up to 'max'. */
function nonAbundantSums(arr, max) {
  var numbers = function() {
    var empty = [];
    for (var i = 1; i < max; i++) {
      empty.push(i);
    }
    return empty;
  }();

  for (var i = 0; i < arr.length; i++) {
    var index = numbers.indexOf(arr[i]);
    if (index >= 0) {
      numbers.splice(index, 1);
    }
  }
  return numbers;
};

console.log(arraySum(nonAbundantSums(possibleSums(abundantNumbers(28123), 28123), 28123)));
