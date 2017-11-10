//Object() 를 통해서 빈객체 생성
var foo = new Object();

//foo객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);  //(출력값) Object
console.log(foo);         //(출력값) {name: 'foo', age: 30, gender: 'male'}
