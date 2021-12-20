/* Calcular a soma dos números impares maiores que 10 e menores que 30 */

let soma = 0
for (let contador = 11; contador <= 30; contador += 2) {
    soma += contador
}
console.log(soma)