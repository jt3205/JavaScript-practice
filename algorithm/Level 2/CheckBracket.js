/**
괄호 확인하기
Level 2

is_pair함수는 문자열 s를 매개변수로 입력받습니다.
s에 괄호가 알맞게 짝지어져 있으면 True를 아니면 False를 리턴하는 함수를 완성하세요.
예를들어 s가 "(hello)()"면 True이고, ")("이면 False입니다.
s가 빈 문자열("")인 경우는 없습니다.
*/

function is_pair(s){
  var str = '';
  for (var i = 0; i < s.length; i++) {
    if(s[i] == '(' || s[i] == ')')
      str += s[i];
  }
  var check = 0;
  for (i = 0; i < str.length; i++) {
    check += str[i] == '(' ? 1 : -1;
    if(check < 0)
      return false;
  }
  if(check != 0)
    return false;
  return true;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( is_pair('(((A)(A))(A))') );
console.log( is_pair(')()') );
