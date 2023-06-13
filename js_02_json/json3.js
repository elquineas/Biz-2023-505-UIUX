const func1 = {
  덧셈: (num1, num2) => num1 + num2,
  곱셈: (num1, num2) => num1 * num2,
  뺄셈: (num1, num2) => {
    return num1 - num2;
  },
};

console.log(func1.덧셈(100, 200));
const add = func1.덧셈(200, 500);
console.table(add);
