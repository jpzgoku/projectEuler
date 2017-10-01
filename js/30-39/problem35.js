const prototypes = require('../prototypes');
const util = require('../util');

var circularPrimes = function(max) {

    // Rotate numbers and check if those rotations are prime.
    var isCircular = function(n) {
        var intArray = Number.intToArray(n);
        for (let j = 1; j < intArray.length; j++) {
            var lastDigit = intArray.splice(-1);
            intArray = lastDigit.concat(intArray);
            if (primes.indexOf(parseInt(intArray.join(''))) === -1) {
                return false;
            }
        }
        return true;
    };

    var answer = [];
    var primes = util.primes(max);

    for (let i = 0; i < primes.length; i++) {
        if (isCircular(primes[i])) {
            answer.push(primes[i]);
        }
    }
    return [
        answer.sortSmall(),
        'length: ' + answer.length
    ];
};

util.timeFunc(circularPrimes, 1000000);
