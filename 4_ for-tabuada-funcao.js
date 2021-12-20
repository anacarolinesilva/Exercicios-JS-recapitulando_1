/* Imprimir todas as tabuadas do número 1 ao 10 */

function printTabuada(number) {
    for (let contador = 1; contador <= 10; contador++) {
        let linha = number + ' X ' + contador + ' = ' + number * contador
        console.log(linha)
    }
}
for (let contador = 1; contador <= 10; contador++) {
    printTabuada(contador)
    console.log()
}