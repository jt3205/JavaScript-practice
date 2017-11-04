// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
  name : 'foo',
  age : 30,
  major : 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
for (var prop in foo) {
  console.log(prop, foo[prop]);
}

/* (출력값)
name foo
age 30
major computer science
*/
