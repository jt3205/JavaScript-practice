// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
  name : 'foo',
  nickname : 'babo'
};

console.log(foo.nickname);
delete foo.nickname;      //프로퍼티는 삭제가능
console.log(foo.nickname);

delete foo;               //하지만 객체 자체는 삭제불가
console.log(foo.name);
console.log(foo);
