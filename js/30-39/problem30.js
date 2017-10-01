const prototypes = require('../prototypes');
const util = require('../util');

var digitXPowers = function(power) {

    // Sets a max number to interate through.
    var max = function() {
        var m = '';
        for (let i = 0; i <= power; i++) {
            m += '9';
        }
        return parseInt(m) + 1;
    }();

    var answer = [];

    for (let int = 10; int < max; int++) {
        var intArray = Number.intToArray(int);

        for (let digit = 0; digit < intArray.length; digit++) {
            intArray[digit] = Math.pow(intArray[digit], power);
        }

        if (intArray.sum() === int) {
            answer.push(int);
        }
    }
    return answer;
};

util.timeFunc(digitXPowers(5).sum());
