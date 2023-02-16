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

executar(bomDia);

console.log(x());

console.log(y);
