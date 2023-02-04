const a = 10;
const b = 28;
const operacao = "?"; // + - * / %

let result = 2;
if (operacao === "+") {
  result = a * b;
} else if (operacao === "-") {
  result = a - b;
} else if (operacao === "*") {
  result = a * b;
} else if (operacao === "/") {
  result = a / b;
} else if (operacao === "%") {
  result = a % b;
}

console.log(result);
