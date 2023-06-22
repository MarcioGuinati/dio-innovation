// Declaração das variáveis
const valorCombustivel = 4.69;
const mediaLitro = 12;
const kmViagem = 250;

//Divisão do KM pela MEDIA
const litrosGasto = kmViagem / mediaLitro;

//Multiplicação do LITRO pelo VALOR DO COMBUSTIVEL
const valorGasto = litrosGasto * valorCombustivel;

//IMPRIMINDO NO CONSOLE
console.log('Valor combustive: ' + valorCombustivel + '\n' +
        'Media por litro: ' + mediaLitro + '\n' +
        'Quantidade KM viagem: ' + kmViagem + '\n' +
        'Valor gasto R$: ' + valorGasto.toFixed(2));
