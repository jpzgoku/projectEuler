var pythogoreanTriplet = (sum) => {

	let isPythagoreanTriplet = (a, b, c) => (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) ? true : false;
	let findCorrectSum = (a, b, c, sum) => (a + b + c === sum) ? true : false;

	var pythagoreanTriplets = [];
	for (var c = 3; c < sum ; c++) {
		for (var b = 2; b < c; b++) {
			for (var a = 1; a < b; a++) {
				if (isPythagoreanTriplet(a, b, c) && findCorrectSum(a , b , c, sum)) {
					pythagoreanTriplets.push([a, b, c]);
				}
			}
		}
	}
	console.log(pythagoreanTriplets);
	return pythagoreanTriplets;
};

let pythagoreanTripletProducts = (array) => {
	let answer = []
	array.forEach( (element) => answer.push(element[0] * element[1] * element[2]) );
	return answer;
};

console.log(pythagoreanTripletProducts(pythogoreanTriplet(1000)));
