let pythogoreanTriplet = function(sum) {
	let pythagoreanTriplets = [];
	for (let c = 3; c < sum ; c++) {
		for (let b = 2; b < c; b++) {
			for (let a = 1; a < b; a++) {
				if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) && a + b + c === sum) {
					pythagoreanTriplets.push([a, b, c]);
				}
			}
		}
	}
	console.log(pythagoreanTriplets);
	return pythagoreanTriplets;
};

let pythagoreanTripletProducts = function(array) {
	let answer = []
	array.forEach( element => answer.push(element[0] * element[1] * element[2]) );
	return answer;
};

console.log(pythagoreanTripletProducts(pythogoreanTriplet(1000)));
