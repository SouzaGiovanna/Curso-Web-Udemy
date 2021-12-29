const menorNumero = nums => nums.reduce(function (acumulador = 100, atual) { return acumulador > atual ? atual : acumulador })

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))