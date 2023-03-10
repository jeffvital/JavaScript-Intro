function retornaArray(a, b) {
  var meuArray = [];
  for (let i = 0; i < b; i++) {
    meuArray.push(a);
  }
  return meuArray;
}

console.log(retornaArray("teste", 4));
