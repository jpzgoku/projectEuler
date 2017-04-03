// Reverses a number
let reverseNum = n => Number(String(n).split('').reverse().join(''));

let palindrome = (start, end) => {
	let array = []
	for (let i = start; i < end; i++) {
		for (let j = start; j < end; j++) {
			let product = i * j
			if (product === reverseNum(product)) {
				array.push(product);
			}
		}
	}
	return array;
};

// Finds the largest number in an array.
let max = array => array.sort( (a, b) => b - a)[0];

console.log(max(palindrome(100, 1000)));
