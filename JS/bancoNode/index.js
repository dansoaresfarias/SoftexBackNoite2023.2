import { Endereco } from './model/endereco.js';
import { Agencia } from './model/agencia.js';
import { Cliente } from './model/cliente.js';
import { Conta } from './model/conta.js';

let endAg = new Endereco('PE', "Recife", "São José", "Rua da Guia", 1000, "305", "50080-090");
let agSoftex = new Agencia("Softex", 1234, "81321264554","agsoftex@banco.com", endAg);

let endEgito = new Endereco('PE', "Recife", "Boa Viagem", "Rua Setubal", 1234, "508", "50097-090");
let cliEgito = new Cliente("José Egito", "000.222.555-99", new Date("1985-10-10").toLocaleDateString(), 5858585, "egito@softex.com", "8199999999", endEgito);
let contaEgito = new Conta(cliEgito, 4321, agSoftex, 1250.00);

let endLuis = new Endereco('PE', "Jaboatão dos Guararapes", "Curado II", "Rua 15", 88, null, "55088-090");
let cliLuis = new Cliente("Luís Santos", "111.222.333-99", new Date("1996-03-10").toLocaleDateString(), 4545455, "luisdssantos@softex.com", "8199999988", endLuis);
let contaLuis = new Conta(cliLuis, 4354, agSoftex, 250.00);

contaEgito.depositar(200);
contaEgito.sacar(500);
contaEgito.pagar(300);
contaEgito.transferir(500, contaLuis);
contaEgito.depositar(4000);

contaLuis.pagar(380);
contaLuis.pagar(500);

//console.log(contaEgito.toString());
//console.log(contaEgito.mostrarSaldo());
console.log(contaEgito.mostrarExtrato());
console.log("\n");
console.log(contaLuis.mostrarExtrato());
