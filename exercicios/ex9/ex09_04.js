//Crie uma função CoresPrimarias() que contenha uma lista com as cores primárias
//e exiba cada cor em uma linha
const prompt = require('prompt-sync')()

function CoresPrimarias() {
    const cores = ["vermelho", "azul", "amarelo"];
 
    for (let cor of cores) {
      console.log(cor);
    }
  }
 
  // Chamando a função para exibir as cores
  CoresPrimarias();
