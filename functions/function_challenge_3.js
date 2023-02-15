// const nota1 = 7;
// const nota2 = 7;
// const nota3 = 7;
// let menorNota = 0;
// let mediaDasNotas;

// // AQUI DESCOBRIMOS A MENOR NOTA
// if (nota1 < nota2) {
//   menorNota = nota1;
// } else if (nota2 < nota3) {
//   menorNota = nota2;
// } else menorNota = nota3;

// console.log(`MENOR NOTA: ${menorNota}`);

// // AQUI FAZEMOS A MÉDIA DAS NOTAS EXCLUINDO A MENOR NOTA
// if (menorNota !== nota1 && nota2) {
//   mediaDasNotas = nota1 + nota2;
//   mediaDasNotas = mediaDasNotas / 2;
// } else if (menorNota !== nota2 && nota3) {
//   mediaDasNotas = nota2 + nota3;
//   mediaDasNotas = mediaDasNotas / 2;
// } else if (menorNota !== nota1 && nota3) {
//   mediaDasNotas = nota1 + nota3;
//   mediaDasNotas = mediaDasNotas / 2;
// } else if (((menorNota !== nota1) !== nota2) !== nota3) {
//   mediaDasNotas = nota1 + nota2 + nota3;
//   mediaDasNotas = mediaDasNotas / 3;
// }

// console.log(`MÉDIA: ${mediaDasNotas}`);

// if (mediaDasNotas >= 7) {
//   console.log("APROVADO!");
// } else if (mediaDasNotas < 7 && mediaDasNotas >= 4) {
//   console.log("RECUPERAÇÃO!");
// } else {
//   console.log("REPROVADO!");
// }

// RESOLUÇÃO DO PROFESSOR

const nota1 = 7.8;
const nota2 = 8.1;
const nota3 = 2.7;

function minimo(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}

console.log(minimo(nota1, minimo(nota2, nota3)))