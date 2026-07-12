// nome é um parametro da função saudacao
// function saudacao(nome) {
//   console.log("Olá,", nome);
// }

// const saudacao = (nome) => {
//   console.log("Olá,", nome);
// };

const saudacao = nome => console.log("Olá,", nome);

saudacao("Vinicius"); //Vinicius é o "argumento" passado para a função saudacao
saudacao("Miyuki");

// function calcularDobro(numero) {
//   return numero * 2;
// }

// const calcularDobro = (numero) => {
//   return numero * 2;
// };

const calcularDobro = numero => numero * 2;

const numeroDobrado = calcularDobro(4);

console.log("O dobro de 4 é:", numeroDobrado);
