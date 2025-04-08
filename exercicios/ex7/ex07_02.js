//Crie uma lista com os 20 times do campeonato brasileiro de futebol
// 1. Exiba o primeiro time da lista como campeão
// 2. Exiba os 4 primeiros times como que irão jogar a libertadores
// 3. Exiba os 4 últimos times como os que estão rebaixados para a série B
const prompt = require('prompt-sync')();

let time = ['Atlético-MG', 'Bahia', 'Botafogo', 'Ceará', 'Corinthians', 'Cruzeiro', 'Flamengo',
     'Fluminense', 'Fortaleza', 'Grêmio', 'Internacional', 'Juventude', 'Mirassol', 'Palmeiras', 'Red Bull Bragantino', 
     'Santos', 'São Paulo', 'Sport', 'Vasco da Gama', 'Vitória']
console.log(time)

time = ['Atlético-MG', 'Bahia', 'Botafogo', 'Ceará', 'Corinthians', 'Cruzeiro', 'Flamengo',
    'Fluminense', 'Fortaleza', 'Grêmio', 'Internacional', 'Juventude', 'Mirassol', 'Palmeiras', 'Red Bull Bragantino', 
    'Santos', 'São Paulo', 'Sport', 'Vasco da Gama', 'Vitória']
console.log(time[0],`campeão`)

time = ['Atlético-MG', 'Bahia', 'Botafogo', 'Ceará', 'Corinthians', 'Cruzeiro', 'Flamengo',
    'Fluminense', 'Fortaleza', 'Grêmio', 'Internacional', 'Juventude', 'Mirassol', 'Palmeiras', 'Red Bull Bragantino', 
    'Santos', 'São Paulo', 'Sport', 'Vasco da Gama', 'Vitória']
console.log (time[0], `serie A`)
console.log (time[1], `serie A`)
console.log(time[2], `serie A`)

time = ['Atlético-MG', 'Bahia', 'Botafogo', 'Ceará', 'Corinthians', 'Cruzeiro', 'Flamengo',
    'Fluminense', 'Fortaleza', 'Grêmio', 'Internacional', 'Juventude', 'Mirassol', 'Palmeiras', 'Red Bull Bragantino', 
    'Santos', 'São Paulo', 'Sport', 'Vasco da Gama', 'Vitória']
    console.log (time[19], `serie B`)
    console.log (time[18], `serie B`)
    console.log(time[17], `serie B`)
    console.log(time[16], `serie B`)