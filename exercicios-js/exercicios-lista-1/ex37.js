const calcularProgressaoAritmetica = (n, a1, r) => {
    let soma = 0
    let elementos = []

    for(let i = n; i > 0; i--){
        elementos.push(a1 + (i - 1) * r)
    }
    soma = ((a1 + elementos[n-1]) * n) / 2

    console.log(elementos, ' soma = '+soma.toFixed(2))
}

const calcularProgressaoGeometrica = (n, a1, r) => {
    let soma = 0
    let elementos = []

    for(let i = n; i > 0; i--){
        elementos.push(a1 * Math.pow(r, n - 1))
    }

    soma = (a1 * (Math.pow(r, n) - 1)) / r - 1

    console.log(elementos, ' soma = '+soma.toFixed(2))
}

calcularProgressaoAritmetica(2, 1, 3)
calcularProgressaoGeometrica(2, 1, 3)