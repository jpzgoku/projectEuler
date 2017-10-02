const prototypes = require('../prototypes');
const util = require('../util');

var truncatablePrimes = function(max) {
    var primes = util.primes(max);

    var isTruncateable = function(num) {
        // Remove first digits
        for (var i = 1; i < num.toString().length; i++) {
            if (primes.indexOf(parseInt(num.toString().slice(i))) === -1) {
                return false;
            }
        }
        // Remove last digits
        for (var j = -1; j > num.toString().length * -1; j--) {
            if (primes.indexOf(parseInt(num.toString().slice(0, j))) === -1) {
                return false;
            }
        }
        return true;
    };

    var numOfTruncatablePrimes = 11;
    var answer = [];

    for (var i = 4; i < primes.length; i++) {
        if (isTruncateable(primes[i])) {
            answer.push(primes[i]);
        }
        if (answer.length === numOfTruncatablePrimes) {
            return answer.sum();
        }
    }
};

util.timeFunc(truncatablePrimes, [1000000]);
