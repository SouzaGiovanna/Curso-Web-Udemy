const classificacaoAluno = function (nota){
    if(arredondarNota(nota) < 38){
        console.log(`Esse aluno foi reprovado com a nota ${arredondarNota(nota)}`)
    }
    else{
        console.log(`Esse aluno foi aprovado com a nota ${arredondarNota(nota)}`)
    }
}

function arredondarNota(nota){
    if((nota + 2) % 5 == 0 && nota >= 38) return nota + 2
    else if((nota + 1) % 5 == 0 && nota >= 38) return nota + 1
    else return nota
}

classificacaoAluno(28)
classificacaoAluno(38)
classificacaoAluno(37)