const verificarCarrosRevenda = (modelo) => {
    switch(modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere esse modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(verificarCarrosRevenda('sedan'))
console.log(verificarCarrosRevenda('hatch'))
console.log(verificarCarrosRevenda('celta'))
console.log(verificarCarrosRevenda('motocicleta'))
console.log(verificarCarrosRevenda('sivic'))