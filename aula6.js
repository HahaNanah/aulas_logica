const prompt = require('prompt-sync')()

// operaçao com variaveis
let nr1 = Number(prompt("digite um numero"))
let nr2 = Number(prompt("digite um numero"))
let soma = nr1 +nr2
console.log(`A soma entre ${nr1} + ${nr2} e igual a ${soma}`)

// exercicios 
let subtracao = nr1 -nr2 
console.log(`a subtracao entre ${nr1} - ${nr2} é igual a ${subtracao}`)
console.log(`a subtracao entre ${nr1} - ${nr2} é igual a ${nr1 - nr2}`)

let multiplicacao = nr1 *nr2 
console.log(`a multiplicação entre ${nr1} * ${nr2} é igual a ${multiplicacao}`)

let divisao = nr1 /nr2
console.log(`a divisao entre ${nr1} / ${nr2} é igual a ${divisao}`)

let exponeciacao = nr1 **nr2 
console.log(`a expoenciação entre ${nr1} ** ${nr2} é igual a ${exponeciacao}`)

// calculando novo preco do celular + desconto
let valor1 = Number(prompt('digite o preco do celular'))
let desconto = Number(prompt('digite o preço do desconto'))
valor = valor1 - desconto
console.log(`O valor do celular com o desconto é de R$${valor}`)

// atividade 2
let test = Number(prompt('digite o numero 10'))
let dobro = test *2 
let divisao2 = test /2
console.log(`mostrar ${test} agora mostre ${dobro} e ${divisao2}`)

// atividade 3
// let trabalho = Number(prompt('a cada uma hora e 100'))
let quantia = 100 *8
let total = quantia * 15
console.log(`eu recebo 100 a hora e em um dia eu recebo ${quantia} e em 15 dias eu recebo ${total}`)