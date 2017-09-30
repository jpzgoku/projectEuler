const prototypes = require('../prototypes');

// Finds pairs of amicableNumbers up to 'max'
let amicableNumbers = function(max) {
	let answer = [];
	let d = n => Number.divisors(n).sum();
	for (let a = 1; a < max; a++) {
		let b = d(a);
		if (d(b) === a && a !== b) {
			answer.push(a);
			answer.push(b);
			a = b;
		}
	}
	console.log(answer);
	return answer;
};

console.log(amicableNumbers(10000).sum());
