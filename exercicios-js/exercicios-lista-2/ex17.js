const somarNumeros = nums => nums.reduce(function (acumulador, atual) { return acumulador + atual })

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))