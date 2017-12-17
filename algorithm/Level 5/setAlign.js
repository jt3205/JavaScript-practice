function setAlign(n, k) {
	var answer = [];
  var array = [];
  for(var i = 0; i <= k; i++){
  	array.push(i+1);
  }
  console.log(array);
	var factN = factorial(n);
  while(answer.length != factN-1){
  	var temp = shuffleArray(array);
    console.log(temp);
    if(answer.indexOf(temp) == -1){
    	answer.push(temp);
    }
  }
	return answer;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  	return array;
}

var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
} 

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(setAlign(3, 1));