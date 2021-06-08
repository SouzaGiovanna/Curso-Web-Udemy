const calcularNotasUsadas = function(valor){
    let notasUsadas = ''
    const cedulas = [100, 50, 10, 5, 1]

    for(let i = 0; i < cedulas.length; i++){
        let notas = Math.trunc(valor / cedulas[i])

        if(notas > 0){    
            valor -= notas * cedulas[i]
            notasUsadas += `${notas} nota(s) de R$ ${cedulas[i]}. ` 
        }
    }
    return notasUsadas
}

console.log(calcularNotasUsadas(18))
console.log(calcularNotasUsadas(250))
console.log(calcularNotasUsadas(63))
console.log(calcularNotasUsadas(12))
console.log(calcularNotasUsadas(89))
console.log(calcularNotasUsadas(100))