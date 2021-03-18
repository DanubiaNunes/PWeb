//alert("Boa noite professora");
var nomeAluno;
var nota01;
var nota02;
var nota03;

nomeAluno = prompt("Digite o nome do Aluno");

nota01 = prompt("Nota 01");

nota02 = prompt("Nota 02");

nota03 = prompt("Nota 03");

var media = function () {
    var N1 = parseFloat(nota01);
    var N2 = parseFloat(nota02);
    var N3 = parseFloat(nota03);

    var mediaNotas = (N1 + N2 + N3) / 3;

    return mediaNotas;
}

var resultado4 = media(); 

alert("Notas do aluno " + nomeAluno +"\nNota 01 = " + nota01 + " \nNota 02= " + nota02 + " \nNota 03 = " + nota03 + " \nMedia das notas  = " + resultado4 );