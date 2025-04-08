//Receba alguns números e verifique a soma e a quantidade de todos os pares e ímpares
//digitados, digite 0 para não receber mais

const prompt = require('prompt-sync')()
let entrada;
let qtdpar = 0
let somapar = 0
let qtdimpar = 0
let somaimpar = 0
console.log('digite numeros (0 para encerrar)')
while(true){
    entrada = parseFloat(prompt("numero: "))

    if(entrada === 0){
        break; //encerra o loop
    }
    if(entrada % 2 == 0){
        somapar = entrada + somapar;
        qtdpar ++
    }
    else{
        somaimpar = entrada + somaimpar
        qtdimpar ++
    }
}
console.log(`soma dos pares digitados:${somapar} quantidade de par: ${qtdpar}`);
console.log(`soma dos impares digitados:${somaimpar} quantidade de impar: ${qtdimpar}`);

