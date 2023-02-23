function criarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const data1 = criarData(9, 10, 2042);
const data2 = criarData(10, 11, 2060);
const data3 = criarData(12, 7, 2023);
const data4 = criarData(1, 2, 2022);

console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());
console.log(data4.exibir());
