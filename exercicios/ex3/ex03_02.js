//Peça ao usuário o ano atual e o ano de nascimento e verifique em qual faixa etária ele
//pertence considerando (abaixo de 10 é criança, de 11 a 17 adolescente, de 18 a 59 adulto,
//acima de 60 idoso)
const prompt = require('prompt-sync')()

let anoAtual = Number(prompt('em qual ano estamos?'))
let nascimento = Number(prompt('quando vc nasceu?'))
let idade = anoAtual - nascimento
if (idade <= 10){
    console.log ('criança')
}else if (idade > 10 && idade <= 17){
    console.log ('adolescente')

}else if(idade > 17 && idade <= 59){
    console.log('adulto')
}else{
    console.log('maior idade')
}
