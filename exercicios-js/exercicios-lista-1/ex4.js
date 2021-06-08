const calcularDivisao = (x, y) => x / y
const calcularRestoDivisao = (x, y) => x % y

function apresentarDivisao(x, y){
    console.log(`O resultado da divisão é ${calcularDivisao(x, y)}, onde seu resto é igual a ${calcularRestoDivisao(x, y)}`)
}

apresentarDivisao(6, 2)