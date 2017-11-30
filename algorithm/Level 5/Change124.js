/**
124나라의 숫자 
Level 5

1,2,4 세 개의 숫자만 쓰는 124나라가 있습니다.

124나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

10진법의 1 → 1
10진법의 2 → 2
10진법의 3 → 4
10진법의 4 → 11
10진법의 5 → 12
10진법의 6 → 14
10진법의 7 → 21
10진법의 수 N이 입력될 때, 124나라에서 쓰는 숫자로 변환하여 반환해주는 change124 함수를 완성해 보세요. 예를 들어 N = 10이면 “41”를 반환해주면 됩니다.

리턴 타입은 문자열입니다.
*/
function change124(n) {
	var answer = "0";
	var cnt = 0;
	for (var i = 1; n > cnt; i++) {
		var arr = i.toString().split('');
		var isIn = true;
		for (var j = 0; j < arr.length; j++) {
			if(['1','2','4'].indexOf(arr[j]) < 0){
				isIn = false;
			}
		}
		if(isIn){
			cnt++;
		}
	}
	return i-1;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(change124(13));