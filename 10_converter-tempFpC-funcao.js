/* Criar uma função que converta uma temperatura de Fahrenheit para Celsius */

function fahrParaCels(number) {
    return  (number - 32) / 1.8
}
let r = fahrParaCels(68)
console.log(r)