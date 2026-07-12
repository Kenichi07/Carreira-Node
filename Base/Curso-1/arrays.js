const frutas = ["Uva", "Banana", "Maçã", "Manga", "Pera"];
// uva = 0
// Pera = 4

console.log(frutas);

console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[4]);

console.log("Total de frutas:", frutas.length);

frutas.push("Melancia");

console.log("Total de frutas depois de adicionar melancia:", frutas.length);

console.log("Última fruta:", frutas[frutas.length - 1]);
