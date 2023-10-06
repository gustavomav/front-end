
// 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo
// com o raio fornecido.


function calcularAreaEPerimetroDoCirculo(raio) {    
    if (raio < 0) {
        return "O raio deve ser um valor não negativo.";
    }

    let area = Math.PI * Math.pow(raio, 2);

    let perimetro = 2 * Math.PI * raio;

    return {
        area: area,
        perimetro: perimetro
    };
}


let raio = 5;
let resultado = calcularAreaEPerimetroDoCirculo(raio);
console.log(`Área do círculo: ${resultado.area.toFixed(2)}`);
console.log(`Perímetro do círculo: ${resultado.perimetro.toFixed(2)}`);
