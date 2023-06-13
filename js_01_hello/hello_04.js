// console.log(nation);
console.log(num1);
var num1 = 100;
console.log(num1);

var num2 = 200;
if (num1 % 2 == 0) {
  var num2 = "대한민국";
  console.log(num2);
}
console.log(num2);

let nation1 = "대한민국";
const nation = () => {
  nation1 = "Republic of Korea";
};
console.log(nation1);
nation();
console.log(nation1);
