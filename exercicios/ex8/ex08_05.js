// Crie uma lista com 5 números aleatórios e exiba o nr e seu dobro.
const prompt = require('prompt-sync')()

let numero = Number(prompt("digite um numero"))
let dobro = numero *2
let mostra = [dobro]

for(let number of mostra){
    console.log(number)
}
let numero2 = []
for(let i = 0; i < 5; i++){
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1
    numero2.push(numeroAleatorio)
    console.log(`o dobro de ${numeros[i]} : ${numeros[i] * 2}`)
}