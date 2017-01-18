// Too brute force. Need a way to cut down the processing time.

var triangularNumber = function(n) {
	return (n == 0) ? 0 : (triangularNumber(n-1) + n);
};

function numOfMultiples(num) {
	var saveTime = Math.ceil(num /2) + 1;
	var multiples = 0;
	for (i = 1; i <= saveTime; i++) {
		if (num % i === 0) {
			multiples++
		}
	}
	multiples++
	return multiples
};

function highlyDivisibleTriangularNumber(numOfDivisors) {
	for (var i = numOfDivisors; i <= Infinity; i++) {
		if (numOfMultiples(triangularNumber(i)) > numOfDivisors) {
			console.log(triangularNumber(i));
			return(triangularNumber(i));
		}
	}
};

//console.log(triangularNumber(5));
highlyDivisibleTriangularNumber(310);


