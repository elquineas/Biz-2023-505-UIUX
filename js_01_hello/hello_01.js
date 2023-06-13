console.log("반갑습니다");

const num1 = 100;
const num2 = 200;
const sum = num1 + num2;
console.log(sum);
console.log(num1, num2, sum);

/*
ES5+ 에서 탄생한 interpolation 문자열
    문자열 Tamplate 라고도 부른다
    변수를 직접 문자열처럼 코딩하는 방법
SELECT * FROM [table] WHERE 학번 = #{학번}
*/
console.log(`${num1} + ${num2} =  ${sum}`);

const nation = "대한민국";
console.log(`우리나라는 ${nation} 입니다.`);

// constant 변수 한번 값을 저장하면 다시 값을 저장할수 없는 변수
let nation1 = "Korea";
console.log(nation1);
