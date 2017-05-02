// Returns an array of all the palindrome numbers between 'start' and 'end'.
let palindrome = (start, end) => {
	let answer = [];
	let reverseNum = n => Number(String(n).split('').reverse().join(''));

	for (let i = start; i < end; i++) {
		for (let j = start; j < end; j++) {
			let product = i * j
			if (product === reverseNum(product)) {
				answer.push(product);
			}
		}
	}
	return answer;
};

console.log(palindrome(100, 1000).max());