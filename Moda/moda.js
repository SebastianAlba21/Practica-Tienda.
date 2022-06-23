const lista1 = [1, 3, 1, 100, 1, 19];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(function (
  valorAcomulado,
  nuevoValor
) {
  return valorAcomulado[1] - nuevoValor[1];
});

const moda = lista1Array[lista1Array.length - 1];

function calcularModa(lista) {}
