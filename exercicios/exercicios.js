console.log('bem vindo ao curso JavaScript!')
console.log("estou aprendendo a usar console.log")

console.log( 15 + 25);
console.log( 100 - 45);
console.log( 12 * 7);
console.log( 144 /12);
console.log( 20 % 3);
console.log(2 ** 5);

//exercicios de variaveis
let nome = "Olivia"
let altura = 1.72
let escola = "AUSTRALIAN OCEAN"
let ano = '3EM'
console.log(`a ${nome} com ${altura} de altura, estudante da ${escola} e ja esta no ${ano}`)

//segundo exercicio
let Prof1 = "Ricardo"
let materia = 'TI'
let anoIngresso = 2022
console.log(`o professor ${Prof1} que da a meteria ${materia} desde ${anoIngresso}`)

//usando o prompt
const prompt = require('prompt-sync')()
// 1 exercicio
nome = prompt('como vc se chama?')
altura = parseFloat(prompt('qual sua altura?'))
escola = prompt('qual a escola q vc estuda?')
ano = parseInt(prompt('qual a sua serie?'))

// 2 exercicio
Prof1 = prompt('qual o nome do nosso professor?')
materia = prompt('qual a materia q ele dá?')
anoIngresso = parseInt(prompt('quando ele comecou a dar aula aqui?'))
