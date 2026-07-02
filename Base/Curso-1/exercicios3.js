// 1. Verificação de idade para compra de bebida

let idade = 20;

if (idade >= 18) {
  console.log("Pode comprar bebida alcoólica.");
} else {
  console.log("Venda proibida para menores de 18 anos.");
}

// 2. Saudação de acordo com a hora

let horaAtual = 15;

if (horaAtual >= 6 && horaAtual < 12) {
  console.log("Bom dia");
} else if (horaAtual >= 12 && horaAtual < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}

// 3. Número positivo, negativo ou zero

let numero = -5;

if (numero > 0) {
  console.log("Número positivo");
} else if (numero < 0) {
  console.log("Número negativo");
} else {
  console.log("Número é zero");
}

// 4. Conversão de nota em conceito

let nota = 8.5;

if (nota >= 9) {
  console.log("Conceito A");
} else if (nota >= 8) {
  console.log("Conceito B");
} else if (nota >= 6) {
  console.log("Conceito C");
} else if (nota >= 4) {
  console.log("Conceito D");
} else {
  console.log("Conceito E");
}

// 5. Número par ou ímpar com ternário

let numero2 = 7;

let resultado = numero2 % 2 === 0 ? "Par" : "Ímpar";

console.log("O número é: " + resultado);

// 6. Menu com switch-case

let opcao = 2;

switch (opcao) {
  case 1:
    console.log("Cadastrar");

    break;

  case 2:
    console.log("Listar");

    break;

  case 3:
    console.log("Sair");

    break;

  default:
    console.log("Opção inválida");

    break;
}

// 7. Validação de campo obrigatório

let email = "";

if (email === "") {
  console.log("Preencha o campo de e-mail");
} else {
  console.log("E-mail válido");
}

// 8. Validação de senha segura

let senha = "abc123";
let senhaValida = true; // valor definido previamente

if (senhaValida) {
  console.log("Senha válida");
} else {
  console.log("Senha muito curta");
}

// 9. Compra com saldo

let saldoDisponivel = 100;

let valorCompra = 80;

if (saldoDisponivel >= valorCompra) {
  console.log("Compra aprovada");
} else {
  console.log("Saldo insuficiente");
}

// 10. Validação de formulário completo

let nome = "Ana";
let email = "ana@email.com";
let idade = 25;

let formularioValido = true; // valor definido previamente

if (formularioValido) {
  console.log("Formulário enviado com sucesso");
} else {
  console.log("Por favor, preencha todos os campos corretamente");
}
