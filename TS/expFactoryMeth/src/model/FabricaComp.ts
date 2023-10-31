import { Computador } from "./Computador";
import { PC } from "./PC";
import { Servidor } from "./Servidor";

export abstract class FabricaComp{
    // Factory Method Definitions
    static criadorComputador(CPU: number, memoria: number, armazenamento: number, tipo: string, preco: number) : Computador | null{
        if(tipo.toLowerCase() == "servidor"){
            return new Servidor(CPU, memoria, armazenamento, tipo, preco);
        }else if(tipo.toLowerCase() == "pc"){
            return new PC(CPU, memoria, armazenamento, tipo, preco);
        }else{
            return null;
        }
    }
}