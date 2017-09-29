const prototypes = require('../prototypes');

// Returns an array of all the palindrome numbers between 'start' and 'end'.
var palindrome = function(start, end) {
	var answer = [];
	var reverseNum = n => parseInt(n.toString().split('').reverse().join(''));

	for (let i = start; i < end; i++) {
		for (let j = start; j < end; j++) {
			var product = i * j
			if (product === reverseNum(product)) {
				answer.push(product);
			}
		}
	}
	return answer;
};

console.log(palindrome(100, 1000).max());
