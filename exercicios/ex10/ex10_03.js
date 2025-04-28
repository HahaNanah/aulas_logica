//Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
//escreva outra função que remova um elemento dessa lista global.

var lista = ['Lee', 'minho']
function funcao(){
    lista.push('know')
    console.log(lista)
}
funcao()
function remov(){
    lista.pop()
    console.log(lista)
}

remov()