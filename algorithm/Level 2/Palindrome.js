/**
가장 긴 팰린드롬 
Level 2

앞뒤를 뒤집어도 똑같은 문자열을 palindrome이라고 합니다.
longest_palindrom함수는 문자열 s를 매개변수로 입력받습니다.
s의 부분문자열중 가장 긴 palindrom의 길이를 리턴하는 함수를 완성하세요.
예를들어 s가 "토마토맛토마토"이면 7을 리턴하고 "토마토맛있어"이면 3을 리턴합니다.
*/
function longest_palindrom(s){
  var result = 0;
  // 함수를 완성하세요
  for (var i = 0; i < s.length-1; i++) {
  	// 팰린드롬이 홀수일 경우
  	var left = i-1;
  	var right = i+1;
  	var pal_length = 1;
  	while(s[left] != undefined && s[left] === s[right]){
  		pal_length += 2;
  		left--;
  		right++;
  	}
  	if(pal_length > result)
  		result = pal_length;

  	// 팰린드롬이 짝수 or 0 일 경우
  	pal_length = 0;
  	left = i;
  	right = i+1;
  	while(s[left] === s[right]){
  		pal_length += 2;
  	}
  }
  if(pal_length > result)
  		result = pal_length;

  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( longest_palindrom("토마토맛토마토") );
console.log( longest_palindrom("토마토맛있어") );