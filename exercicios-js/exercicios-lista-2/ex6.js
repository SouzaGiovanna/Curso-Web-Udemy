const inverso = valor => {
    if(typeof valor == typeof true) return !valor
    else if(isNaN(valor)) return valor * (-1)
    else return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))