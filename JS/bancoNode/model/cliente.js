export class Cliente {
    #nome;
    #cpf;
    #dataNasc;
    #rg;
    #email;
    #telfone;
    #end;

    constructor(nome, cpf, dataNasc, rg, email, telfone, end) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#dataNasc = dataNasc;
        this.#rg = rg;
        this.#email = email;
        this.#telfone = telfone;
        this.#end = end;
    }

    toString() {
        return `\tCliente: ${this.#nome} | CPF: ${this.#cpf}\n`;
    }

    get nome() {
        return this.#nome;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    get cpf() {
        return this.#cpf;
    }

    get dataNasc() {
        return this.#dataNasc;
    }

    get rg() {
        return this.#rg;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get telfone() {
        return this.#telfone;
    }

    set telfone(telfone) {
        this.#telfone = telfone;
    }

    get end() {
        return this.#end;
    }

    set end(end) {
        this.#end = end;
    }
}