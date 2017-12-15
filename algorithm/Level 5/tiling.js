/*
1	2	3	4	5	6

1	2	3	5	8	13
피보나치네
*/
function tiling(n) {
	var answer = 1;
	var num1 = 1;
  var num2 = 1;
  for(var i = 1; i < n; i++){
  	num1 = num2;
    num2 = answer;
    answer = (num1+num2)%100000;		//마지막에만 나누려했는데 var 범위 넘어가는듯? 이상해짐
  } 
	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(tiling(9));