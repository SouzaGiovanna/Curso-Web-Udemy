const pontuacaoJogos = function (pontuacoes){
    const maiorPontuacao = descobrirMaiorEMenorPontuacao(pontuacoes)[0]
    const menorPontuacao = descobrirMaiorEMenorPontuacao(pontuacoes)[1]

    console.log(`Ele bateu seu record ${descobrirMaiorEMenorPontuacao(pontuacoes)[2]} vezes`)
    console.log(`Seu pior jogo foi ${descobrirDiaPiorJogo(pontuacoes, menorPontuacao) + 1}° jogo`)
}

function descobrirMaiorEMenorPontuacao(pontuacoes = []){
    let maiorPontuacao = 0
    let menorPontuacao = pontuacoes[0]
    let vezesBateuRecord = 0

    for(let i = 0; i < pontuacoes.length; i++){
        if(maiorPontuacao < pontuacoes[i]){
            maiorPontuacao = pontuacoes[i]
            if(maiorPontuacao > 0 && i != 0){
                vezesBateuRecord++
            }
        }
        if(menorPontuacao > pontuacoes[i]){
            menorPontuacao = pontuacoes[i]
        }
    }
        
    return [maiorPontuacao, menorPontuacao, vezesBateuRecord]
}

function descobrirDiaPiorJogo(pontuacoes = [], menorPontuacao){
    return pontuacoes.indexOf(menorPontuacao)
}

pontuacaoJogos([2, 3, 4, 5, 6, 7, 8, 9])