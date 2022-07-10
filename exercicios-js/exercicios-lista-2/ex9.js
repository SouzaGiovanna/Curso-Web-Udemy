const repetir = (valor, vezes) => {
    let resultado = []

    for(let i = 0; i < vezes; i++) resultado.push(valor)

    return resultado
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))