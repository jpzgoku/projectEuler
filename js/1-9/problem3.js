let primeFactors = function(n) {
	let answer = [];

	let isItPrime = n => {
		for (let i = 2; i < Math.ceil(n / 2) + 1; i++) {
			if (n % i === 0) {
				return false;
			}
		}
		return true;
	};

	let findPrimeF = n => {
		if (isItPrime(n)) {
			return answer.push(n);
		}
		for (let i = 2; i < n; i++) {
			if (n % i === 0) {
				findPrimeF(i);
				return findPrimeF(n / i);
			}
		}
	};

	findPrimeF(n);
	console.log(answer);
	return answer;
};

console.log(primeFactors(224).max());
console.log(primeFactors(600851475143).max());