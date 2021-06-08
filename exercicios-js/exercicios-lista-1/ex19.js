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
    let produto
    switch(codigo){
        case 100:
            produto = cardapio.find(e => e.codigo === codigo)

            console.log(`O valor a ser pago pelo ${produto.descricao} é de R$ ${produto.preco * qtd}`)
            break
        case 200:
            produto = cardapio.find(e => e.codigo === codigo)

            console.log(`O valor a ser pago pelo ${produto.descricao} é de R$ ${produto.preco * qtd}`)
            break
        case 300:
            produto = cardapio.find(e => e.codigo === codigo)

            console.log(`O valor a ser pago pelo ${produto.descricao} é de R$ ${produto.preco * qtd}`)
            break
        case 400:
            produto = cardapio.find(e => e.codigo === codigo)

            console.log(`O valor a ser pago pelo ${produto.descricao} é de R$ ${produto.preco * qtd}`)
            break
        case 500:
            produto = cardapio.find(e => e.codigo === codigo)

            console.log(`O valor a ser pago pelo ${produto.descricao} é de R$ ${produto.preco * qtd}`)
            break
        case 600:
            produto = cardapio.find(e => e.codigo === codigo)

            console.log(`O valor a ser pago pelo ${produto.descricao} é de R$ ${produto.preco * qtd}`)
            break
        default:
            console.log('Esse produto não existe')
            break
    }
}

realizarPedido(100, 1)
realizarPedido(600, 10)
realizarPedido(1000, 1)