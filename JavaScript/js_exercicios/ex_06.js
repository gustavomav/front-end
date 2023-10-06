// 6) Escreva uma função que informe o retorno de um investimento (montante) com
// base nos valores do capital inicial, tempo em meses e taxa de juros mensal,
// fornecidos pelo usuário.
// Use a fórmula: M = C * (1+i)t
// Onde:
// ▪ C = Capital inicial investido
// ▪ i = Taxa de juros, em percentual
// ▪ t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.


function calcularMontanteInvestimento(capitalInicial, taxaJurosMensal, tempoMeses) {
   
    if (capitalInicial < 0 || taxaJurosMensal < 0 || tempoMeses < 0) {
        return "Os valores de entrada devem ser não negativos.";    }

   
    let montante = capitalInicial * Math.pow(1 + (taxaJurosMensal / 100), tempoMeses);
    montante = parseFloat(montante.toFixed(2));
    return montante;
}

let capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
let taxaJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
let tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));

let resultado = calcularMontanteInvestimento(capitalInicial, taxaJurosMensal, tempoMeses);
console.log(`O montante do investimento é R$ ${resultado}`);
