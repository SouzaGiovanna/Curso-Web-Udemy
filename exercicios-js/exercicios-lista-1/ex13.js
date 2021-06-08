const verificarDia = (dia) => {
    switch(dia){
        case 1: case 2:
            return 'fim de semana'
        case 3: case 4: case 5: case 6:
            return 'dia útil'
        default:
            return 'dia inválido'
    }
}

console.log(verificarDia(1))
console.log(verificarDia(2))
console.log(verificarDia(5))
console.log(verificarDia(3))
console.log(verificarDia(8))