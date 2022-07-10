const filtrarElementos = array => {
    resultado = []

    for(let i = 0; i < array.length; i++) {
        if(typeof array[i] == typeof i) resultado.push(array[i])
    }

    return resultado
}

console.log(filtrarElementos(["JavaScript", 1, "3", "Web", 20]))
console.log(filtrarElementos(["a", "c"]))