function Conta() {
    var nome;
    var banco;
    var numeroConta;
    var saldo;

    this.getNome = function () {
        return nome;
    };
    this.setNome = function (value) {
        nome = value;
    };

    this.getBanco = function () {
        return banco;
    };
    this.setBanco = function (value) {
        banco = value;
    };
    this.getNumeroConta = function () {
        return numeroConta;
    };
    this.setNumeroConta = function (value) {
        numeroConta = value;
    };
    this.getSaldo = function () {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };
}


function Corrente() {
    var saldo;
    this.getSaldoEspecial = function () {
        return saldo;
    };
    this.setSaldoEspecial = function (value) {
        saldo = value;
    }
}

function Poupanca() {

    var juros;
    var dataVencimento;
    this.getJuros = function () {
        return juros;
    };
    this.setJuros = function (value) {
        juros = value;
    };

    this.getDataVencimento = function () {
        return dataVencimento;
    };
    this.setDataVencimento = function (value) {
        dataVencimento = value;
    };
}

Poupanca.prototype = new Conta();
Corrente.prototype = new Conta();

nPoupanca = new Poupanca();
nCorrente = new Corrente();

nPoupanca.setJuros('10');
nPoupanca.setDataVencimento('15-04-2021');
nPoupanca.setNome('Maria');
nPoupanca.setBanco('Banco Fatec');
nPoupanca.setNumeroConta('001-01');
nPoupanca.setSaldo('10000');

nCorrente.setSaldoEspecial('1500');
nCorrente.setNome('Joao');
nCorrente.setBanco('Banco Fatec');
nCorrente.setNumeroConta('001-02');
nCorrente.setSaldo('12000');

console.log(nPoupanca.getNome() + " " + nPoupanca.getBanco() + " " + nPoupanca.getNumeroConta() + " " + nPoupanca.getSaldo() + " " + nPoupanca.getJuros() + " " + nPoupanca.getDataVencimento());
alert(nPoupanca.getNome() + " " + nPoupanca.getBanco() + " " + nPoupanca.getNumeroConta() + " " + nPoupanca.getSaldo() + " " + nPoupanca.getJuros() + " " + nPoupanca.getDataVencimento());

console.log(nCorrente.getNome() + " " + nCorrente.getBanco() + " " + nCorrente.getNumeroConta() + " " + nCorrente.getSaldo() + " " + nCorrente.getSaldoEspecial());
alert(nCorrente.getNome() + " " + nCorrente.getBanco() + " " + nCorrente.getNumeroConta() + " " + nCorrente.getSaldo() + " " + nCorrente.getSaldoEspecial());