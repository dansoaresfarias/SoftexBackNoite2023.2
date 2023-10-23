function verificarAdulto(usuario) {
    if (usuario.idade >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var luis = {
    nome: "Luis Fernando",
    idade: 27,
    sexo: "M",
    email: "luis@gmail.com"
};
console.log(luis);
console.log(verificarAdulto(luis));
