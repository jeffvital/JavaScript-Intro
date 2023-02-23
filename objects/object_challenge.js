const data = {
  dia: "10",
  mes: "4",
  ano: "1994",
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data.exibir());
