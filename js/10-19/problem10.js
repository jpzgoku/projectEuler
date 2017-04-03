// Too brute force. Need a way to cut down the processing time.

var sumOf = function(max, func) {
	sum = 0;
	for (var i = 2; i < max; i ++) {
		if (func(i)) {
			sum = sum + i;
		}
	}
	return sum;
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

console.log(sumOf(2000000, isItPrime));
