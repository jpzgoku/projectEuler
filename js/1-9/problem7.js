// sieve of eratoshenes
var primes = function(n) {
	var answer = [];
	var sieve = function() {
		var arr = [];
		for (let i = 0; i < n; i++) {
			arr.push(true);
		}
		return arr;
	}();
	for (let p = 2; p <= n; p++) {
		if (sieve[p]) {
			answer.push(p)
			for (let j = p * p; j <= n + 1; j += p) {
				sieve[j] = false;
			}
		}
	}
	return answer;
};

var place = 10001;

console.log(primes(1000000)[place - 1]);
