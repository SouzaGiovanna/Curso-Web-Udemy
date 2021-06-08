const calcularMediaAritmetica = (vetor) => {
    let valores = 0

    for(let i = 0; i < vetor.length; i++){
        valores += vetor[i]
    }

    return valores / vetor.length
}

console.log(calcularMediaAritmetica([2, 3, 4, 5]))