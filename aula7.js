// estrutura condicionais e operadores relacionais
let a = 2
let b = 3

//operadores relacionais
console.log(a ==b) //relação de igualdade
console.log(a !=b) // relação de diferença
console.log(a >b) // maior
console.log(a >=b) // maior ou igual
console.log(a <b) // menor
console.log(a <=b) // menor ou igual

// estruturas condicionais
let tenhoIngresso = true 
if(tenhoIngresso == true)
    // bloco de codigo
     {console.log('posso entrar?')}

//validando maioridade
const prompt = require('prompt-sync')()
//receber valor da idade
let idade = Number(prompt('qual é sua idade?'))

//verificar se é maior ou igual a 18
if(idade >= 18){
    console.log('maior idade')
}

tenhoIngresso = true; 
if(tenhoIngresso == true){
   
 console.log('posso entrar?')
}else{
    console.log('Estou barrado no baile')
}

//outro exemplo de estrutura condicional (if else)
idade = Number(prompt('Digite a idade'))
//Verificar se é maior de idade
if(idade >= 18){
    console.log('Voce é maior de idade');
}else{
    console.log('Voce é menor de idade')
}