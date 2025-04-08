// Faça um algoritmo que leia o preço do produto e mostre seu novo preço com 5% de desconto.
const prompt = require('prompt-sync')()

let preco = Number(prompt("qual o preço?"));
console.log(` valor do desconto ${preco -((preco*5)/100)}`)
