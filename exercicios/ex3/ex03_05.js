//Peça o salário do funcionário, e calcular o aumento que ele terá, considerando se ganhar até
//2000, reajuste de 12%, até 4000, reajuste de 10%, acima de 4000 reajuste de 8%, exibir o
//novo salário
const prompt = require('prompt-sync')()

let salario = Number(prompt('qual o seu salario?'))
if(salario <= 2000){
    console.log('tera o reajuste de 12%')
    let reajuste1 = salario * (100/12)
    let reajuste2 = reajuste1 + 2000
console.log(`seu salario sera de ${reajuste2}`)
}else if(salario > 2000 && salario <= 4000){
    console.log('tera um reajuste de 10%')
    let reajuste3 = salario * (100/10)
    let reajuste4 = salario + reajuste3
console.log(`seu salario sera de ${reajuste4}`)
}else if(salario > 4000){
    console.log('ele tera um reajuste de 8%')
    let reajuste5 = salario * (100/8)
    let reajuste6 = salario + reajuste5
console.log(`seu salario sera de ${reajuste6}`)
}
// 2000* 0,12 