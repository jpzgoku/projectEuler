function isItPrime(num) {
	var saveTime = Math.ceil(num /2) + 1;
	for (var i = 2; i < saveTime; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

var primeFactors = function(num) {
	var array = [];
	var findPrimeF = function(num) {
		if (isItPrime(num)) {
			return array.push(num);
		}
		for (var i = 2; i < num; i ++) {
			if (num % i === 0) {
				var n1 = i;
				var n2 = num / i;
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
let largestToSmallest = (array) => array.sort( (a, b) => b - a);

console.log(largestToSmallest(primeFactors(224))[0]);
console.log(largestToSmallest(primeFactors(600851475143))[0]);
