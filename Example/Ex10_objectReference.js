var objA = {
  val : 40
};
var objB = objA;

console.log(objA.val);  // (출력값) 40
console.log(objB.val);  // (출력값) 40

objB.val = 50;
console.log(objA.val);  // (출력값) 50
console.log(objB.val);  // (출력값) 50
