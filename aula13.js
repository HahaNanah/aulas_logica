//declarando um novo vetor
// reconheço que é um vetor pelo uso dos'[]'
let listaVazia = [];
console.log(listaVazia)

// declarar uma lista de numeros
let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2]);

//declaraçao de uma lista de strings
let nomes = ['ana', 'leeknow','Han','thici']
console.log(nomes)

// declaraçao de uma listra mista
let Listamista = [1, 'dois', true, 2.5]
console.log(Listamista)

let ListacomLista = [
    ['coca-cola', 'cachorro-quente'],
    [5.0, 10.0]
]
console.log(ListacomLista)

//alterando valores da lista
let frutas = ['maça', 'pera', 'uva', 'abacaxi']
console.log(frutas)
frutas.push('laranja') // adiciona novo elemento a lista
console.log(frutas)

//o spread adiciona um novo elemento tmb
frutas = [...frutas, 'banana'] //  os '...' adiciona item tambem
console.log(frutas)

//adiciona e muda de posiçao
//a funçao splice adiciona um novo item em uma posiçao especifica a partir de um valor no indice
frutas.splice(2, 0, 'morango')// posiçao, inicializa, item
console.log(frutas)

//excluindo item da lista
frutas.splice(3,1)// excluindo item pelo indice
console.log(frutas)
frutas.shift()// excluindo o primeiro item da lista
frutas.pop()// exclue o ultimo item da lista
console.log(frutas)

//acessar itensnda lista
console.log(frutas[3]); // acesso apartir de uma posiçao especifica
console.log(frutas.slice(0,4))// mostra posiçao zero ate a quatro
console.log(frutas.slice(1))// mostra apartir da posiçao um
console.log(frutas.slice(-1))// mostra o ultimo item
console.log(frutas.length)// total de itens na lista

//ordenar itens da lista
console.log(frutas)
frutas.sort()// ordena a lista de forma crescente
console.log(frutas)
frutas.reverse()//ordena de forma decrescente
console.log(frutas)