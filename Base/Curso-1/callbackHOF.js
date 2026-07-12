// HOF - Higher-Order Function === Função que recebe outra função como parâmetro

function calcular(numero1, numero2, operacao) {
  return operacao(numero1, numero2);
}

function soma(num1, num2) {
  return num1 + num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

const resultadoSoma = calcular(3, 8, soma);
const resultadoDivisao = calcular(10, 2, divisao);
const resultadoMultiplicacao = calcular(5, 4, multiplicacao);
const resultadoSubtracao = calcular(9, 3, subtracao);

console.log("Resultado da soma: ", resultadoSoma);
console.log("Resultado da divisão: ", resultadoDivisao);
console.log("Resultado da multiplicação: ", resultadoMultiplicacao);
console.log("Resultado da subtração: ", resultadoSubtracao);