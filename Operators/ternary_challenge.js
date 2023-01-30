const a = 8;
const b = 4;
const operacao = "/";

const result =
  operacao === "+"
    ? a + b
    : operacao === "-"
    ? a - b
    : operacao === "*"
    ? a * b
    : a / b;

console.log(result);
