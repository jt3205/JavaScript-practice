function setAlign(n, k) {
    var answer = [];
    var numList = [];

    for(var i = 1; i <= n; i++) {
        numList.push(i);
    }

    // 배열 객체를 복사
    var caseNumbs = Object.assign([], numList);

    for (var i = caseNumbs.length; i > 1; i--) {
        var num = caseNumbs.reduce(function (b, c) { return b * c; });  // 자리수에 해당 하는 경우의 수
        console.log((answer.length + 1) + "번째: numList[" + (Math.ceil(k / (num / caseNumbs.length)) - 1) % caseNumbs.length + "] = " + numList[(Math.ceil(k / (num / caseNumbs.length)) - 1) % caseNumbs.length]);
        answer.push(numList.splice((Math.ceil(k / (num / caseNumbs.length)) - 1) % caseNumbs.length, 1));   // 지정된 숫자를 배치
        caseNumbs.pop();    // 자리 수가 뒤로 갈 수록 경우의 수 범위 축소
    }

    answer.push(numList);   // 마지막에 남은 숫자를 추가.
    console.log(answer.length + "번째: numList[" + answer.length + "] = " + numList);

    return answer.map(function (v) {
        return v[0];    // 하나의 원소를 가진 2차원 배열을 1차원 배열로 바꿈
    });
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(setAlign(4, 8));