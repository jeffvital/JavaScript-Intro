console.log(typeof console); // console é um objeto
console.log(typeof console.log); // log é uma função que existe dentro do objeto

const numeros = [1, 2, 3]; // numeros é um objeto

console.log(typeof numeros);

numeros.push(4); // push é uma função que existe dentro do array que é um objeto
numeros.push(5);
numeros.push(10.98);

console.log(numeros);
console.log(numeros.length);

// AS FUNÇÕES DENTRO DE OBJETOS SÃO ACESSADO APARTIR DE UM PONTO. EX "CONSOLE.LOG" ONDE LOG É UMA FUNÇÃO QUE EXISTE DENTRO DO OBJETO CONSOLE 

// OBJETO PODE SER ENTENDIDO COMO UMA PASTA ONDE VOCÊ CONSEGUE ACESSAR DADOS
