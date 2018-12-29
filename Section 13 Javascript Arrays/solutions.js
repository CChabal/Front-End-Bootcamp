//printReverse

console.log("Hello")

function printReverse() {
	for (var i = array.length; i > 0; i--) {
		console.log(i);
	}
}

//isUniform

function isUniform() {
	var compare = array[0];
	for (var i = 0; i < array.length; i++) {
		if (compare !== array[i]) {
			return false;
		}
	}
	return true;
}

//sumArray

function sumArray() {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

//max

function max() {
	var max = array[0];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}