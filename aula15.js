const prompt = require('prompt-sync')();
//criando nossa primeira funçao
function Cabecalho(){
    console.log('------------------')
    console.log('    SESI/SENAI    ')
    console.log('------------------')
}
//COM TEXT
function Cabecalho2(TEXTO){
    console.log('------------------')
    console.log(  TEXTO)
    console.log('------------------')
}
//criando outra funçao, funçao de saudação
function Saudacao(){
    let nome = prompt('digite seu nome ')
    console.log(`${nome}, tenha um bom dia`)
}
// CHAMANDO A FUNÇAO
// e passando o parametro junto com a função 
Cabecalho()
// posso declarar uma variavel e passa-la como parametro para função
let text = 'eu amo o minho'
Cabecalho2(text)
Saudacao()

// criei a função somo que ira receber dois parametros 
// e apartir desses valores fará o calculoe mostrara o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}
Soma(26, 16)
Soma(6, 6)
Soma(2, 1)

// dar apenas o resultado
function media(n3, n4){
    let resultado = (n3 + n4) /2
    return(resultado)
}
console.log(media(4, 8))
//armazenei o retorno da funçao em uma vareavel
let valor = media(10, 5)
// utilizei o retorno da funçao para escrevela na tela 
console.log(valor)
// utilizei a variavel que recebeu o retorno da funçao
// para chamar a funçao Par Impar passando o valor como parametro

//--------------------------------------

// exercicio
function parimpar(){
    let number = (prompt('qual o numero? '))
    if(number % 2 != 0){
        console.log('impar')
    }else 
    console.log('par')
}
//---------------------------------------------------------
function parimpar2(numb){
    if(numb % 2 != 0){
        console.log('impar')
    }else 
    console.log('par')
}
parimpar2(9)
parimpar2(10)

//exercicio 2
function retorno(){

}