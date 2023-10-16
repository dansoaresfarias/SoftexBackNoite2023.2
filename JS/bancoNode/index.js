import { Endereco } from './model/endereco.js';
import { Agencia } from './model/agencia.js';
import { Cliente } from './model/cliente.js';
import { Conta } from './model/conta.js';
import { ContaCorrente } from './model/contaCorrente.js';
import { Poupanca } from './model/contaPoupanca.js';

let endAg = new Endereco('PE', "Recife", "São José", "Rua da Guia", 1000, "305", "50080-090");
let agSoftex = new Agencia("Softex", 1234, "81321264554","agsoftex@banco.com", endAg);

let endEgito = new Endereco('PE', "Recife", "Boa Viagem", "Rua Setubal", 1234, "508", "50097-090");
let cliEgito = new Cliente("José Egito", "000.222.555-99", new Date("1985-10-10").toLocaleDateString(), 5858585, "egito@softex.com", "8199999999", endEgito);
let contaEgito = new ContaCorrente(cliEgito, 4321, agSoftex, 1250.00, 4.99);

let endLuis = new Endereco('PE', "Jaboatão dos Guararapes", "Curado II", "Rua 15", 88, null, "55088-090");
let cliLuis = new Cliente("Luís Santos", "111.222.333-99", new Date("1996-03-10").toLocaleDateString(), 4545455, "luisdssantos@softex.com", "8199999988", endLuis);
let contaLuis = new ContaCorrente(cliLuis, 4354, agSoftex, 250.00, 8.99);

let contaLuisP = new Poupanca(cliLuis, 43541, agSoftex, 0.0, 0.006);

contaEgito.depositar(200);
contaEgito.sacar(500);
contaEgito.pagar(300);
contaEgito.transferir(500, contaLuis);
contaEgito.depositar(4000);
contaEgito.cobrarTaxaManutencao();

//contaEgito.saldo = 1000;
contaEgito.numero = 4327;
//contaEgito.setNumero(4329);
//console.log(contaEgito.saldo);
//contaEgito._saldo = 1000;

contaLuis.pagar(380);
contaLuis.pagar(500);
contaLuis.cobrarTaxaManutencao();

/*try {
    contaLuis.pagar(500);
} catch (error) {
    console.log(error);
}


try {
    contaLuis.sacar(1000);
} catch (error) {
    console.log(error);
}*/

contaLuisP.depositar(1000);
console.log(contaLuisP.mostrarExtrato());
contaLuisP.render(4);
contaLuisP.render();
console.log("\n\n" + contaLuisP.mostrarExtrato() + "\n\n");

//console.log(contaEgito.toString());
//console.log(contaEgito.mostrarSaldo());
console.log(contaEgito.mostrarExtrato());
console.log("\n");
console.log(contaLuis.mostrarExtrato());
console.log("\n");
console.log(Conta.contador);
console.log(Conta.mostrarContador());

