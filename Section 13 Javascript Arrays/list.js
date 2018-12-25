var todos = [];

var input = prompt("Wh at would you like to do?");

while (input !== "quit") {
	if (input === "list") {
		console.log(todos);
	} else if (input === "new") {
		var newTodo = prompt("Enter new todo?");
		todos.push(newTodo);
	}
	input = prompt("Wh at would you like to do?");
}
console.log("Thanks for using the app!"); 