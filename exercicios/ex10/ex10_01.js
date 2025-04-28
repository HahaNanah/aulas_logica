//Escreva uma função que utilize uma variável global para contar o número de vezes que foi
//chamada. A função deve retornar o número atual de chamadas.

var chamadas = 5
console.log("numero de chamadas", chamadas)
function funcao(){
    chamadas + 1
    console.log('chamadas', chamadas)
    return chamadas    
}

funcao()
funcao()
funcao()
console.log('chamadas atuais', chamadas)