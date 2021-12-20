/* Localizar o maior valor dentro de um array de números  */

function localizarMaior(ar) {
    let max = ar[0]
    for (contador = 0; contador < ar.length; contador++) {
        if (ar[contador] > max) {
            max = ar[contador]
        }
    }
    return max
}
let ar = [9, -5, 4, 3, 70, 79, -61, 37, 100, 112]
let max = localizarMaior(ar)
console.log('Maior número: ', max)