function primeiroEUltimo(arr) {
  return [arr[0], arr[arr.length - 1]];
}

const arr = [1, 2, 3, 4, 5];

const resultado = primeiroEUltimo(arr);
console.log(resultado);
