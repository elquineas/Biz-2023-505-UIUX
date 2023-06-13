let num1 = 100;
let num2 = 200;

console.log(`${num1} + ${num2} = ${num1 + num2}`);

num1 = "우리나라";
num2 = "대한민국";

console.log(`${num1} + ${num2} = ${num1 + num2}`);

function func1() {
  let num3 = 100;
  let num4 = 200;
  console.log(num3 + num4);
}
func1();

let num5 = 100;
let num6 = 200;
function func2() {
  console.log(num5 + num6);
}
func2();

//var : 초기 js 탄생시점에서 만들어진 키워드
function func3() {
  var num7 = 300;
  var num8 = 400;
  console.log(num7 + num8);
}
