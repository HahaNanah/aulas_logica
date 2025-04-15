
let frutas = ['maça', 'banana', 'uva', 'abacaxi']
// a variavel X serve para interar os valores ate o limite da lista o nome não é obrigatorio ser i, x ou 
// contador pode ser qualquer nome de variavel
for(let x = 0; x < frutas.length; x++){
    //o length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNome = ['bill', 'minho', 'amor da minha vida', 'Han', 'slaa', 'BC']
// para cada nome da lista nomes escreva um nome
for(let nome of listaNome){
    console.log(nome)
}

// verificando se é uma consoante7
const prompt = require('prompt-sync')();
let vogais = ['a', 'e', 'i', '0', 'u']
let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let letra4 = prompt('digite uma letra   ')
//se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra4.toLowerCase())){
    console.log('é uma vogal')
}else if(consoantes.includes(letra4.toLowerCase())){
    console.log(consoantes)
}
else{
 
    console.log('não é uma letra')
}

// obtenha a posição do item
for(let[pos, fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja a posição e a fruta
    console.log(`posição ${pos} e fruta ${fruta}`)
}

// separando os itens em de uma lista
let produtos = 'celular, notebook, TV, Tablet, Headset'
let listaproduto = produtos.split(',')
for(let produto of listaproduto){
    console.log(produto)
}

// separando/ percorrendo como uma lista
let palavras = 'SENAI'
for(let letra of palavras){
    console.log(letra)
}