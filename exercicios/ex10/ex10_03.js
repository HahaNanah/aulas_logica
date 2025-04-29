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
//-------------------------------------------------------------------------------------------
// correção  //

 let listaNomes = []

 function adicionarNome(nome){
    listaNomes.push(nome)
 }
 function removerNome(){
    listaNomes.pop()

 }

 adicionarNome('Ana')
 adicionarNome('Minho')
 adicionarNome('Know')
 console.log(listaNomes)
 adicionarNome('garro')
 console.log(listaNomes)
 removerNome()

 function removerpornome(nome){
    let posicao = listaNomes.indexOf(nopme)
    // quando o indexof nao encontrar o elemento ele retorna -1 
    if(posicao != -1){
        listaNomes.splice(posicao, 1)
    }else{
        console.log('nome não encontrado')
    }
 }

 adicionarNome('lee')
 adicionarNome('hyunjin')
 adicionarNome('hwang')
 console.log(listaNomes)
 adicionarNome('aghata')
 console.log(listaNomes)
 removerNome()
 console.log(listaNomes)
 removerpornome('hyunjin')
 console.log(listaNomes)
 