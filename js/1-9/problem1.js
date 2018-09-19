const Prototypes = require('../prototypes');

// let mulOf3And5 = function(n) {
//     let answer = 0;
//     for (let i = 1; i < n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             answer += i;
//         }
//     }
//     return answer;
// };

let multipleOf = function(maxNum, multiples, currentNum=1, numbers=[]) {

	if (maxNum === currentNum) {
		return numbers;
	}

	if (multiples.filter(multiple => currentNum % multiple === 0).length) {
		numbers.push(currentNum);
	}

	return multipleOf(maxNum, multiples, currentNum + 1, numbers);
}

console.log(multipleOf(1000, [3,5]).sum());
