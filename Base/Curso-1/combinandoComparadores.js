const idade = 18;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH; // AND (Tem que atender as duas condições)

console.log("Pode dirigir? ", podeDirigir);

const podeViajarSozinha = maiorIdade || possuiCNH; // OR (Tem que atender apenas uma das condições)

console.log("Pode viajar sozinha? ", podeViajarSozinha);

const precisaDeAcompanhante = !maiorIdade; // NOT (Negando a condição)

console.log("Precisa de acompanhante? ", precisaDeAcompanhante);
