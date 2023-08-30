function expSoma(num) {
    if (num > 0) {
        if (num == 1) {
            return 1;
        }else{
            return expSoma(num -1) + (2*num - 1);
        }
    } else {
        console.log("Número invalido!");
        return undefined;
    }    
}

var num = parseInt(prompt("Informe um número inteiro positivo: "));
console.log(`${num}² = ${expSoma(num)}`);