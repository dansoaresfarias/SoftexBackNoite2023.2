export class Transacao {
    #tipo;
    #data;
    #valor;
    #cliTransferencia;
    #tipoValor;

    constructor(tipo, data, valor, cliTransferencia, tipoValor) {
        this.#tipo = tipo;
        this.#data = data;
        this.#valor = valor;
        this.#cliTransferencia = cliTransferencia;
        this.#tipoValor = tipoValor;
    }

    toString() {
        return `\t${this.#data}\t${this.#tipo}\t\t ${this.#tipoValor} ${this.#valor.toFixed(2)}\n`;
    }

    get tipo() {
        return this.#tipo;
    }

    get data() {
        return this.#data;
    }

    get valor() {
        return this.#valor;
    }

    get cliTransferencia() {
        return this.#cliTransferencia;
    }

    get tipoValor() {
        return this.#tipoValor;
    }
}