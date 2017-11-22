/**
가장 큰 정사각형 찾기 Level 4
O와 X로 채워진 표가 있습니다. 표 1칸은 1 x 1 의 정사각형으로 이루어져 있습니다. 표에서 O로 이루어진 가장 큰 정사각형을 찾아 넓이를 반환하는 findLargestSquare 함수를 완성하세요. 예를 들어

1	2	3	4	5
X	O	O	O	X
X	O	O	O	O
X	X	O	O	O
X	X	O	O	O
X	X	X	X	X
가 있다면 정답은

1	2	3	4	5
X	O	O	O	X
X	O	*	*	*
X	X	*	*	*
X	X	*	*	*
X	X	X	X	X
가 되며 넓이는 9가 되므로 9를 반환해 주면 됩니다.
*/

function findLargestSquare(board)
{
	var dpBoard = board;
  for(var i = 0; i < dpBoard.length; i++){
  	for(var j = 0; j < dpBoard[i].length; j++){
    	dpBoard[i][j] = board[i][j] == 'O' ? 1 : 0;
    }
  }
  var size = 0;
  for(i = 1; i < dpBoard.length; i++){
  	for(j = 1; j < dpBoard[i].length; j++){
    	dpBoard[i][j] *= Math.min(dpBoard[i-1][j],dpBoard[i][j-1],dpBoard[i-1][j-1]) + 1;
      if(dpBoard[i][j] > size){
      	size = dpBoard[i][j];
      }
    }
  }
	return Math.pow(size,2);
}
 
//아래 코드는 테스트를 위한 출력 코드 입니다.
var testBoard = [['X','O','O','O','X'],['X','O','O','O','O'],['X','X','O','O','O'],['X','X','O','O','O'],['X','X','X','X','X']];
console.log(findLargestSquare(testBoard));