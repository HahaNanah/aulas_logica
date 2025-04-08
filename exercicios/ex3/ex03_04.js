//Peça ao usuário para digitar 2 notas e calcule sua média, e considere a média acima de 7
//aprovado, entre 5 e 7, em recuperação, abaixo de 5 reprovado.
const prompt = require('prompt-sync')()

let Nota = (prompt("qual é a nota?"));
let Nota2 = (prompt("qual é a nota?"));

let media = (Nota + Nota2) / 2

if(media >= 7 ){
    console.log("aprovado")
}
else if (media < 7 && media > 5){
    console.log('recuperação')
}else{
    console.log("reprovado")
}


