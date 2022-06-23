//Helpers
function esPar(numero) {
  return numero % 2 === 0;
}
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}
//Calculadora de Medianas.
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMItad1 = lista[mitad - 1];
    const personaMItad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([personaMItad1, personaMItad2]);
    return mediana;
  } else {
    const personaMItad = lista[mitad];
    return personaMItad;
  }
}
//Calculando la Mediana General.
const salarioCol = colombia.map(function (persona) {
  return persona.salary;
});

const salariosColSorted = salarioCol.sort(function (Salarya, Salaryb) {
  return Salarya - Salaryb;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediand el Top 10%.
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);
console.log({
  medianaGeneralCol,
  medianaTop10Col,
});
