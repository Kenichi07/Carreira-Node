const num1 = 2;
const num2 = 4;
const operacao = "soma";

if (operacao === "soma") {
  console.log(num1 + num2);
} else if (operacao === "multiplicacao") {
  console.log(num1 * num2);
} else if (operacao === "subtracao") {
  console.log(num1 - num2);
} else if (operacao === "divisao") {
  console.log(num1 / num2);
} else {
  console.log("Operação não indentificada.");
}

const salario = 2000;

if (salario >= 11000) {
  console.log("3% de bônus");
} else if (salario < 11000 && salario >= 7000) {
  console.log("5% de bônus.");
} else if (salario < 7000 && salario >= 4000) {
  console.log("7% de bônus.");
} else {
  console.log("9% de bônus.");
}
