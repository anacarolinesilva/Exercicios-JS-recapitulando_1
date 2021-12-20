/* Calcular a soma de todos os dígitos de um número inteiro positivo */

function somarDigitos(number) {
    var s = number.toString();
    var soma = 0;
    for (var char of s) {
    var digito = parseInt(char);
    soma += digito;
    }
    return soma;
}
   var resultado = somarDigitos(1235231);
   console.log("Soma de todos os dígitos: ", resultado);