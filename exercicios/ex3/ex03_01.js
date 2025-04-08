//Peça ao usuário para digitar um número de 1 a 7 e imprime o dia da semana correspondente.
const prompt = require('prompt-sync')()

let numero = (prompt('qual o numero'))
if(numero == '1'){
    console.log('domingo');
}else if(numero == '2'){
    console.log('segunda');
}else if(numero == '3'){
    console.log('terça')
}else if(numero == '4'){
    console.log('quarta')
}else if(numero == '5'){
    console.log('quinta')
}else if(numero == '6'){
    console.log('sexta')
}else if(numero == '7'){
    console.log('domingo')
}
