const objetoParaArray = obj => Object.entries(obj)

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de Software"
}))
console.log(objetoParaArray({
    codigo: 11111,
    preco: "12000"
}))