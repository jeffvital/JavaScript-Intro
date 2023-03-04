function inverse(valor) {
  const tipo = typeof valor;
  if (tipo == "boolean") {
    return !valor;
  } else if (tipo == "number") {
    return -valor;
  } else return `Boolean ou número esperado, mas o parâmetro é do tipo ${tipo}`;
}

console.log(inverse(2));
