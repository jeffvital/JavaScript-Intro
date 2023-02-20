const notas = [7, 8, 3, 5, 10, 9, 8, 8];

let valores = "";

// foreach

// "of" ACESSA OS VALORES DE "notas"
for (let nota of notas) {
  valores += nota + " ";
}
console.log(valores);

let indices = "";

// "in" ACESSA OS INDICES DE "notas"
for (let indice in notas) {
  indices += indice + " ";
}

console.log(indices);
