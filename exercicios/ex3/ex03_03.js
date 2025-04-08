//Peça ao usuário para digitar o nome de um mês e imprime o número de dias naquele mês.
const prompt = require('prompt-sync')()

let mes = Number(prompt('qual o mes?'))

if(mes == 'janeiro'){
    console.log('em janeiro tem 31 dias');
}else if(numero == 'fevereiro'){
    console.log('tem 28 dias em fevereiro');
}else if(numero == 'março'){
    console.log('tem 29 dias em março')
}else if(numero == 'abril'){
    console.log(' abril possui 30 dias')
}else if(numero == 'maio'){
    console.log(' maio tem 31 dias')
}else if(numero == 'junho'){
    console.log(' junho possui 30 dias')
}else if(numero == 'julho'){
    console.log('julho tem 31 dias')
}else if(numero == 'agosto'){
    console.log('agosto tem 30 dias');
}else if(numero == 'setembro'){
    console.log('setembro tem 30 dias')
}else if(numero == 'outubro'){
    console.log('outubro tem 31 dias')
}else if(numero == 'novembro'){
    console.log('novembro tem 29 dias')
}else if(numero == 'dezembro'){
    console.log('dezembro possui 31 dias')
}
