//Crie uma lista de filmes com 7 filmes e faça as seguintes operações com ela:
// 1. Exiba apenas o primeiro o filme da lista
// 2. Exiba o filme da posição 4
// 3. Substitua o filme da última posição e exiba a lista
// 4. Insira um novo filme no final da lista e exiba a lista
// 5. Insira um novo filme na posição 5 e exiba a lista
// 6. Exclua o primeiro filme e exiba a lista
// 7. Exclua o último filme e exiba a lista
// 8. Exiba os 3 primeiros filmes da lista
// 9. Exiba os 4 últimos filmes da lista
// 10. Exiba a quantidade de filmes atualmente na lista
// 11. Ordene os filmes em ordem decrescente e exiba-os
const prompt = require('prompt-sync')();

let filmes =['O Senhor dos Anéis: A Sociedade do Anel', 'O Poderoso Chefão', 'A Origem', 'Forrest Gump:O Contador de Histórias', 
    'O Rei Leão', 'Matrix', 'A Lista de Schindler', 'Vingadores: Ultimato']
console.log(filmes)
console.log(filmes[0])
console.log(filmes[3])
filmes[7] = 'Vingadores: Ultimato'
console.log(filmes)
filmes.push('barbie: escola de princesas')
console.log(filmes)
filmes = [...filmes,'valente']
filmes.splice(5,0,'poly')
console.log(filmes)
filmes.splice(0,1)
filmes.shift()
filmes.pop
console.log(filmes)
filmes.splice(0,7)
filmes.shift()
filmes.pop
console.log(filmes)

filmes = ['O Senhor dos Anéis: A Sociedade do Anel', 'O Poderoso Chefão', 'A Origem']
console.log (filmes[0])
console.log (filmes[1])
console.log(filmes[2])

filmes = ['O Senhor dos Anéis: A Sociedade do Anel', 'O Poderoso Chefão', 'A Origem', 
    'Forrest Gump:O Contador de Histórias', 'O Rei Leão', 'Matrix', 'A Lista de Schindler', 'Vingadores: Ultimato']
console.log(filmes[7])
console.log(filmes[6])
console.log(filmes[5])
console.log(filmes[4])

filmes = ['O Senhor dos Anéis: A Sociedade do Anel', 'O Poderoso Chefão', 'A Origem', 
    'Forrest Gump:O Contador de Histórias', 'O Rei Leão', 'Matrix', 'A Lista de Schindler', 'Vingadores: Ultimato']
console.log(filmes.length)

filmes = ['O Senhor dos Anéis: A Sociedade do Anel', 'O Poderoso Chefão', 'A Origem', 
    'Forrest Gump:O Contador de Histórias', 'O Rei Leão', 'Matrix', 'A Lista de Schindler', 'Vingadores: Ultimato']
filmes.reverse()
console.log(filmes)