//importano a biblioteca para a entrada de dados 
const prompt = require('prompt-sync')()


//variaveis e constantes
//receber a idade da pessoa
let nome = "lee"
//RECEBER A IDADE DA PESSOA
let idade = 27
//receber o peso da pessoa
let peso = 56.10
//exibir todos juntos
console.log(nome, idade, peso)

//receber e armazena o testo em uma variavel
let curso = "desenvolvimento de sistemas"
//tipo  nome  recebe  valor  da variavel

//exibir o valor armazenado
console.log("curso")//imprimo uma string (texto)
console.log(curso)//imprime o valor que esta dentro da variavel
console.log("curso", curso)

//criando e atribuindo valor a outras variaveis 
let idade2 = 25 //valor do tipo int
let temperatura = 23.6
let nome2 = "minho" //com aspas duplas

console.log("iloveyouMIN", nome2, "voce tem", idade2, "e hoje esta fazendo", temperatura, 'GRAUS')

//USANDO template string
console.log(`ola ${nome2}, voce tem ${idade2} e hoje esta fazendo ${temperatura} ºC`)

let chovendo = false
let dia = true
//as constantes não podem ser reatribuidos novos valores
const PI = 3.1415 //
console.log(PI)

// Utilizando prompt para receber dados
//Entrada de dados

//no prompt sempre recebemos uma string
nome = prompt('qual e seu nome?')
//usando o parseInt ou parseFloat converte os valores recebidos
//que vem como string para Int ou float
idade = prompt("qual sua idade?")
peso = parseFloat(prompt('Qual seu peso?'))

console.log(`seu nome e ${nome}, voce tem ${idade} e pesa ${peso}`)
//valida o tipo da variavel
console.log(typeof(idade))
console.log(typeof(peso))
//apos a conversao dos valores é possivel realizar
//calculos matematicos
console.log(idade + peso)
