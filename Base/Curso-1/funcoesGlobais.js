function saudacao() {
  console.log("E aí!");
}

// setTimeout(saudacao, 2000); // Executa a função saudacao após 2 segundos (2000 milissegundos)

let contador = 0;

const id = setInterval(() => {
  contador++;
  console.log("Tempo decorrido (em segundos): ", contador);
  if (contador === 10) {
    clearInterval(id);
  }
}, 1000);
