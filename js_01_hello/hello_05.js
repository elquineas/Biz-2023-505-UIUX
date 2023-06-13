let sum = 0;
var rndNum = [];
for (let i = 0; i < 10; i++) {
  sum += i + 1;

  // Math.random() * (MAX - MIN) + MIN;
  let num = Math.random() * (100 - 50) + 50;
  num = Math.floor(num);
  rndNum.push(num);
}
console.log(sum);

console.table(rndNum);

rndNum.forEach((item, index) => {
  console.log(`${index}번 item ${item}`);
});

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const strs = ["대한민국", "Korea", "Republoc", 1, 2];

strs[1] = "한국";
strs[20] = "추가";
console.table(strs);
console.log(strs[6]);

strs.forEach((item, index) => {
  if (item) {
    console.log(`${index} => ${item}`);
  } else if (!item) {
    console.log("없음");
  }
});
