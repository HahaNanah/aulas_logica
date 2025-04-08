//Pergunte o ano de nascimento de uma pessoa e diga se ele é maior de idade
const prompt = require('prompt-sync')();

idade = Number(prompt("digite sua idade"))
    if(idade >= 18){
        console.log("voce é maior de idade")
    } else{
        console.log("voce e menor de idade")
    }
    