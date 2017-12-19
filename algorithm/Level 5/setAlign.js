var answer = [];
function setAlign(n, k) {
  var array = [];
  for(var i = 0; i <= k; i++){
    answer.push(i+1);
  }
  return answer;
}

function loop(arr, depth) { 
  if (depth == arr.length) { // 한번 depth 가 k로 도달하면 사이클이 돌았음. 출력함. 
    answer.push(arr);
    return; 
  } 
  for (var i = depth; i < n; i++) {
    arr[i] = [arr[depth], arr[depth] = arr[i]][0];
    perm(arr, depth + 1);
    arr[i] = [arr[depth], arr[depth] = arr[i]][0];
  }
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
console.log(setAlign(3, 6));