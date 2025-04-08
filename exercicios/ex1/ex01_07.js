// Crie um programa que leia quanto dinheiro a pessoa tem na carteira e mostre quantos dólares ela poden contar.
const prompt = require('prompt-sync')()

let reais = (prompt('quanto dinheiro eu tenho'))
let dolar = reais /5.86

console.log(`se eu tenho r$${reais} então eu possuo ${dolar} dolarese`)