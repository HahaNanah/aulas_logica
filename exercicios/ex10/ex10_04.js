//Crie um caixa eletrônico: Crie uma variável global para armazenar o saldo, crie função para
//depositar e sacar, recebendo o valor como parâmetro, crie outra função para consultar o
//saldo. Crie um menu interativo com while para navegar entre as funções:
//[1] Depositar
//[4] Parar programa
//[2] Sacar
//[3] Consultar saldo

let saldo = 0


//crir função de depositar
function depositar (valorDeposito){
    saldo += valorDeposito
}

//criar função sacar
function sacar(valorSaque){
    saldo -= valorSaque
}

// função mostrar saldo
function mostrars(){
    console.log(`Seu saldo; ${saldo}`)
}

// menu interativo
function caixaeletronico(){
    const prompt = require('prompt-sync')
    let opcao = 0

    while(opcao != + 4){
        console.log('=== Caixa eletronico ===')
        console.log('[1] - DEPOSITAR')
        console.log('[2] - SACAR')
        console.log('[3] - MOSTRAR SALDO')
        console.log('[4] - SAIR')

        opcao = Number(prompt("Escolha uma opção"))

        switch(opcao){
            case 1:
            let valorDeposito = Number(prompt('digite o valor do deposito'))
            depositar(valorDeposito)
            break;
            case 2:
            let valorSaque = Number(prompt('digite o valor a ser sacado'))
            sacar(valorSaque)
            case 3:
            mostrars()
            break;
            case 4:
            console.log('obrigado por usar nosso banco')
            break;
            default:
            console.log('opção invalida')
        
        }
    
    }
}

caixaeletronico()