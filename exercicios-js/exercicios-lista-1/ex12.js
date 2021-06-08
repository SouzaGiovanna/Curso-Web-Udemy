const calcularFatorial = (num) => {
    let fatorial = 1

    for(let i = num; i > 1; i--){
        fatorial *= i
    }

    return fatorial
}

console.log(calcularFatorial(7))