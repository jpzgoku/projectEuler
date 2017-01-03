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
			return false;
		}
	}
	return primeN.push(num);
};

function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	console.log(sum);
	return sum;
};

findPrimeNumber(2000000);
arraySum(primeN);