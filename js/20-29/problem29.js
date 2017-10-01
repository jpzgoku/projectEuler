const prototypes = require('../prototypes');

var distinctPowers = function(min, max) {
    var answer = [];

    for (let base = min; base <= max; base++) {
        for (let power = min; power <= max; power++) {
            var x = Math.pow(base, power)

            if (answer.indexOf(x) === -1) {
                answer.push(x);
            }
        }
    }
    return answer.length;
};

console.log(distinctPowers(2, 5));
console.log(distinctPowers(2, 100));


// Dosent work. Numbers get too big.
