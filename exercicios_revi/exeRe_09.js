// Faça uma função que imprima na tela apenas os números ímpares entre 1 e 50. 
function mostrarim(){
    mostrarim = 0
    while(mostrarim <= 50){
        if(mostrarim % 2 == 1){
            console.log(mostrarim)
        }
        mostrarim++
    }
}
mostrarim()