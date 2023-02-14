// function conceito(nota) {
//   switch (nota) {
//     case 10:
//       console.log("A+");
//       break;
//     case 9:
//       console.log("A");
//       break;
//     case 8:
//       console.log("B+");
//       break;
//     case 7:
//       console.log("B");
//       break;
//     case 6:
//       console.log("C+");
//       break;
//     case 5:
//       console.log("C");
//       break;
//     case 4:
//       console.log("D+");
//       break;
//     case 3:
//       console.log("D");
//       break;
//     case 2:
//       console.log("E+");
//       break;
//     case 1:
//       console.log("E");
//       break;
//     case 0:
//       console.log("F");
//       break;
//     default:
//       console.log("Nulo!");
//   }
// }

// let result = conceito(8);

// FORM COMO O PROFESSOR FEZ USANDO RETURN

function notaParaConceito(nota) {
  switch (Math.ceil(nota)) {
    case 10:
      return "A+";
    case 9:
      return "A";
    case 8:
      return "B+";
    case 7:
      return "B";
    case 6:
      return "C+";
    case 5:
      return "C";
    case 4:
      return "D+";
    case 3:
      return "D";
    case 2:
      return "E+";
    case 1:
      return "E";
    case 0:
      return "F";
    default:
      return null;
  }
}

console.log(`O conceito do Bruno e ${notaParaConceito(6)}`);
console.log(`O conceito da Lauro é ${notaParaConceito(8.9)}`);
