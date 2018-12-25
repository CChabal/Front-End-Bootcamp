//isEven

// function isEven(x) {
// 	if (x % 2 === 0) {
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }

function isEven(x) {
	return x % 2 === 0;
}

//isFactorial

function factorial(number) {
	var result = 1;
	for (var i = 2; i <= number; i++) {
		result *= i;
	}
	return result;
}

//kebabToSnake

function kebabToSnake(string) {
	var newStr = string.replace(/-/g, '_');
	return newStr;
}