//Utilizando o comando while, exiba todos os números pares, de 1 a 20.
const prompt = require('prompt-sync')()
let p1 = 2
while ( p1 <= 20){
    console.log(`contagem regressiva: ${p1}`)
   p1 = p1 + 2
}
console.log ('FIM');

//correção

let i = 1;

while(i <= 20){
    if(i % 2 == 0){
        console.log(` ${i} é par`)
    }
    i++; 
}