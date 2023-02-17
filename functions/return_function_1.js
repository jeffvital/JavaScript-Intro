function retornaUmaFuncao() {
  function bomDia() {
    return "Bom dia!!!";
  }
  return bomDia;
}

console.log(retornaUmaFuncao); // CHAMA A PRIMEIRA FUNÇÃO
console.log(retornaUmaFuncao()); // CHAMA A SEGUNDA FUNÇÃO
console.log(retornaUmaFuncao()()); // CHAMA E EXCUTA A FUNÇÃO
