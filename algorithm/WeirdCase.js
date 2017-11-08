function toWeirdCase(s){
  var result = "";
  var words = s.split(' ');
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      if(j % 2 == 1){
        words[i][j] = words[i][j].toUpperCase();
      }
      else {
        words[i][j] = words[i][j].toLowerCase();
      }
    }
  }

  for (i = 0; i < words.length; i++) {
    result += words[i];
  }
  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + toWeirdCase("try hello world"));
