function average(array){
  // var sum = 0;
  // for (var i = 0; i < array.length; i++) {
  //   sum += array[i];
  // }
  // return sum/array.length;

  return array.reduce(function (a,b){return a+b;}) / array.length;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [1,2,3,4,5] ;
console.log("평균값 : " + average(testArray));
