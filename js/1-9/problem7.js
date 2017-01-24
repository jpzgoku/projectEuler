function isItPrime(num) {
	var saveTime = Math.ceil(num /2) + 1;
	for (var i = 2; i < saveTime; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

function nth(num, callback) {
	var arr = [];
	for (var i = 2; i < Infinity; i++) {
		if (callback(i)) {
			arr.push(i);
			if (arr.length === num) {
				arr.reverse()
				return arr[0];
			}
		}
	}
};

console.log(nth(10001, isItPrime));