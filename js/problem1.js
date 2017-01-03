var sum = 0;

for (var i = 0; i < 1000; i++) {
	var divBy3 = i % 3;
	var divBy5 = i % 5;
	if (divBy3 === 0) {
		sum = sum + i;
	}
	if (divBy3 !== 0 && divBy5 === 0) {
		sum = sum + i;
	}
};

var grandTotal = sum;
console.log(grandTotal)


