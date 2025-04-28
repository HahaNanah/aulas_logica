//Crie uma função que receba 2 números e o operador matemático para realizar a
//operação (Ex. envio os parâmetros 2 e 5 e *, fazer a multiplicação), tratar as operações + - * / **
const prompt = require('prompt-sync')()

function calcular(num1, num2, operador) {
     if (operador === '+') {
        console.log(`${num1} + ${num2} = ${num1} + ${num2}`)
    }
    else if (operador === '-') {
            console.log(`${num1} - ${num2} = ${num1} - ${num2}`)
    }
    else if (operador === '*') {
        console.log(`${num1} * ${num2} = ${num1} * ${num2}`)
    }
    else if (operador === '/') {
        console.log(`${num1} / ${num2} = ${num1} / ${num2}`)
    }
    else if (operador === '**') {
        console.log(`${num1} ** ${num2} = ${num1} ** ${num2}`)
    }
} 
calcular(4, 2, '/')
calcular(5, 2, '*')
calcular(2, 2, '**')
calcular(5, 5, '+')
calcular(10, 5, '-')

