const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativo isso ele faz tudo de uma vez, sem ter o reuso do código (oq é ruim), aq vc tem que falar exatamente como deve ser feito
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo essa é a mais interessante, aq tem um reuso muito grande de código, podendo usar em outros lugares (oq é bom), aq vc tem que falar só o resultado final desejado
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)