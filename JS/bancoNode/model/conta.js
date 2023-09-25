import { TIPOTRANSACAO } from "./tipoTransacao.js";
import { Transacao } from "./transacao.js";

export class Conta {
    constructor(cliente, numero, agencia, saldo) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = new Date().toLocaleDateString();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }

    // depositar da conta
    depositar(valor) {
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANSACAO.creditar, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);
    }

    // sacar da conta
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        } else {
            // lançar um erro
            console.error('Erro: Saldo insuficiente ' + valor + 'maior do que o saldo' + this.saldo + '.');
        }
    }

    // transferir da conta
    transferir(valor, contaFav){
        if(this.saldo >= valor){
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANSACAO.transferir, new Date().toLocaleDateString(), valor, contaFav.cliente, '-');
            this.transacoes.push(trans);
            contaFav.saldo += valor;
            let transFav = new Transacao(TIPOTRANSACAO.transferir, new Date().toLocaleDateString(), valor, this.cliente, '+');
        }else {
            console.error('Erro: Saldo insuficiente ' + valor + 'maior do que o saldo' + this.saldo + '.');
        }
    }

    // realizar pagamento da conta
    pagar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANSACAO.pagar, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        } else {
            // lançar um erro
            console.error('Erro: Saldo insuficiente'+ valor +'maior do que o saldo' + this.saldo + '.');
        }
    }

    // mostrar saldo da conta

    // toString da conta

    // mostrar extrato da conta

}