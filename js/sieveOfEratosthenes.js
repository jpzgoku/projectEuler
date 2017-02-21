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
			return numbers;
		}
	}
};

let primes = (n) => {	
	let ps = [];
	let sieve = [true] * (n + 1);
	for (let p = 2; p <= n; p++) {
		ps.push(p)
		for (let i = p * p; i <= n; i = i + p) {
			sieve[i] = false;
		}
	}
	return ps
};

//console.log(sieveOfEratosthenes(1000000));
console.log(primes(1000000));
