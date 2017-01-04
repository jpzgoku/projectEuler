var primeN = [];
var primeF = [];

function findPrimeNumber(max) {
	for (var i = 2; i < max; i ++) {
		testNumber(i);
	};
	return primeN;
};

function testNumber(num) {
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return primeN.push(num);
};

function findPrimeFactor(num) {
	if (checkForPrimeNum(num)) {
		return primeF.push(num);
	}
	for (var i = 2; i < num; i ++) {
		if (num % i === 0) {
			var n1 = i;
			var n2 = num / i;
			findPrimeFactor(n1);
			findPrimeFactor(n2);
			return false;
		}
	}
};

function checkForPrimeNum(n) {
	for (var i = 0; i < primeN.length; i++) {
		if (n === primeN[i]) {
			return true;
		}
	}
	return false;
};

function largestPrimeFactor(array) {
	var largeToSmall = array.sort(function(a, b){return b-a});
	console.log(largeToSmall[0]);
	return largeToSmall[0];
}

findPrimeNumber(30000);
findPrimeFactor(600851475143);
largestPrimeFactor(primeF);
