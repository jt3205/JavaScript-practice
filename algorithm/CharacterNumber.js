/**
문자열 내 p와 y의 개수
Level 1

numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요.
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
예를들어 s가 "pPoooyY"면 True를 리턴하고 "Pyy"라면 False를 리턴합니다.
*/

function numPY(s){
  // var pNum = 0;
  // var yNum = 0;
  //
  // var smallP = s.match(/p/g);
  // var bigP = s.match(/P/g);
  // var smallY = s.match(/y/g);
  // var bigY = s.match(/Y/g);
  //
  // if(smallP != null)
  //   pNum += smallP.length;
  // if(bigP != null)
  //   pNum += bigP.length;
  // if(smallY != null)
  //   yNum += smallY.length;
  // if(bigY != null)
  //   yNum += bigY.length;
  //
  // return pNum == yNum;

  var alpha = [/p/gi, /y/gi];
  var num = [0, 0];
  for (var i = 0; i < alpha.length; i++) {
    if (s.match(alpha[i]) != null) {
      num[i] += s.match(alpha[i]).length;
    }
  }
  return num[0] == num[1];
}

//
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(numPY("pPoooyY"));
console.log(numPY("Pyy"));
