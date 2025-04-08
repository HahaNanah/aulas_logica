// - Crie um programa que leia um número inteiro e mostre na tela o seu sucessor e antecessor.
const prompt = require('prompt-sync')()

let inteiro = (prompt('qual o valor'))
let antecessor = inteiro - 1
let sucessor = antecessor + 2 
console.log(`mostrar ${inteiro} em seguida mostre se antecessor ${antecessor} e se sucessor ${sucessor}`)
