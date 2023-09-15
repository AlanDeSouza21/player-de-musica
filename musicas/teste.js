const b = [1, 55, 89, 97];

const valorInicial = 0;
const acumulaValor = b.reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  valorInicial
);

console.log(acumulaValor);