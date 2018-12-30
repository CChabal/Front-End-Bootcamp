//printReverse

console.log("Hello")

function printReverse() {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

function printReverse1() {
	array.reverse();
	array.forEach(function(element) {
		console.log(element)
	});
}

//isUniform

function isUniform() {
	var compare = array[0];
	for (var i = 1; i < array.length; i++) {
		if (compare !== array[i]) {
			return false;
		}
	}
	return true;
}

//isUniform with forEach isn't optimal. 

//sumArray

function sumArray() {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function sumArray1() {
	var sum = 0;
	array.forEach(function(i) {
		sum += i;
	});
	return sum;
}

//max

function max() {
	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] > max) {
			max = array[i];
		}
	}
	return max;
}

function max1() {
	var max = array[0];
	array.forEach(function(i) {
		if (i > max) {
			max = i;
		}
	});
	return max;
}