//Ler dois números inteiros e informar se estes são iguais ou diferentes.
const prompt = require('prompt-sync')();

let numero = Number(prompt("qual o numero"));
let numero2 = Number(prompt("qual o numero"));
if( numero == numero2){
    console.log("igual")
} else{
    console.log("diferente")
}