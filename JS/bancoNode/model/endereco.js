export class Endereco {
    #uf;
    #cidade;
    #bairro;
    #rua;
    #num;
    #comp;
    #cep;

    constructor(uf, cidade, bairro, rua, num, comp, cep) {
        this.#uf = uf;
        this.#cidade = cidade;
        this.#bairro = bairro;
        this.#rua = rua;
        this.#num = num;
        this.#comp = comp;
        this.#cep = cep;
    }

    get uf() {
        return this.#uf;
    }

    set uf(uf) {
        this.#uf = uf;
    }

    get cidade() {
        return this.#cidade;
    }

    set cidade(cidade) {
        this.#cidade = cidade;
    }

    get bairro() {
        return this.#bairro;
    }

    set bairro(bairro) {
        this.#bairro = bairro;
    }

    get rua() {
        return this.#rua;
    }

    set rua(rua) {
        this.#rua = rua;
    }

    get num() {
        return this.#num;
    }

    set num(num) {
        this.#num = num;
    }

    get comp() {
        return this.#comp;
    }

    set comp(comp) {
        this.#comp = comp;
    }

    get cep() {
        return this.#cep;
    }

    set cep(cep) {
        this.#cep = cep;
    }
}