numeros = [10, 20, 30, 40];

function paraCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array); // IMPORTANTE!!
}

numeros.forEach(paraCadaElemento);

numeros.forEach(function (el) {
  console.log(el);
});


numeros.forEach(function (el, i) {
    console.log(el, i);
  });
  
  // PRIMEIRO O ELEMENTO DEPOIS O INDICE ENTÃO O ARRAY COMPLETO