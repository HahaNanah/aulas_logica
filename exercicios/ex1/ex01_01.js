// ler dois numeros e mostrar a soma deles
const prompt = require('prompt-sync')()

let test = Number(prompt('digite um numero'))
let test2 = Number(prompt('digite um numero'))
let numb1 = test + test2
console.log(`se somar ${test} + ${test2} o resultado sera ${numb1}`)
