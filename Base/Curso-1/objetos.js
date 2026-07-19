const pessoa = {
  nome: "Ana",
  idade: 23,
  temCNH: true,
};

pessoa.sobrenome = "Paula";

// console.log("Nome:", pessoa.nome);
// console.log("Nome:", pessoa.sobrenome);

const livro = {
  titulo: "O Hobbit",
  paginas: 310,
};

livro.publicado = true;
livro.idiomas = ["Inglês, Português, Espanhol"];

livro.idiomas.push("Mandarim");
livro.idiomas.push("Francês");

console.log("Livro antes:", livro);

delete livro.paginas;

console.log("Livro depois:", livro);

console.log("Autor do livro:", livro["autor"]);
console.log("Editora do livro:", livro["editora"]);

const autor = {
  nome: "J. R. R. Tolkien",
  nacionalidade: "Britanico",
  idade: 98,
  livros: [livro],
};

console.log("Autor:", autor);

livro.autor = autor;

console.log("Livro depois:", livro);

livro.autor.nome;
livro.autor.nacionalidade;
