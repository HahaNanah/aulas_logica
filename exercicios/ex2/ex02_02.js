//Peça dois números ao usuário e mostre qual o maior e qual o menor
const prompt = require('prompt-sync')()

let numero = Number(prompt("escolha o numero de 1 ate 10 "));
if( numero >=  6){
    console.log("é maior")
} else{
    console.log("é menor")
}