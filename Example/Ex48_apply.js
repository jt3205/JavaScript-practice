function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);