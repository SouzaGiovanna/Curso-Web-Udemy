const receberSomenteOsParesDeIndicesPares = array => {
    let resultado = []

    for(let i = 0; i < array.length; i++) {
        if(numeroPar(array[i]) && indicePar(i)) resultado.push(array[i])
    }

    return resultado
}

const numeroPar = num => num % 2 == 0
const indicePar = indice => indice % 2 == 0

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))