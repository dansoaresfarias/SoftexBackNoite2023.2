import { Cliente } from "./modelCafeteria/Cliente.js";
import { Pedido } from "./modelCafeteria/Pedido.js";
import { ItemPedido } from "./modelCafeteria/ItensPedido.js";

// Fila de pedidos no início do expediente
var pedidos = [];

// Criando um pedido
var cliStefano = new Cliente("Stefano Silva", "9999999", 301);
var pedidoStefano = new Pedido(cliStefano);
var itemCoxinhaStf = new ItemPedido("Coxinha de frango", 5.0, 2);
pedidoStefano.addItem(itemCoxinhaStf);
var itemExpressStf = new ItemPedido("Expresso p", 3.0, 1);
pedidoStefano.addItem(itemExpressStf);

// Incluindo o pedido na fila
pedidos.push(pedidoStefano);

// Criando um pedido
var cliAlex = new Cliente("Alex Silva", "9999988", 301);
var pedidoAlex = new Pedido(cliAlex);
var itemTapiocaAlex = new ItemPedido("Tapioca de charque c/ queijo", 9.0, 2);
pedidoAlex.addItem(itemTapiocaAlex);
var itemExpressAlex = new ItemPedido("Expresso g", 6.0, 1);
pedidoAlex.addItem(itemExpressAlex);

// Incluindo o pedido na fila
pedidos.push(pedidoAlex);

// Criando um pedido
var cliIrla = new Cliente("Irla Silva", "9999977", 305);
var pedidoIrla = new Pedido(cliIrla);
var itemEmpadaIrla = new ItemPedido("Empada queijo", 5.0, 1);
pedidoIrla.addItem(itemEmpadaIrla);
var itemSucoLimIrla = new ItemPedido("Suco de limão s/ ac", 7.0, 1);
pedidoIrla.addItem(itemSucoLimIrla);
var itemLakaIrla = new ItemPedido("Chocolate laka", 2.5, 1);
pedidoIrla.addItem(itemLakaIrla);

// Incluindo o pedido na fila
pedidos.push(pedidoIrla);

//console.log(pedidos);

// Saiu o primeiro pedido
let pedidoVez = pedidos.shift();
for (const atributo in pedidoVez) {
    console.log(`${atributo} : ${pedidoVez[atributo]}`);
}

//console.log(pedidos);