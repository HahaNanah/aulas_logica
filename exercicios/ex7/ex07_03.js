//Crie um programa que receba do usuário através do prompt 6 comidas e refaça todos os itens do exercício 1
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
const prompt = require('prompt-sync')()
let comidas = []

for (let i = 1; i <= 6; i++) {
    let comida = prompt(`Digite a ${i}ª comida: `)
    comidas.push(comida)
}

console.log(comidas)
console.log(comidas[0])
console.log(comidas[4])

comidas[5] = ["Picanha"]
console.log(comidas)

comidas.push('Strogonoff')
console.log(comidas)

comidas.splice(5, 0, 'Hamburguer')
console.log(comidas)

comidas.shift()
console.log(comidas)

comidas.pop()

console.log(comidas)

console.log(comidas.slice(0,3))

console.log(comidas.slice(3,7))

console.log(comidas.length)

comidas.reverse()
console.log(comidas)
