import { iRetangular } from "./iRetangular";

export class Quadrado implements iRetangular {

    altura: number;
    largura: number;

    public constructor(lado: number) {
        this.altura = lado;
        this.largura = lado;
    }

    area(): number {
        return this.altura ** 2;
    }

    perimetro(): number {
        return 2 * this.altura + 2 * this.largura;
    }

}