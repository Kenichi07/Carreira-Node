const pessoa = {
  nome: 'Kenichi',
  idade: 24,
  profissao: 'Desenvolvedor',
}

// console.log(pessoa.nome)
// console.log(pessoa.idade)

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome, idade }) {
  console.log('Ola', nome)
  if (idade >= 18) {
    console.log('Você é maior de idade')
  }
}

saudacao(pessoa)

const frutas = ['Uva', 'Banana']

const [primeira, segunda] = frutas

// const primeira = frutas[0]
// const segunda = frutas[1]