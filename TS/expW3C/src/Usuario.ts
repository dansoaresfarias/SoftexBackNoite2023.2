type Usuario = {
    nome : string,
    idade : number,
    sexo : string,
    email : string
};

function verificarAdulto( usuario : Usuario) : boolean {
    if(usuario.idade >= 18){
        return true;
    }else{
        return false;
    }    
}

let luis : Usuario = {
    nome : "Luis Fernando",
    idade : 27,
    sexo : "M",
    email : "luis@gmail.com"
};

console.log(luis);
console.log(verificarAdulto(luis))


