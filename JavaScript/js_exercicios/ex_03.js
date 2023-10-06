
// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor,
// o maior valor e a soma dos valores.


let n = parseInt(prompt("Quantos números você deseja inserir?"));
let numeros = [];

for (let i = 0; i < n; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
}

let menorValor = Math.min(...numeros);
let maiorValor = Math.max(...numeros);
let somaValores = numeros.reduce((a, b) => a + b, 0);

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Soma dos valores: ${somaValores}`);
