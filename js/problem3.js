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
	findPrimeF(num);

	function findPrimeF(num) {
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
	console.log(array);
	return array;
};

function largestPrimeFactor(array) {
	var largeToSmall = array.sort(function(a, b){return b-a});
	console.log(largeToSmall[0]);
	return largeToSmall[0];
};

largestPrimeFactor(primeFactors(224));
largestPrimeFactor(primeFactors(600851475143));