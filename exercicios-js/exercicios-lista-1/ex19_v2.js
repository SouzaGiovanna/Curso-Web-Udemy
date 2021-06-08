function criarCardapioLanchonete(codigo, descricao, preco){
    return {
        codigo,
        descricao,
        preco
    }
}

const cardapio = []

cardapio.push(criarCardapioLanchonete(100, 'Cachorro Quente', 3))
cardapio.push(criarCardapioLanchonete(200, 'Hambúrguer Simples', 4))
cardapio.push(criarCardapioLanchonete(300, 'Cheeseburguer', 5.5))
cardapio.push(criarCardapioLanchonete(400, 'Bauru', 7.5))
cardapio.push(criarCardapioLanchonete(500, 'Refrigerante', 3.5))
cardapio.push(criarCardapioLanchonete(600, 'Suco', 2.8))

const realizarPedido = (codigo, qtd) => {
    try{
        let produto = cardapio.find(e => e.codigo === codigo)

        console.log(`O valor a ser pago pelo ${produto.descricao} é de R$ ${produto.preco * qtd}`)
    }catch(e){
        console.log('Esse produto não existe')
    }
}

realizarPedido(100, 1)
realizarPedido(600, 10)
realizarPedido(1000, 1)