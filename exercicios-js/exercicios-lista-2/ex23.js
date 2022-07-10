const contarPalavras = frase => {
    let resultado = frase.split(" ")

    return resultado.length
}

console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))