const numerosPares = (numeros) => {
    let pares = []

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 == 0) pares.push(numeros[i])
    }

    return pares.length
}

const numerosImpares = (numeros) => {
    let impares = []

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 != 0) impares.push(numeros[i])
    }

    return impares.length
}

const apresentar = (numeros) => {
    console.log(`Nesse vetor temos ${numerosPares(numeros)} números pares e ${numerosImpares(numeros)} números ímpares de um total de ${numeros.length} elementos`)
}

apresentar([2, 3, 4, 5, 6, 7, 8, 9, 0])