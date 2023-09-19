const prompt = require('prompt-sync')();

// Exemplos de Arrow Function
let arrowOla = (nome) => console.log(`Olá ${nome}!`);

let areaEsf = (raio) => 4 * Math.PI * raio ** 2;

let volumeEsf = (raio) => (4 / 3) * Math.PI * raio ** 3;

let podeVotar = (idade) => (idade < 16) ?
    console.log("Você ainda não pode votar!") :
    (idade >= 16 && idade < 18) ?
        console.log("Seu voto é opcional.") :
        (idade >= 18 && idade < 60) ?
            console.log("Você é obrigado a votar.") :
            console.log("Seu voto é opcional, mas será um prazer lhe receber.");

//function expSomatorio(num) 
let expSomatorio = (num) => {
    let result = 0;
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            result += (2 * i + 1);
        }
        return result;
    } else {
        console.log("Número invalido!");
        return undefined;
    }
}

// Testando as funções
//var nome = prompt("Informe seu nome: ");
//arrowOla(nome);

//var r = parseFloat(prompt("Informe o raio da esfera: "));
//console.log(`Área Esfera = ${areaEsf(r)} \nVolume Esfera = ${volumeEsf(r)}`);

//var idade = parseInt(prompt("Informe seu idade: "));
//podeVotar(idade);

var num = parseInt(prompt("Informe um número inteiro positivo: "));
console.log(`${num}² = ${expSomatorio(num)}`);
