//function declaration - pode chamar essa função em qualquer parte do código
function soma(x, y) {
    return x + y
}

//function expression - só pode ser chamada depois de ter sido declarada
const sub = function (x, y) {
    return x - y
}

//named function expression - só pode ser chamada depois de ter sido declarada
const mult = function mult(x, y) {
    return x * y
}