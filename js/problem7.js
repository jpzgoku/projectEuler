var primeN = [];

function findPrimeNumber(max) {
	for (var i = 2; i < max; i ++) {
		testNumber(i);
	};
	return primeN;
};

function testNumber(num) {
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false
		}
	}
	return primeN.push(num);
};

function findPlace(n) {
	console.log(primeN[n - 1]);
	return primeN[n];
}

findPrimeNumber(110000);
findPlace(10001);