const calcularNotasUsadas = function(valor){
    let notasUsadas = ''

    if(Math.trunc(valor / 100) > 0){
        let notas = Math.trunc(valor / 100)
        valor -= notas * 100
        notasUsadas += notas+ ' nota(s) de R$ 100. ' 
    }
    if(Math.trunc(valor / 50) > 0){
        let notas = Math.trunc(valor / 50)
        valor -= notas * 50
        notasUsadas += notas+ ' nota(s) de R$ 50. ' 
    } 
    if(Math.trunc(valor / 10) > 0){
        let notas = Math.trunc(valor / 10)
        valor -= notas * 10
        notasUsadas += notas+ ' nota(s) de R$ 10. ' 
    } 
    if(Math.trunc(valor / 5) > 0){
        let notas = Math.trunc(valor / 5)
        valor -= notas * 5
        notasUsadas += notas+ ' nota(s) de R$ 5. ' 
    } 
    if(Math.trunc(valor / 1) > 0){
        let notas = Math.trunc(valor / 1)
        valor -= notas * 1
        notasUsadas += notas+ ' nota(s) de R$ 1.' 
    } 

    return notasUsadas
}

console.log(calcularNotasUsadas(18))
console.log(calcularNotasUsadas(250))
console.log(calcularNotasUsadas(63))
console.log(calcularNotasUsadas(12))
console.log(calcularNotasUsadas(89))
console.log(calcularNotasUsadas(100))