let longestCollatz = function() {
	let answer = 1;
	let numbers = [];
	let spl = [];
	let origional = 0;

	let collatz = (n, count=0) => {
		if (numbers[n]) {
			count += numbers[n];
			numbers[origional] = count;
			return
		}
		count++;
		if (n === 1) {
			numbers[origional] = count;
			return
		} else if (n % 2 === 0) {
			return collatz(n / 2, count);
		} else {
			return collatz((3 * n) + 1, count);
		}
	}

	return function(n) {
		answer = 1;
		for (let i = numbers.length; i <= (n * 3); i++) {
			numbers.push('');
		}
		for (let j = 1; j <= n; j++) {
			origional = j;
			collatz(j);
		}

		spl = numbers.slice(0, n + 1);

		for (let k = 1; k < spl.length; k++) {
			if (spl[k] > spl[answer]) {
				answer = k;
			}
		}
		return answer;
	}
}();

console.log(longestCollatz(1000000));