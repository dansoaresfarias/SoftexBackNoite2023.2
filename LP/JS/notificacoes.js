class Notificacao{
    constructor(nomeApp, msg){
        this.nomeApp = nomeApp;
        this.msg = msg;
    }
}

var notificacoes = [];

var ntfWapp = new Notificacao("WhatsApp", "Glória: me liga!");
notificacoes.push(ntfWapp);
var ntfIfood = new Notificacao("Ifood", "Promoção de pizza.");
notificacoes.push(ntfIfood);
var ntfFace = new Notificacao("Facebook", "Indicação de nova amizade.");
notificacoes.push(ntfFace);
var ntfZeDel = new Notificacao("Zé Delivery", "Promoção de cerveja 30 reais de cupom na compra de 60.");
notificacoes.push(ntfZeDel);

console.log(notificacoes);

// Tirando a notificação mais recente
console.log(notificacoes.pop());

console.log(notificacoes);