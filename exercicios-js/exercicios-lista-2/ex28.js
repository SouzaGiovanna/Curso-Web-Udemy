const filtrarPorQuantidadeDeDigitos = (array = [], digitos) => {
    return array.filter(function (elemento) {
        return elemento.toString().length == digitos
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))