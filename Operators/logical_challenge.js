//Duas expressões resultar em TRUE (Aritméticos/Relacionais/Lógicos)
const valorV1 = true;
const valorV2 = true;

let resultadoV1 = valorV1 && valorV2;
let resultadoV2 = valorV1 || valorV2;

console.log(resultadoV1);
console.log(resultadoV2);

console.log("==============================");
// Duas expressões resultar em FALSE (Aritiméticos/Relacionais/Lógicos)
const valorF1 = false;
const valorF2 = true;

let falso1 = valorF1 && valorF2;
let falso2 = !valorF2;
console.log(falso1);
console.log(falso2);
