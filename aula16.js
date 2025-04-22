//programando a dinamica de criptografia
const prompt = require('prompt-sync')()

let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let segredo = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', ]
function criptografar(texto){
    let resutado = ''
    for(letra of texto){
        let posicao = alfabeto.indexOf(letra);
        resutado += segredo[posicao]
      }
      return resutado
}
console.log(criptografar('SENAI'))

// descriptogrfar
function descriptografar(texto){
    let resutado = ''
    for(letra of texto){
        let posicao = segredo.indexOf(letra);
        resutado += alfabeto[posicao]
      }
      return resutado
    }
console.log(descriptografar('VHQDL'))


