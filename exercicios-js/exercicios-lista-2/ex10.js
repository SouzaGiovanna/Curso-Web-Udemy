const simboloMais = vezes => {
    let resultado = []

    for (let i = 0; i < vezes; i++) resultado += [].concat("+")

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))