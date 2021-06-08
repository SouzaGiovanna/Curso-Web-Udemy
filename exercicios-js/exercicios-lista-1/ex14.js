const verificarFrutasFeira = (fruta) => {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Fruta não cadastrada, tente outra por favor'
    }
}

console.log(verificarFrutasFeira('melancia'))
console.log(verificarFrutasFeira('pera'))
console.log(verificarFrutasFeira('maçã'))
console.log(verificarFrutasFeira('kiwi'))