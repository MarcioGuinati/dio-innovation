const altura = 1.70;
const peso = 115;

const imc = peso / Math.pow(altura, 2); //Pow é uma função do Math, basicamente o Math é uma biblioteca


if (imc < 18.5) {
    console.log('Abaixo do peso, seu IMC é: ' + imc);
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal, seu IMC é: ' + imc);
}
else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso, seu IMC é: ' + imc);
}
else if (imc >= 30 && imc < 40) {
    console.log('Obeso, seu IMC é: ' + imc);
}
else {
    console.log('Acima da obesidade, grave, seu IMC é: ' + imc);
}