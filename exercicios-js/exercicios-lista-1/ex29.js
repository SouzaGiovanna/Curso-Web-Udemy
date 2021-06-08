const verificarIntervalo = (vetor) => {
    let dentro = 0
    let fora = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 10) fora++
        else if(vetor[i] > 20) fora++
        else dentro++
    }

    console.log(`Nesse vetor temos ${fora} números fora do intervalo e ${dentro} números dentro do intervalo`)
}

verificarIntervalo([1, 23, 12, 4, 89, 20])