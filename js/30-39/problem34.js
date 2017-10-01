const prototypes = require('../prototypes');

// Returns the factorial of a number without using recursion.
var factorial = function(n) {
    if (n == 0) {
        return 1;
    }
    let product = n;
    for (let i = n - 1; i > 0; i--) {
        product = product * i;
    }
    return product;
};

// Returns an array of the factorials of the digits in 'n'.
var factorialArray = function(n) {
    let answer = [];
    for (let i of (Number.intToArray(n))) {
        answer.push(factorial(i))
    }
    return answer;
};

/* Returns an array of numbers that equal the sum of the factorials of their
digits up to 'max'. */
var digitFactorials = function(max) {
    let answer = [];
    for (let i = 3; i <= max; i++) {
        if (i === factorialArray(i).sum()) {
            answer.push(factorialArray(i).sum())
        }
    }
    return answer;
};

console.log(digitFactorials(100000).sum());
