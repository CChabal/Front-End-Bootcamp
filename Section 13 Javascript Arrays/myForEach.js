// function myForEach(arr, func) {
// 	//loop through the array
// 	for(var i = 0; i < arr.length; i++) {
// 		//call func on each element in the array
// 		func(arr[i ]);
// 	}
// };

Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}