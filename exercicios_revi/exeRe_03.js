//Faça um algoritmo que receba 2 números inteiros armazenando-os em variáveis e exiba a divisão entre eles no console.
const prompt = require('prompt-sync')()

let num1 = Number(prompt('qual o primeiro numero'))
let numb2 = Number(prompt('qual o segundo numero'))
let divisao = num1 / numb2

console.log(`a divisão de ${num1} e ${numb2} é ${divisao}`)
