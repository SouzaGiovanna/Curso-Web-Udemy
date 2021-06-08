const soma = (x, y) => x + y
const mult = (x, y) => x * y
const sub = (x, y) => x - y
const div = (x, y) => x / y

function operacoes(x, y) {
    console.log(soma(x, y))
    console.log(sub(x, y))
    console.log(mult(x, y))
    console.log(div(x, y))
}

operacoes(4, 2)