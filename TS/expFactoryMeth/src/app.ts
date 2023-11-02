import { Computador } from "./model/Computador";
import { FabricaComp } from "./model/FabricaComp";
import { PC } from "./model/PC";
import { Servidor } from "./model/Servidor";
import { Usuario } from "./model/Usuario";

let servidorSoftex = FabricaComp.criadorComputador(4.8, 32, 1024, "Servidor", 15000);

(servidorSoftex as Servidor).setSistemaRAID("RAID 5");
(servidorSoftex as Servidor).setSO("Debian");

console.log(servidorSoftex?.toString());

let pcSoftex = FabricaComp.criadorComputador(3.2, 8, 256, "PC", 2500);

(pcSoftex as PC).setMonitor("LG 24UHD");

console.log(pcSoftex?.toString());


// Utilizanto o padrão Prototype
let servidorSoftex2 = Object.create(servidorSoftex);
servidorSoftex2.CPU = 5;
servidorSoftex2.memoria = 256;
servidorSoftex2.armazenamento = 5000;
servidorSoftex2.preco = 64000;
servidorSoftex2.setSistemaRAID("RAID 7");
servidorSoftex2.setSO("Ubuntu");

console.log(servidorSoftex2.toString());

// Tipo genérico


let luis : Usuario = {
    nome : "Luis Fernando",
    idade : 27,
    sexo : "M",
    email : "luis@gmail.com"
};

let listaCompras = new Array<Computador | null>();
listaCompras.push(servidorSoftex);
listaCompras.push(pcSoftex);
listaCompras.push(servidorSoftex2);
listaCompras.push(luis);
console.log(listaCompras);