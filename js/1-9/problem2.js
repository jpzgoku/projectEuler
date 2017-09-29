const prototypes = require('../prototypes');

// Returns an array of all Fibonacci numbers less than 'n'.
var fibonacciMax = function() {
    var fibonacci = [0, 1];

    return function(n) {
        var answer;
        for (let i = 1; i < Infinity; i++) {
            if (!fibonacci[i + 1]) {
                fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
            }

            if (fibonacci[i + 1] > n) {
                answer = fibonacci.slice(0, i + 1);
                return answer;
            }
        }
    };
}();

console.log(fibonacciMax(4000000).evens().sum());
