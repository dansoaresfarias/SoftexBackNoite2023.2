export class Agencia{
    #nome;
    #numero;
    #telefone;
    #email;
    #end;

    constructor(nome, numero, telefone, email, end){
        this.#nome = nome;
        this.#numero = numero;
        this.#telefone = telefone;
        this.#email = email;
        this.#end = end;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get numero(){
        return this.#numero;
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(telefone){
        this.#telefone = telefone;
    }

    get email(){
        return this.#email;
    }

    set email(email){
        this.#email = email;
    }

    get end(){
        return this.#end;
    }

    set end(end){
        this.#end = end;
    }
}