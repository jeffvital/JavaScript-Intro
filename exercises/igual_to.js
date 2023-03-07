function test(minimo, maximo, numero, inclusivo = false) {
  if (inclusivo) {
    return numero >= minimo && numero <= maximo;
  } else {
    return numero > minimo && numero < maximo;
  }
}

console.log(test(10, 100, 50));

// function estaEntre(minimo, maximo, numero, inclusivo = false) {
//   if (inclusivo) return numero >= minimo && numero <= maximo;
//   return numero > minimo && numero < maximo;
// }

// console.log(estaEntre(10, 100, 50));
