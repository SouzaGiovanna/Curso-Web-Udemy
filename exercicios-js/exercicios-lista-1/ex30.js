const verificarMaiorMenorValor = (vetor = []) => {
    vetor.sort()
    let indice = vetor.length - 1

    console.log(`O menor valor é ${vetor[0]} e o maior é ${vetor[indice]}`)
}

verificarMaiorMenorValor([1, 2, 3, 4, 5, 9, 4, 6, 7, 0])