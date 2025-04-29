// // Tendo como dado de entrada a altura (h) de uma pessoa e o sexo, construa um 
// //algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:  
// Para homens: (72.7 * altura) – 58   Para mulheres: (62.1 * altura) - 44.7, exiba qual é o 
// peso ideal da pessoa.
const prompt = require('prompt-sync')() 

let alturaM = 72.7
let alturaF = 62.1
let altura = prompt('digitealtura desejada ')
let idealM = (alturaM * altura)- 58
let idealF = (alturaF * altura)- 44.7
let sexo = prompt('digite (M) OU (F)')
if(sexo == 'F'){
    console.log(`${alturaF} * ${altura} - 58= ${idealF}`)
}else if(sexo == 'M'){
    console.log(`${alturaM} * ${altura} - 44.7 = ${idealM}`)
}