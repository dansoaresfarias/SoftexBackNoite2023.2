import { Conta } from "./conta.js";

export class Poupanca extends Conta{
    #taxaRendimento;

    constructor(cliente, numero, agencia, saldo, taxaRendimento){
        super(cliente, numero, agencia, saldo);
        this.#taxaRendimento = taxaRendimento;
    }

    /*
    // Polimorfísmo de sobrecarga de construtor, não existe em JS.
    constructor(cliente, numero, agencia){
        super(cliente, numero, agencia, 0.0);
        this.#taxaRendimento = 0.02;
    }*/
    // Polimorfísmo de sobrescrita de método da mãe, não existe em JS.
    depositar(valor) {
        valor += valor*this.#taxaRendimento;
        super.depositar(valor);
    }

    render(qtdMeses){
        let saldoAtual = super.getSaldo();
        for (let i = 0; i < qtdMeses ; i++) {
            saldoAtual += saldoAtual*this.#taxaRendimento;
        }
        let rendimento = saldoAtual - super.getSaldo();
        super.render(rendimento);
    }

    /*
    // Polimorfísmo de sobrecarga de método, não existe em JS.
    render(){
        console.log("render passou aqui");
        let saldoAtual = super.getSaldo();
        saldoAtual += saldoAtual*this.#taxaRendimento;
        let rendimento = saldoAtual - super.getSaldo();
        super.render(rendimento);
    }*/
}