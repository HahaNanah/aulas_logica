//Faça um algoritmo que pergunte quanto você ganha por hora e o número de horas 
// trabalhadas no mês. Calcule em uma nova variável e mostre o total do seu salário no referido mês.
const prompt = require('prompt-sync')() 

let horas = Number(prompt('quanto vc ganha por hora'))
let horastrabalhadas = Number(prompt('quantas horas vc trabalhou'))
let SALARIO =   horas *horastrabalhadas



console.log(`horas trabalhadas foi de ${horastrabalhadas} recebendo ${horas} e no mes eu ganhei ${SALARIO}`)
