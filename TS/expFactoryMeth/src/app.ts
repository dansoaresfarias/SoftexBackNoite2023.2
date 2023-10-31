import { FabricaComp } from "./model/FabricaComp";
import { PC } from "./model/PC";
import { Servidor } from "./model/Servidor";

let servidorSoftex = FabricaComp.criadorComputador(4.8, 32, 1024, "Servidor", 15000);

(servidorSoftex as Servidor).setSistemaRAID("RAID 5");
(servidorSoftex as Servidor).setSO("Debian");

console.log(servidorSoftex?.toString());

let pcSoftex = FabricaComp.criadorComputador(3.2, 8, 256, "PC", 2500);

(pcSoftex as PC).setMonitor("LG 24UHD");

console.log(pcSoftex?.toString());