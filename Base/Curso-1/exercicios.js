let nome = "Vinicius Huang";

console.log("Olá, " + nome + "! Seja bem-vindo ao curso de JavaScript.");

let anoAtual = 2026;
let anoNascimento = 2002;

console.log("Você tem " + (anoAtual - anoNascimento) + " anos.");

let cidade = "São Paulo";
let estado = "SP";
let pais = "Brasil";

console.log("Você está na " + cidade + "-" + estado + ", " + pais + ".");

let temCarteira = true;

console.log(typeof temCarteira);

let saldo = 0;

saldo += 200; // depósito
saldo -= 50; // saque
console.log("Saldo final: R$" + saldo);

let salario = 3000;
let novoSalario = salario * 1.1; // aumento de 10%
console.log("Após um aumento de 10%, o novo salário é R$" + novoSalario);

let matematica = 8;
let portugues = 7;
let ciencias = 9;

console.log(
  "Média final das notas: " + (matematica + portugues + ciencias) / 3,
);

let cliques = 0;

cliques++;
cliques++;
cliques++;
console.log("O botão foi clicado " + cliques + " vezes.");

let mensagem = "O número é ";
let numero = 42;
let combinado = mensagem + numero;

console.log(combinado); // "O número é 42"
console.log(typeof combinado); // string

const pi = 3.14;
pi = 3.14159; // Isso vai gerar um erro, pois 'pi' é uma constante.

console.log("O valor de pi é: " + pi);
console.log("Isso vai gerar um erro, pois 'pi' é uma constante.");
