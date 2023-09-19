export class Pedido{
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