let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    totalNumerosPares++;
  } else {
    totalNumerosImpares++;
  }
}

console.log("Total de números pares: " + totalNumerosPares);
console.log("Total de números ímpares: " + totalNumerosImpares);
