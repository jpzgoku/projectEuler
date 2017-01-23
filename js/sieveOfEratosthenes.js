var sieveOfEratosthenes = function(n) {
	var numbers = function() {
		arr = [];
		for (var i = 2; i <= n; i++) {
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

	for (var i = 0; i < Math.ceil(n / 2); i++) {
		if (removeMultiples(i)[1] === 0) {
			console.log(numbers);
			return numbers;
		}
	}
};

sieveOfEratosthenes(90000);
