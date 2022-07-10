const calcularMedia = nums => nums.reduce(function (acumulador, atual) { return acumulador + atual }) / nums.length

console.log(calcularMedia([8, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))