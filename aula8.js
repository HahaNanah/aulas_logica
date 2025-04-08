//////////////////////////////////////////////////////////////
const prompt = require('prompt-sync')();

let altura = Number(prompt ('digite sua altura'));
let peso = Number(prompt('digte seu peso'));
let imc = peso / (altura **2)
if (imc < 18.5){
    console.log ('abaixo do peso ideal')
}else if (imc >= 18.5 && imc < 25){
    console.log ('peso ideal')

}else if(imc >= 25 && imc< 30){
    console.log('sobrepeso')
}else{
    console.log('obesidade')
}


// verificar se o triangulo é equilatero ou escaleno
//receber o lado 1

let lado1 = Number(prompt('digite o valor do lado 1')) 
let lado2 = Number(prompt('digite o valor do lado 2')) 
let lado3 = Number(prompt('digite o valor do lado 3')) 

// verificar se o triangulo é equilatero caso tenha os lados iguais

let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)
console.log('triangulo equilatero?', eq, 'triangulo escaleno?', es,)
if (eq && (lado1 && lado2 && lado3)){
    console.log ('equilatero')
}else if (es && (lado1 != lado2 != lado3)){
    console.log ('escaleno')
}

// copia do slide
let lado4 = prompt('digite o valor do lado 4')
let lado5 = prompt('digite o valor do lado 5')
let lado6 = prompt('digite o valor do lado 6')
if ((lado4 == lado5) && (lado5 == lado6)){
    console.log('triangulo equilatero')
} else if ((lado4 != lado5) && (lado5 != lado6) && (lado4 != lado6)){
    console.log('triangulo escaleno')
}

//////////////////////////////////////////////////////////////////////////////////////////////

//descobrir a quantidade de horas trabalhadas 
let horas = Number(prompt('total de horas trabalhadas'))
let vendas = Number(prompt('total de vendas'))

// validar se uma das condições foi atendida
// (mais de 5 mil em vendas ou mais de 40 horas trabalhadas)

if(vendas > 5000 || horas > 40){
    console.log("tem direito ao bonus")
}
else{
    console.log("nao tem direito ao bunus")
}
// crie um algoritimo que receba um caractere e verifique se ele é 
// uma vogal ou uma consoante

let c1 =(prompt(' digite seu caractere: '))
//sinal logico do 'OU' = ||
//sinal logico do 'E' = &&
if( c1 == "a" || c1 == "e" || c1 == "i" || c1 == "o" || c1 == "u" ){
    console.log('seu caractere é vogal');
}else{
    console.log('seu caractere é consoante');
}


