//Print all numbers between -10 and 19

var number = -10;
console.log("Print all numbers between -10 and 19");
while (number < 20) {
	console.log("Number: " + number);
	number++;
}

//Print all even numbers between 10 and 40

var number = 10;
console.log("Print all even numbers between 10 and 40");
while (number <= 40) {
	console.log("Number: " + number);
	number+=2;
}

// while (number <= 40) {
// 	if (number % 2 === 0) {
// 		console.log("Number: " + number)
// 	}
// 	number++;
// }

//Print all odd numbers between 300 and 333

var number = 300;
console.log("Print all odd numbers between 300 and 333");
while (number <= 333) {
	if (number % 2 !== 0) {
		console.log("Number: " + number);
	}
	number++;
}

//Print all numbers divisible by 5 AND 3 between 5 and 50

var number = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while (number <= 50) {
	if (number % 5 === 0 && number % 3 === 0) {
		console.log("Number: " + number);
	}
	number++;
}