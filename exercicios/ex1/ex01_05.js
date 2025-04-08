// Crie um programa que leia o valor em metros e o exiba convertido em centímetros, milímetros e km
const prompt = require('prompt-sync')()

let metros = (prompt('valor em centimetros'))
let centimetro = metros *100
let milimetro = metros *1000
let km = metros *1000
console.log(` ${centimetro} centimetro pode ser convertido em ${milimetro} milimetros para ${km} km`)
