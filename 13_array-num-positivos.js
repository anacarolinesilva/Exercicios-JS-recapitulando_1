/* Criar uma função que receba como parâmetro um array de números e retorne um array
contendo somente números positivos */

function retornarPositivos(ar) {
    let ar2 = []
    for (let contador = 0; contador < ar.length; contador++) {
        let el = ar[contador]
        if (el >= 0) {
            ar2.push(el)
        }
    }
    return ar2
}
let ar = [48, -1, 46, -20, 25, -2, 17, -3, 23, -1]
let ar2 = retornarPositivos(ar)
console.log(ar2)