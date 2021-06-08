const calcularPrecoPlanoSaude = (idade) => {
    let precoPlano = 100

    if(idade < 10) return precoPlano += 80
    else if(idade < 30) return precoPlano += 50
    else if(idade < 60) return precoPlano += 95
    else return precoPlano += 130
}

console.log(calcularPrecoPlanoSaude(12))
console.log(calcularPrecoPlanoSaude(86))
console.log(calcularPrecoPlanoSaude(3))
console.log(calcularPrecoPlanoSaude(25))
console.log(calcularPrecoPlanoSaude(59))