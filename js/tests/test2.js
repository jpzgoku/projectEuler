// Returns an array of all the proper divisors of 'n'.
let divisors = n => {
	let arr = [];
	let max = n;
	for (let i = 1; i < max; i++) {
		if (n % i === 0) {
			max = n / i;
			arr.push(i);
			if (max === i) {
				break;
			}
			arr.push(max);
		}
	}
	arr.splice(1, 1);
	return arr;
};

let multiples = n => {
	let arr = [];
	let max = n;
	for (let i = 1; i < max; i++) {
		if (n % i === 0) {
			max = n / i;
			arr.push(i);
			if (max === i) {
				break
			}
			arr.push(max);
		}
	}
	return arr;
};


console.log(multiples(100));
console.log(divisors(100));