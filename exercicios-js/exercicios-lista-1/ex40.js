const atribuirConceitosNotas = (notas = []) => {
    let conceitos = []

    for(let i = 0; i < notas.length; i++){
        let notaAtual = notas[i]

        if(notaAtual < 5) conceitos.push('D')
        else if(notaAtual < 7) conceitos.push('C')
        else if(notaAtual < 9) conceitos.push('B')
        else conceitos.push('A')
    }

    console.log(conceitos)
}

atribuirConceitosNotas([2.5, 6.8, 9.8, 8.9])