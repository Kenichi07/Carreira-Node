// Comentário em linha
/*
Formas diferentes de criar variáveis em JavaScript:
1 - Variavel Global (não recomendada, pode causar problemas de escopo e conflitos de nomes) (não pode ser referenciada antes de ser declarada)
2 - var (antiga, não recomendada) (pode ser referenciada antes de ser declarada, mas seu valor será undefined)
3 - let (recomendada para variáveis que podem mudar de valor) (não pode ser referenciada antes da inicialização) 
4 - const (recomendada para variáveis que não mudam de valor) (não pode ser referenciada antes da inicialização) 
*/
idade = 23;

console.log("Minha idade é: " + idade);

idade = 24;

console.log("Minha idade depois do aniversário é: " + idade);
