import { iRetangular } from "./iRetangular";

export class Quadrado implements iRetangular {

    altura: number;

    public constructor(lado: number) {
        this.altura = lado;
    }

    area(): number {
        return this.altura ** 2;
    }

    perimetro(): number {
        return 4 * this.altura;
    }

}