// 1 - Supondo que a população de um país A seja da ordem de 80000 habitantes com
// uma taxa anual de crescimento de 3% e que a população de B seja 200000
// habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
// calcule e escreva o número de anos necessários para que a população do país A
// ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.


let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA *= 1.03; // Aumento de 3% na população A
    populacaoB *= 1.015; // Aumento de 1.5% na população B
    anos++;
}

console.log(`Levará ${anos} anos para a população do país A ultrapassar a população do país B.`);
