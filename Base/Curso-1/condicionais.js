const idade = 17;

// if (idade >= 18) {
//   console.log("É maior de idade.");
// } else {
//   console.log("É menor de idade.");
// }

idade >= 18
  ? console.log("É maior de idade.")
  : console.log("É menor de idade.");

// if (idade < 18) {
//   console.log("É menor de idade.");
// }

// entre 9 e 10: excelente
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 0 e 3: ruim

const nota = 10;

// if (nota >= 9) {
//   console.log("Excelente");
// } else if (nota >= 7) {
//   console.log("Bom");
// } else if (nota >= 4) {
//   console.log("Médio");
// } else {
//   console.log("Ruim");
// }

nota >= 9
  ? console.log("Excelente")
  : nota >= 7
    ? console.log("Bom")
    : nota >= 4
      ? console.log("Médio")
      : console.log("Ruim");
