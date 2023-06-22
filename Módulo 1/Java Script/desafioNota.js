const nota1 = 2;
const nota2 = 6;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if(media > 7) {
    console.log('Parabéns, você passou de semetre com a média de: ' + media.toFixed(0));
}
else if (media >= 5 && media <= 7){
    console.log('Infelizmente você está de recuperação, sua média foi ' + media.toFixed(0));
}
else {
    console.log('Infelizmente você está reprovado, sua média foi ' + media.toFixed(0));
}