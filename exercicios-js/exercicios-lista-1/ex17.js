const aumentarSalario = (plano, salario) => {
    switch(plano){
        case 'a':
            return salario + salario * 0.10
        case 'b':
            return salario + salario * 0.15
        case 'c':
            return salario + salario * 0.20
        default:
            return 'Plano de Trabalho Inválido'
    }
}

console.log(aumentarSalario('a', 2000))
console.log(aumentarSalario('b', 2000))
console.log(aumentarSalario('c', 2000))
console.log(aumentarSalario('d', 2000))