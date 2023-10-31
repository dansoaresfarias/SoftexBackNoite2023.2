import { Computador } from "./Computador";

export class PC extends Computador{
    private monitor : string;

    constructor(CPU: number, memoria: number, armazenamento: number, tipo: string, preco: number, monitor?: string){
        super(CPU, memoria, armazenamento, tipo, preco);
        this.monitor = (monitor || "A definir");
    }

    getMonitor() : string{
        return this.monitor;
    }

    setMonitor(monitor: string){
        this.monitor = monitor;
    }

    override toString(): string {
        return `PC: CPU ${this.getCPU()}GHz | Memória ${this.getMemoria()}GB | SSD ${this.getArmazenamento()}GB | Monitor ${this.monitor} | Preço R$ ${this.preco}`;
    }
}