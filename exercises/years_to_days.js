function anosParaDias(idadeEmAnos) {
  const diasEmUmAno = 365;

  return (result = diasEmUmAno * idadeEmAnos);
}

function diasParaHoras(dias) {
  let dayHour = 24;
  return dias * dayHour;
}

console.log(anosParaDias(30));

console.log(diasParaHoras(result));
