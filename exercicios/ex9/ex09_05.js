//Crie uma função que recebe um número como parâmetro e exiba a tabuada até o
//10, chame essa função por 3 vezes enviando parâmetros diferentes
const prompt = require('prompt-sync')()

function tabuadaN(numeros){
    for (let i = 0; i <= 10; i++){
        console.log(`${numeros} vezes ${i} é igual a ${numeros*i}`)
    }
    }
tabuadaN(numeros = Number(prompt('digite um numero da taboada até 10')))

