//Receba o quanto um vendedor vendeu no mês, se vendeu mais de R$ 5000,00 sua
//comissão será de 5% se vendeu menos será de 3%, exiba o valor de sua comissão
const prompt = require('prompt-sync')();

let numero2 = Number(prompt("quanto recebeu por mes?"))
let N = numero2 *5/100
let b = numero2 *3/100
if (numero2 > 5000){
    console.log(`${N}`)
}else{
    console.log(`${b}`)
}