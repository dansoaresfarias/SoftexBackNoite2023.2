import { iProduto } from "./iProduto";

export abstract class Computador implements iProduto{
    private CPU: number;
    private memoria: number;
    private armazenamento: number;
    private tipo: string;
    protected preco: number;

    constructor(CPU: number, memoria: number, armazenamento: number, tipo: string, preco: number){
        this.CPU = CPU;
        this.memoria = memoria;
        this.armazenamento = armazenamento;
        this.tipo = tipo;
        this.preco = preco;
    }

    getCPU() : number { 
        return this.CPU;
    }

    getMemoria() : number {
        return this.memoria;
    }

    getArmazenamento(): number {
        return this.armazenamento;
    }

    getTipo() : string {
        return this.tipo;
    }

    getPreco() : number {
        return this.preco;
    }

    toString(): string {
        return `Computador tipo ${this.tipo}: CPU ${this.CPU}GHz | Memória ${this.memoria}GB | SSD ${this.armazenamento}GB | Preço R$ ${this.preco}`;
    }
}