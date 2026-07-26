const agora = new Date();

console.log("Agora:", agora);

console.log("Ano:", agora.getFullYear());
console.log("Mês 0-11:", agora.getMonth());
console.log("Dia:", agora.getDate());
console.log("Hora:", agora.getHours());
console.log("Minutos:", agora.getMinutes());
console.log("Segundos:", agora.getSeconds());

const nascimento = new Date("2002-09-26:00:00.000Z");

console.log(nascimento);

console.log("Data formatada (BR):", nascimento.toLocaleDateString("pt-BR"));
console.log("Data formatada (US):", nascimento.toLocaleDateString("en-US"));
