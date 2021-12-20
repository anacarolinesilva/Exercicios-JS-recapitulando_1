/* Calcular a soma dos números de um array */

function somarArray (ar) { 
    let soma = 0 
    for (let contador = 0; contador < ar.length; contador++) { 
        soma += ar[contador] 
    }
    return soma 
}
let ar = [1, 2, 3, 4, 5, -7, 15]
let soma = somarArray(ar) 
console.log(soma)