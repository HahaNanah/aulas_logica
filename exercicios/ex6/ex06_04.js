//Solicite os parâmetros de início, fim e passo para o laço de repetição usando a função for() e
//exiba o valor atual da variável de controle a cada iteração.
const prompt = require('prompt-sync')()

let inicio = Number(prompt('digite o valor'))
let fim = Number(prompt('digite o valor do fim'))
let passo = Number(prompt('digite o valor do passo'))

for(inicio; inicio < fim; inicio += passo){
    console.log(`Valor inicial: ${inicio}`)
    console.log(`Valor final: ${fim} `)
    console.log(`===========================`)
}


