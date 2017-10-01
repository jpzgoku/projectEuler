const prototypes = require('../prototypes');
const util = require('../util');

var digitCancellingFractions = function() {
    var arr = [];
    var product = 1;

    for (let numerator = 10; numerator < 100; numerator++) {
        for (let denominator = 10; denominator < 100; denominator++) {
            var fraction = numerator / denominator;

            if (fraction >= 1) {
                continue;
            }

            numerator = numerator.toString();
            denominator = denominator.toString();
            var digitCancelFraction;

            // Check for matching non-trivial digits.
            if (numerator[0] === denominator[1] && numerator[0] !== denominator[0]) {
                digitCancelFraction = parseInt(numerator[1]) / parseInt(denominator[0]);
            } else if (numerator[1] === denominator[0] && numerator[1] !== denominator[1]) {
                digitCancelFraction = parseInt(numerator[0]) / parseInt(denominator[1]);
            } else {
                continue;
            }

            if (fraction === digitCancelFraction) {
                arr.push([parseInt(numerator), parseInt(denominator)]);
                product *= fraction;
            }
        }
    }
    console.log(arr)
    return product;
};

util.timeFunc(digitCancellingFractions());
