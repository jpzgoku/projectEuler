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

function arraySum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum = sum + array[i];
	}
	console.log(sum);
	return sum;
};

/*var answer = function(n) {
	return arraySum(primeNumbers(n));
};

answer(2000000)*/

arraySum(primeNumbers(2000000));