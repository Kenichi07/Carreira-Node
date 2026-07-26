let pessoa = {
  nome: "Kenichi",
  idade: 30,
  profissao: "Desenvolvedora",
};

const pessoa2 = { ...pessoa };

pessoa2.idade = 25;

console.log(pessoa);
console.log(pessoa2);

pessoa = {
  ...pessoa2,
  profissao: "Desenvolvedora Senior",
};

console.log(pessoa);

const { nome, ...restante } = pessoa;

console.log(nome);
console.log(restante);
