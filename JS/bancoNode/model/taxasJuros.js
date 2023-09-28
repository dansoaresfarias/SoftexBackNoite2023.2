export class TaxasJuros {
    static IOF = 0.0038;
    static IRRF = 0.15;

    static calcularIOF(valor) {
        return valor + (valor * (TaxasJuros.IOF));
    }

    static calcularIRRF(valor) {
        return valor + (valor * (TaxasJuros.IRRF));
    }

}