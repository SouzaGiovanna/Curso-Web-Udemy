function criarProduto(nome = indefinido, preco = 1){
    return {
        nome,
        preco: preco,
        desconto: 0.50,
        precoComDesconto: preco * 0.50
    }
}

console.log(criarProduto('Samsung Galaxy A30', 5000.50))
console.log(criarProduto('Samsung Galaxy A20s', 2500.00))