const receberPrimeiroEUltimoElemento = (elementos = []) => 
    [].concat(elementos[0], elementos[elementos.length - 1])

console.log(receberPrimeiroEUltimoElemento([7, 14, "Olá"]))
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]))