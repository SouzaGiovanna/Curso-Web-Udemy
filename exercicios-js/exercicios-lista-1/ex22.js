const calcularValorAnuidade = (mes, anuidade) => {
    const juros = 0.05
    let valorAPagar = anuidade

    for(let i = 0; i < mes; i++){
        valorAPagar += valorAPagar * juros
    }

    return valorAPagar.toFixed(2)
}

console.log(calcularValorAnuidade(12, 10000))