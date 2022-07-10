const funcaoDaSorte = num => {
    let resultado = Math.floor(Math.random() * 10) + 1

    return num == resultado ? `Parabéns! O número sorteado foi o ${resultado}` : `Que pena! O número sorteado foi o ${resultado}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))