// Finds pythagorean triplets that equal 'sum'.
let findPythogoreanTriplet = (sum) => {

  let isPythagoreanTriplet = (a, b, c) => (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) ? true : false;

	let pythagoreanTriplets = [];
	for (let c = 3; c < sum ; c++) {
		for (let b = 2; b < c; b++) {
      if (c + b > sum) {
        break;
      }
			for (let a = 1; a < b; a++) {
        if (a + b + c > sum) {
          break
        }
        if (a + b + c === sum) {
          if (isPythagoreanTriplet(a, b, c)) {
  					pythagoreanTriplets.push([a, b, c]);
  				}
        }
			}
		}
	}
	return pythagoreanTriplets;
};

function integerRightTriangles(max) {
  let arr = []
  let longest = 0
  for (let i = 1; i <= max; i++) {
    let x = findPythogoreanTriplet(i)
    if (x.length > arr.length) {
      arr = x
      longest = i
    }
  }
  return longest
}

console.log(integerRightTriangles(1000));
