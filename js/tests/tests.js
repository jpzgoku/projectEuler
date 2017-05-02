var sieveOfEratosthenes = function(n) {
	var numbers = function() {
		arr = [];
		arr.push(2)
		for (var i = 3; i <= n; i += 2) {
			arr.push(i);
		}
		return arr;
	}();

	var removeMultiples = function(arrPosition) {
		var times = 0
		var j = numbers[arrPosition];
		console.log(j);
		for (var p = j + j; p <= n; p = p + j) {
			var index = numbers.indexOf(p);
			if (index >= 0) {
				times++
				numbers.splice(index, 1);
			}
		}
		return [numbers, times];
	};

	for (var i = 1; i < Math.ceil(n / 2); i++) {
		if (removeMultiples(i)[1] === 0) {
			console.log(numbers);
			return numbers;
		}
	}
};

function removeEvens(n) {
	 return (function() {
		arr = [];
		arr.push(2)
		for (var i = 3; i <= n; i += 2) {
			arr.push(i);
		}
		return arr;
	})();
};

var xs = [1, "5", 77, "34", 6, 7]

function test(arr) {
	newArr = [];
	for (var i = 0; i <= arr.length; i++) {
		if (Number.isInteger(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	console.log(newArr);
	return newArr;
};

// Tests all numbers up to 'max' to see if they are perfect,
// deficient, of abundant numbers;
function perfectDeficientAbundantNumbers(max) {
  var perfect = [];
  var deficient = [];
  var abundant = [];
  for (var i = 1; i <= max; i++) {
    if (arraySum(divisors(i)) === i) {
      perfect.push(i);
    } else if (arraySum(divisors(i)) < i) {
      deficient.push(i);
    } else {
      abundant.push(i);
    }
  }
  console.log('Perfect: ' + perfect);
  console.log('Deficient: ' + deficient);
  console.log('Abundant: ' + abundant);
};

test(xs);
//console.log(removeEvens(2000000));
//sieveOfEratosthenes(2000000);
