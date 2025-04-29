// Faça uma função que peça um valor e mostre na tela se o valor é positivo ou negativo.
const prompt = require('prompt-sync')() 

function positivoOUnegativo (valor){
    if(valor >= 0){
        console.log('é positivo')
    }else(valor < 0);{ 
        console.log('é negativo')
    }
}
positivoOUnegativo(30)
positivoOUnegativo(-30)