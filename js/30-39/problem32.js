const prototypes = require('../prototypes');

var pandigitalProducts = function() {
    var pandigital = 987654321;
    var answer = [];
    for (let multiplicand = 1; multiplicand <= 9876; multiplicand++) {
        for (let multiplier = 1; multiplier <= 9876; multiplier++) {
            var product = multiplicand * multiplier;
            var concat = parseInt(multiplicand.toString() + multiplier.toString() + product.toString());
            if (concat > pandigital) {
                break;
            }
            var sortedConcat = parseInt(Number.intToArray(concat).sortBig().join(''));

            if (sortedConcat === pandigital && answer.indexOf(product) === -1) {
                answer.push(product);
            }
        }
    }
    return answer.sum();
};

console.log(pandigitalProducts());
