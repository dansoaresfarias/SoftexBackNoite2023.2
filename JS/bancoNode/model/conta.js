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
            // lança um erro
            console.log('Erro: Saldo insuficiente ' + valor + 'maior do que o saldo' + this.saldo + '.');
        }
    }

    // transferir da conta

    // realizar pagamento da conta

    // mostrar saldo da conta

    // mostrar extrato da conta

    // toString da conta

}