// - Crie um programa que leia a largura e a altura de uma parede em metros, calcule a sua área e a quantidade de tinta necessária para pintá-lo, sabendo que cada 
// litro de tinta pinta uma área de 2m².
const prompt = require('prompt-sync')()

let h = Number(prompt("qual a altura da parede?"));
let l = Number(prompt("qual a largura da parede?"));
let area = h * l
console.log(`  ${h} * ${l} é igual ${area}`);
let valor = area / 2
console.log(`${area} / ${2} é igual a valor ${valor}`)
