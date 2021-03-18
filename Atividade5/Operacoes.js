var primeiroNumero;
var segundoNumero;

primeiroNumero = prompt("Digite um numero");

segundoNumero = prompt("Digite um numero");

var soma = function () {
    var N1 = parseFloat(primeiroNumero);
    var N2 = parseFloat(segundoNumero);

    var valor = N1 + N2;

    return valor;
}

var resultado01 = soma();

var subtracao = function () {
    var N1 = parseFloat(primeiroNumero);
    var N2 = parseFloat(segundoNumero);

    var valor = N1 - N2;

    return valor;
}

var resultado02 = subtracao();

var produto = function () {
    var N1 = parseFloat(primeiroNumero);
    var N2 = parseFloat(segundoNumero);

    var valor = N1 * N2 ;

    return valor;
}

var resultado03 = produto();

var divisao = function () {
    var N1 = parseFloat(primeiroNumero);
    var N2 = parseFloat(segundoNumero);
    var valor;

    if (N2 == 0) {
        valor = 'Impossivel dividir por zero =(';
    }
    else {
        valor = N1 / N2;
    }

    return valor;
}

var resultado04 = divisao();

var resto = function () {
    var N1 = parseFloat(primeiroNumero);
    var N2 = parseFloat(segundoNumero);
    var valor;

    if (N2 == 0) {
        valor = 'Impossivel dividir por zero =(';
    }
    else {
        valor = N1 % N2;
    }

    return valor;
}

var resultado05 = resto(); 

alert("O resultado das operaçoes dos Numeros " + primeiroNumero + " e " + segundoNumero + "sao:" +
    "\nSoma = " + resultado01 + " \nSubtracao = " + resultado02 + " \nProduto = " + resultado03 +
    " \nDivisao = " + resultado04 + " \nResto = " + resultado05);