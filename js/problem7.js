var primeNumbers = function(max) {
	var array = []
	for (var i = 2; i < max; i ++) {
		if (isItPrime(i)) {
			array.push(i);
		}
	}
	return array;
};

function isItPrime(num) {
	var saveTime = Math.ceil(num /2) + 1;
	for (var i = 2; i < saveTime; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

function findPlace(n, array) {
	console.log(array[n - 1]);
	return array[n];
};

findPlace(10001, primeNumbers(110000));