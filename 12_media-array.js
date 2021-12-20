/* Calcular a média de todos os números de um array */

function mediaArray(ar) {
    let number = ar.length
    let soma = 0
    for (let contador = 0; contador < number; contador++) {
        soma += ar[contador]
    }
    return soma / number
}
let ar = [5, 7, 6, 8]
let media = mediaArray(ar)
console.log('Media Array: ', media)
