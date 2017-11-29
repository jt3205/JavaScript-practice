function myFunction() {
	console.dir(arguments);

	//arguments.shift(); 에러 발생

	var args = Array.prototype.slice.apply(arguments);
	console.log(args);
}

myFunction(1,2,3);