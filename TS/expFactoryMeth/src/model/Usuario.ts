export type Usuario = {
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


