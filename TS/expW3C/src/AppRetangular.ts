import { Quadrado } from "./Quadrado";
import { Retangulo } from "./Retangulo";


let qua1 = new Quadrado(6);

console.log(`A área do quadrado é ${qua1.area()}`);
console.log(`O perimetro do quadrado é ${qua1.perimetro()}`);

let ret1 = new Retangulo(9, 5);

console.log(`A área do retângulo é ${ret1.area()}`);
console.log(`O perimetro do retângulo é ${ret1.perimetro()}`);

console.log(typeof(ret1));

// Type Alias

type Expoente = (base : number, exp : number) => number;
const pow : Expoente = (base, exp) => base ** exp;
console.log(pow(5, 4));

let x: unknown = 'hello';
console.log((x as string).length);