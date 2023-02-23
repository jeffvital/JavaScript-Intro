const data = {
  dia: "10",
  mes: "4",
  ano: "1994",
  exibir: function () {
    return console.log(`${this.dia}/${this.mes}/${this.ano}`);
  },
};

data.exibir();
