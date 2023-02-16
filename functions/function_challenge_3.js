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
const nota2 = 3.1;
const nota3 = 7;

// AQUI DESCOBRIMOS A MENOR NOTA DAS TRÊS FORNECIDAS.
function minimo(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}

// AQUI FAZEMOS A MÉDIA EXCLUINDO A MENOR DAS TRÊS NOTAS FORNECIDAS.
function mediaDuasMaiores(n1, n2, n3) {
  const menorNota = minimo(n1, minimo(n2, n3));

  if (menorNota === n1) {
    return (n2 + n3) / 2;
  } else if (menorNota === n2) {
    return (n1 + n3) / 2;
  } else {
    return (n1 + n2) / 2;
  }
}

// STATUS DA MEDIA
function mediaParaStatus(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 4) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

const mediaFinal = mediaDuasMaiores(nota1, nota2, nota3);
const statusFinal = mediaParaStatus(mediaFinal);
console.log(`O resultado final do aluno é: ${statusFinal}`);
