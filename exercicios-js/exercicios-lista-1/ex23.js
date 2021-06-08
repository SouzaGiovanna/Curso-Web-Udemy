const pegarVariaveis = function(entrada){
    let resposta = entrada.split(" ")
    let codigoAluno = resposta[0]
    let notas = [resposta[1], resposta[2], resposta[3]]
    
    if(codigoAluno > 0) {
        notas.sort()

        let media = calcularMedia(notas)
        let situacao = situacaoAluno(media)
    
        respostaFinal(codigoAluno, notas, media, situacao)
    }
}
    
const calcularMedia = (notas) => ((notas[0] * 3 + notas[1] * 3 + notas[2] * 4) / 3 + 3 + 4).toFixed(2).replace('.', ',')

const situacaoAluno = (media) => {
    if(media >= 5) return 'APROVADO'
    return 'REPROVADO'
}

const respostaFinal = (codigo, notas, media, situacao) => 
    console.log(`O aluno com código ${codigo} com as notas ${notas[0]}, ${notas[1]} e ${notas[2]} ficou com a média final ${media} e foi ${situacao}`)

pegarVariaveis('1 2 3 4')
pegarVariaveis('1 2 3 4')
pegarVariaveis('1 2 3 4')
pegarVariaveis('1 2 3 4')
pegarVariaveis('1 2 3 4')
pegarVariaveis('1 2 3 4')
pegarVariaveis('-1 2 3 4')