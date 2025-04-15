//Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']

let nr1 = prompt("Qual a palavra?")
let qtdvogais = 0
for(let letra of nr1){
    if(vogais.includes(letra)){
        qtdvogais++
    }
}
console.log(`${nr1} tem ${qtdvogais} vogais`)


