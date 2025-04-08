//Crie um programa que leia um número e mostre o seu dobro, triplo e o valor dele elevado ao cubo.
const prompt = require('prompt-sync')()

let numb = Number(prompt('digite um numero'))
let dobro = numb *2 
let triplo = numb *3 
let cubo = numb **3
console.log(`mostrar o dobro de ${numb} ou seja ${dobro} dps mostre o triplo ${triplo} e por ultimo ele elevadp ao cubo ${cubo}`)
