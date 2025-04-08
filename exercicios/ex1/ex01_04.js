// Crie um programa que leia duas notas de um aluno, calcule e mostre sua média.
const prompt = require('prompt-sync')()

let notaM = (prompt('nota do aluno 1'))
let notaH = (prompt('nota do aluno 2'))
let media = (notaM + notaH) /2
console.log(`a nota de heloi foi ${notaH} e a de mary foi de ${notaM} e a media de ambas é de ${media}`)
