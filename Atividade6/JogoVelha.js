//alert("Boa noite professora");
var usuario;
var computador;
var mensagem;
var pc;

nomeAluno = prompt("Digite uma das opções: pedra, papel ou tesoura");

//alert(nomeAluno.toString());
computador = Math.random();

alert(computador.toString());

//computador pedra - 0-0,33
//computador papel - 0,33 - 0,66
//computador tesoura - 0,66 - 1

if (nomeAluno.length == 0) {
    mensagem = 'a opção digitada invalida';
}
else if (nomeAluno.toString().toUpperCase() == 'PEDRA') {
    if (computador <= 0.33) {
        mensagem = 'Empate';
        pc = 'pedra';
    } else if (computador > 0.33 && computador <= 0.66) {
        mensagem = 'Papel cobre pedra';
        pc = 'papel';
    }
    else {
        mensagem = 'Pedra quebra tesoura'; 
        pc = 'tesoura'
    }
        
}
else if (nomeAluno.toString().toUpperCase() == 'PAPEL') {
    if (computador <= 0.33)
        mensagem = 'Papel cobre pedra';
    else if (computador > 0.33 && computador <= 0.66)
        mensagem = 'Empate';
    else 
        mensagem = 'Tesoura corta Papel';
}
else if (nomeAluno.toString().toUpperCase() == 'TESOURA') {
    if (computador <= 0.33)
        mensagem = 'Pedra quebra tesoura';
    else if (computador > 0.33 && computador <= 0.66)
        mensagem = 'Tesoura corta Papel';
    else
        mensagem = 'Empate';
} else {
    mensagem = 'a opção digitada invalida';
}




alert(mensagem.toString() );