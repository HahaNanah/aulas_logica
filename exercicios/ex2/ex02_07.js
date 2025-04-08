//Receba a velocidade do carro e exiba que foi multado se for maior que 80km/h, o
//valor da multa será R$ 7,00 por cada km excedido, exibir o valor da multa
const prompt = require('prompt-sync')();

let numero2 = Number(prompt("qual a velocidade"))
let numero = numero2 - 80
if (numero > 80){
    console.log(`${numero *7}`)
}else{
    console.log("nao leva multa")
}
