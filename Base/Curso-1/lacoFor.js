// Estrutura de repetição - for
for (let contador = 1; contador <= 10; contador++) {
  console.log("Número atual: ", contador);
}

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 0) {
    console.log("Número par encontrado: ", numero);
  }
}

for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 > 0) {
    console.log("Número ímpar encontrado: ", numero);
  }
}

const palavra = "JavaScript";

// palavra.length retorna o tamanho da palavra
// palavra[contador] retorna a letra da palavra na posição do contador

for (let contador = 0; contador < palavra.length; contador++) {
  console.log(palavra[contador]);
}
