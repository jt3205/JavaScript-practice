/**
공항 건설하기 
Level 4

1보다 큰 N개의 도시 중 한 곳에 공항을 지을 예정입니다. 
사람들의 편의를 위해 공항으로부터 각 사람들까지의 도시간 이동 거리가 최소가 되는 도시에 짓기로 하였습니다. 
편의상 도시는 일직선상에 놓여있다고 가정하며 좌표의 범위는 음수가 포함됩니다. 
또한 좌표는 정렬되어 있지 않습니다. 
직선상의 위치와 그 도시에 사는 사람들의 수가 주어질 때, 공항을 지을 도시의 위치를 반환해주는 함수 chooseCity 함수를 완성하세요. 
거리가 같은 도시가 2개 이상일 경우 위치가 더 작은 쪽의 도시를 선택하면 됩니다. 
예를 들어 다음과 같은 정보의 도시가 있다고 가정해 봅시다.

위치		1	2	3
인구수	5	2	3
이 살 경우, 각각의 도시에 공항을 지었을 때의 사람들의 이동 거리는 8, 8, 12 이므로 1번 또는 2번에 지을 수 있지만, 1의 위치가 더 작으므로 1을 반환해주면 됩니다.


*/
function chooseCity(n,city) {
	var minMove = Number.MAX_SAFE_INTEGER;
	var answer;
	city.sort();
	for (var i = 0; i < n; i++) {
		var move = 0;
		for (var j = 0; j < n; j++) {
			move += city[j][1] * Math.abs(city[j][0]-city[i][0]);
		}
		console.log(i + ' : ' + move + ' : ' + minMove);
		if(move < minMove){
			minMove = move;
			answer = city[i][0];
		}
	}
	return answer;
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var tA = 3, tCity = [[-2,2],[3,3],[4,5]];

console.log(chooseCity(tA,tCity));

1 2 3 4
3 4 5 6
5 6 8 7