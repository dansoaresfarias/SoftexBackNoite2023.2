var num = [];
var numQuadrado = [];

// Pegar os números;
for (let index = 0; index < 5; index++) {
    num[index] = Number(prompt(`Informe o ${index + 1}ª número:`));    
}

console.log(num);

num.forEach(element => {
    numQuadrado.push(element**2);
});

console.log(numQuadrado);