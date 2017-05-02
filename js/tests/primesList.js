// A list of primes that is easy to look up.
// primesList[x]. If x is prime then truthy. If not then falsey.
let primesList = max => {

	// sieve of eratoshenes
	let primes = n => {
		let ps = [];
		let sieve = function() {
			let arr = [];
			for (let i = 0; i < n; i++) {
				arr.push(true)
			}
			return arr;
		}();
		for (let p = 2; p <= n; p++) {
			if (sieve[p]) {
				ps.push(p)
				for (let j = p * p; j <= n + 1; j += p) {
					sieve[j] = false;
				}
			}
		}
		return ps;
	};

	let numbers = [];
	let p = primes(max);
	for (let i = 0; i <= max; i++) {
		numbers.push('');
	}
	for (let j = 0; j < p.length; j++) {
		let value = p[j];
		numbers[value] = value;
	}
	return numbers;
}