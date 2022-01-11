const receberMelhorEstudante = (alunos = {}) => {
    let notas = Object.values(alunos)
    let medias = []
    let soma = 0
    let maior = 0

    for(notasAlunos of notas){
        for(notasAluno of notasAlunos){
            soma += notasAluno
        }
        medias.push((soma / notasAlunos.length).toFixed(2))
        soma = 0
    }

    for(let i = 0; i < medias.length; i++){
        maior = medias[i] > maior ? medias[i] : maior
    }

    
}

receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 9],
    Carla: [7, 7, 8, 9]
})