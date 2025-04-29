//Escreva uma função que utilize uma variável global para contar o número de vezes que foi
//chamada. A função deve retornar o número atual de chamadas.

//-----------------------------------------------------------------//
//     correção     //
let contador = 0
function contar(){
    contador = contador + 1 
    //contador++
    //contador += 1

}
contar()
contar()
contar()

console.log(contador)