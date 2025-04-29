// //Faça um Programa que pergunte quanto você ganha por hora e o número de horas 
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que 
// são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça 
// um programa que nos dê: salário bruto. quanto pagou ao INSS. quanto pagou ao sindicato. o 
// salário líquido. calcule os descontos e o salário líquido, conforme a tabela abaixo: 
// + Salário Bruto: R$ - IR (11%): R$ - INSS (8%): R$ - Sindicato (5%): R$ 
// = Salário Liquido: R$ 
// Obs.: Salário Bruto - Descontos = Salário Líquido. 
const prompt = require('prompt-sync')() 

let horasT = Number(prompt('voce trabalha quantas horas?  ;'))
let trabalhoMEs = Number(prompt('voce ganha quanto por mes?  ;'))
let salario = horasT * trabalhoMEs
let ir = salario * 0.11
let INSS = salario * 0.88
let sindicato = salario * 0.05 
let desconto = ir + INSS + sindicato
let salarioL = salario - desconto
console.log(`salario brudo é de ${salario} `)
console.log(`o seu ir é de ${ir} `)
console.log(`INSS é de ${INSS} `)
console.log(`Salario liquido é de ${salarioL} `)