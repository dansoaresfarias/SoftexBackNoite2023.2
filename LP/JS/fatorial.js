function fatorial(num) {
    if (num > 0) {
        if (num == 1) {
            return 1;
        } else {
            return fatorial(num - 1) * num;
        }
    } else {
        alert("Número invalido!");
        return undefined;
    }
}

do {
    var op;
    var num = parseInt(prompt("Informe um número inteiro positivo: "));
    alert(`${num}! = ${fatorial(num)}`);
    op = prompt("Deseja repetir o programa? (SIM | NÃO)").toUpperCase();
} while (op === "SIM");

