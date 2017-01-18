// Too brute force. Need a way to cut down the processing time.

function numOfMultiples(num) {
	var saveTime = Math.ceil(num /2) + 1;
	var multiples = 0;
	for (i = 1; i <= saveTime; i++) {
		if (num % i === 0) {
			multiples++;
		}
	}
	multiples++;
	return multiples;
};

function highlyDivisibleTriangularNumber(numOfDivisors) {
	var previousNum = 0;
	for (var i = 1; i < Infinity; i++) {
		previousNum = previousNum + i;
		if (numOfMultiples(previousNum) > numOfDivisors) {
			console.log(previousNum);
			return previousNum;
		}
	}
};

highlyDivisibleTriangularNumber(310);


