import { iRetangular } from "./iRetangular";

export class Retangulo implements iRetangular {

    altura: number;
    largura: number;

    public constructor(altura : number = 0, largura ?: number) {
        this.altura = altura;
        this.largura = (largura || 0);
    }

    area(): number {
        return this.altura * this.largura;
    }

    perimetro(): number {
        return 2 * this.altura + 2 * this.largura;
    }

}