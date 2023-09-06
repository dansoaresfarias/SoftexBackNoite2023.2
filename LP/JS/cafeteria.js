class Cliente{
    constructor(nome, telefone, sala){
        this.nome = nome;
        this.telefone = telefone;
        this.sala = sala;
    }
}

class ItemPedido{
    constructor(produto, precoInd, qtd){
        this.produto = produto;
        this.precoInd = precoInd;
        this.qtd = qtd;
    }
}

class Pedido{
    constructor(cliente){
        this.data = Date.now();
        this.cliente = cliente;
        this.itensPedido = [];
        this.valor = 0.0;
    }

    addItem(itemPedido) {
        this.itensPedido.push(itemPedido);
        this.valor += itemPedido.precoInd * itemPedido.qtd;
        //console.log(`${this.cliente.nome} seu valor parcial é de ${this.valor}`);
    }
}

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

console.log(pedidos);

// Saiu o primeiro pedido
console.log(pedidos.shift());

console.log(pedidos);