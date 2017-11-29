function Person(name) {
	this.name = name;
}

var foo = new Person('foo');

//foo.sayHello();		// 에러 발생!

Person.prototype.sayHello = function() {
	console.log('Hello');
};

foo.sayHello();