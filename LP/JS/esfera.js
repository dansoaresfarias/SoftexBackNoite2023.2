const PI = 3.141592;

function areaEsf(raio) {
    let area = 4*PI*raio**2;
    return area;
}

function volumeEsf(raio) {
    return (4/3)*PI*raio**3;
}

var r = parseFloat(prompt("Informe o raio da esfera: "));
console.log(`Área Esfera = ${areaEsf(r)} \nVolume Esfera = ${volumeEsf(r)}`);