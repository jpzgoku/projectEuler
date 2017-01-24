//Failure. This version is even slower

function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	return sum;
};

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

console.log(arraySum(sieveOfEratosthenes(2000000)));
