function isItPrime(num) {
	let saveTime = Math.ceil(num /2) + 1;
	for (let i = 2; i < saveTime; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

let primeFactors = num => {
	let array = [];
	let findPrimeF = num => {
		if (isItPrime(num)) {
			return array.push(num);
		}
		for (let i = 2; i < num; i ++) {
			if (num % i === 0) {
				let n1 = i;
				let n2 = num / i;
				findPrimeF(n1);
				return findPrimeF(n2);
			}
		}
	};

	findPrimeF(num);
	console.log(array);
	return array;
};

// Sorts an array from large to small.
let largestToSmallest = array => array.sort( (a, b) => b - a);

console.log(largestToSmallest(primeFactors(224))[0]);
console.log(largestToSmallest(primeFactors(600851475143))[0]);
