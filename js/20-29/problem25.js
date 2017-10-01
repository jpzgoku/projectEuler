const prototypes = require('../prototypes');

// Returns an array of all Fibonacci numbers less than 'n'.
let fibonacciMax = function() {
    let fibonacci = [0, 1];

    return function(n, digits) {
        let answer;
        for (let i = 1; i < Infinity; i++) {
            if (!fibonacci[i + 1]) {
                fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
            }

            if (fibonacci[i + 1] > n) {
                answer = fibonacci.slice(0, i + 1);
                return answer;
            }

            if (fibonacci[i + 1].toString().length >= digits) {
                return fibonacci.length - 1;
            }
        }
    };
}();

console.log(fibonacciMax(Infinity, 80));

// Can't be done with JS. Numbers get too big.
