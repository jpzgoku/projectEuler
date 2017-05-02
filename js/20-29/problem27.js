// Returns an array of consecutive primes produced by 'a' and 'b'.
function consecutivePrimes(a, b) {
  let arr = [];
  for (let n = 0; n < Infinity; n++) {
    let x = (Math.pow(n, 2) + (a * n)) + b;
    if (isItPrime(x)) {
      arr.push(x);
    } else {
      return arr;
    }
  }
};

// Returns an array of the coefficients that produce the most consecutive primes.
function quadraticPrimes() {
  let arr = [];
  let answer;
  for (let a = -1000; a < 1000; a++) {
    for (let b = -1000; b <= 1000; b++) {
      let x = consecutivePrimes(a, b);
      if (x.length > arr.length) {
        arr = x;
        answer = [a, b];
      }
    }
  }
  return answer;
};

// Returns a Bool on weather a number is prime or not.
function isItPrime(num) {
  if (num < 0) {
    return false;
  }
	var saveTime = Math.ceil(num /2) + 1;
	for (var i = 2; i < saveTime; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};

console.log(quadraticPrimes().product());
