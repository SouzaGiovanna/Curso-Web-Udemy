const funcaoPadrao = (vetor = [], numero = 0) => {
    let vetorResultado = []

    for(let i = 0; i < vetor.length; i++){
        vetorResultado.push(vetor[i] * numero)
    }

    console.log(vetorResultado)

    if(numero > 5) console.log(funcaoCondicional(vetor, numero))
}

const funcaoCondicional = (vetor = [], numero = 0) => {
    let vetorResultado = []

    for(let i = 0; i < vetor.length; i++){
        vetorResultado.push(vetor[i] * numero)
    }

    return vetorResultado
}

funcaoPadrao([1, 2, 3, 4, 6], 3)
funcaoPadrao([1, 2, 3, 4, 6], 6)