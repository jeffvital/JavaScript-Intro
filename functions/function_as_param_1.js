function executar(funcao) {
  if (typeof funcao === "function") {
    console.log(funcao());
  }
}

function bomDia() {
  return "Bom dia!";
}

const x = bomDia; // atribui a função a x

const y = bomDia(); // aqui a função foi executada então o valor de y é a string "Bom dia!"

executar(bomDia); // aqui passa a função como parâmetro.

console.log(x()); // "x" teve a função bomDia atribuida a ela tornando-se também uma função.

console.log(y); // y nesse teve o conteúdo da função bomDia atribuida a ela que nesse caso é "Bom dia!"
