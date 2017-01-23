function multiples(num) {
	var saveTime = Math.ceil(num /2) + 1;
	var arr = [];
	var max = num;
	for (i = 1; i < max; i++) {
		if (num % i === 0) {
			var max = num / i;
			arr.push(i);
			arr.push(max);
		}
	}
	return arr;
};

function highlyDivisibleTriangularNumber(numOfDivisors) {
	var previousNum = 0;
	for (var i = 1; i < Infinity; i++) {
		previousNum = previousNum + i;
		if (multiples(previousNum).length > numOfDivisors) {
			console.log(previousNum);
			return previousNum;
		}
	}
};

highlyDivisibleTriangularNumber(500);
