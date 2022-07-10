const inverter = objeto => {
    const resultado = {}

    Object.entries(objeto).forEach(parChaveValor => {
        const chave = 0, valor = 1

        resultado[parChaveValor[valor]] = parChaveValor[chave]
    })

    return resultado
}

console.log(inverter({a: 1, b: 2, c: 3}))