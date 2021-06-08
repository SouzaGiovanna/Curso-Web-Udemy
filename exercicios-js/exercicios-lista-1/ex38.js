const pegarNumerosImpares = (inicio = 0, fim = 100) => {
    let impares = []

    if(inicio > fim){
        let fim2 = inicio
        let inicio2 = fim

        inicio = inicio2
        fim = fim2
    }

    for(let i = inicio; i <= fim; i++){
        if(i % 2 != 0) impares.push(i)
    }

    console.log(impares)
}

pegarNumerosImpares()
pegarNumerosImpares(0, 20)
pegarNumerosImpares(20, 0)