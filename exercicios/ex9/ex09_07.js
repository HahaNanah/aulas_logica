//Crie uma função que receba 2 números e o operador matemático para realizar a
//operação (Ex. envio os parâmetros 2 e 5 e *, fazer a multiplicação), tratar as operações + - * / **
const prompt = require('prompt-sync')()

function calcular(num1, num2, operador) {
    if (operador === '+') {
        return num1 + num2;
    }
    if (operador === '-') {
        return num1 - num2;
    }
    if (operador === '*') {
        return num1 * num2;
    }
    if (operador === '/') {
        return num1 / num2;
    }
    if (operador === '**') {
        return num1 ** num2;
    }
}
console.log(calcular(2, 5, '+'));  // 7
console.log(calcular(10, 2, '/')); // 5