const pessoa = {
    nome: "Giovanna", idade: 18
}

const removerPropriedade = (obj = {}, propriedade) => {
    delete obj[propriedade]
    return obj
}

console.log(Object.is(removerPropriedade(pessoa, "idade")))