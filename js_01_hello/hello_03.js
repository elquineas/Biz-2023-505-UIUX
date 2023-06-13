/*
  JS의 함수 호이스팅
  고전적인 방법으로 JS의 함수를 선언하면
  실행되는 순간 함수의 위치를 재 배치한다
*/

func1();
// 기존의 JS 함수 선언하기
function func1() {
  console.log("나는 func1 함수입니다.");
}

// ES5+ 에서 JS 함수 선언하기
const func2 = function () {
  console.log("나는 func2 함수입니다.");
};
func2();
