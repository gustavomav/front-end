
// 4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao
// dobro do percentual do ano anterior. Faça um programa que determine o
// salário atual desse funcionário. Após concluir isto, altere o programa
// permitindo que o usuário digite o salário inicial do funcionário.


let salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

let ano = 1995;
let salarioAtual = salarioInicial;


for (ano = 1996; ano <= 2023; ano++) {
   
    let aumentoPercentual = (ano === 1996) ? 1.5 : (aumentoPercentual * 2);  
    let aumento = salarioAtual * (aumentoPercentual / 100);   
    salarioAtual += aumento;
}

console.log(`O salário atual do funcionário em 2023 é de R$ ${salarioAtual.toFixed(2)}`);
