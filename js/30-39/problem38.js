const prototypes = require('../prototypes');
const util = require('../util');

var pandigitalMultiples = function() {
    var pandigital = '123456789';
    var answer = [];

    for (let i = 2; i < 10000; i++) {
        var numString = i.toString();
        for (let j = 2; j < 10; j++) {
            numString += (i * j).toString();

            // Check for lenght and check for if its a pandigital.
            if (numString.length > 9) {
                break;
            } else if (numString.length === 9) {
                if (Number.intToArray(parseInt(numString)).sortSmall().join('') === pandigital) {
                    answer.push(parseInt(numString));
                } else {
                    break;
                }
            }
        }
    }
    return answer.max();
};

console.log(pandigitalMultiples());
