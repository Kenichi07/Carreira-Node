// 1. Lista de nomes

let nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// 2. Adicionar e remover itens

let frutas = ["maçã", "banana", "laranja"];

console.log("Antes:", frutas);

frutas.push("abacaxi"); // adiciona no final

frutas.shift(); // remove o primeiro

console.log("Depois:", frutas);

// 3. Contar itens do array

let cidades = ["Lisboa", "Porto", "Coimbra"];

console.log("Total de cidades: " + cidades.length);

// 4. Somar todos os números

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log("Soma total: " + soma);

// 5. Média de notas

let notas = [7, 8, 6, 9];

let somaNotas = 0;

for (let nota of notas) {
  somaNotas += nota;
}

let media = somaNotas / notas.length;

if (media >= 7) {
  console.log("Aprovado com média: " + media);
} else {
  console.log("Reprovado com média: " + media);
}

// 6. Mensagens com forEach

let usuarios = ["Laura", "Rafa", "Tiago"];

usuarios.forEach(function (usuario) {
  console.log("Olá, " + usuario + "!");
});

// 7. Descontos com map

let precos = [100, 200, 300];

let comDesconto = precos.map(function (preco) {
  return preco * 0.9;
});

console.log("Preços com 10% de desconto:", comDesconto);

// 8. Filtrar maiores de idade

let idades = [12, 18, 25, 16, 30];

let maiores = idades.filter(function (idade) {
  return idade >= 18;
});

console.log("Maiores de idade:", maiores);

// 9. Carrinho de compras

let carrinho = [50, 30, 20];
let total = 0;

for (let preco of carrinho) {
  total += preco;
}

let totalComDesconto = total * 0.8;

console.log("Total com desconto de 20%: R$ " + totalComDesconto);

// 10. Lista de tarefas

let tarefas = [
  "Estudar",
  "Lavar a louça",
  "Ir ao mercado",
  "Caminhar",
  "Dormir",
];
let concluida = [false, true, false, true, false];

let tarefasPendentes = tarefas.filter(function (tarefa, index) {
  return concluida[index] === false;
});

console.log("Tarefas pendentes:", tarefasPendentes);
