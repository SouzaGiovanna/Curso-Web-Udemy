const valores = [7, 8, 4, 5, 6]
console.log(valores[0], valores[4])
console.log(valores[5])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)