function Person(name) {
	this.name = name;
}

console.log(Person.prototype.constructor);

var foo = new Person('foo');
console.log(foo.country);

Person.prototype = {
	country: 'korea'
};
console.log(Person.prototype.constructor);

var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);