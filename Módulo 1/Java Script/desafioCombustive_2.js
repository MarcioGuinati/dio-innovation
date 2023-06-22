// Declaração das variáveis
const precoEtanol = 4.69;
const precoGasolina = 5.70;
const mediaLitro = 12;
const kmViagem = 280;
const tipoCombustivel = 'Etanol';

//Divisão do KM pela MEDIA
const litrosGasto = kmViagem / mediaLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosGasto * precoEtanol;
    console.log('Valor gasto R$: ' + valorGasto.toFixed(2));
} else {
    const valorGasto = litrosGasto * precoGasolina;
    console.log('Valor gasto R$: ' + valorGasto.toFixed(2));
}