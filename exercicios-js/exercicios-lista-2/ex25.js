const buscarPalavrasSemelhantes = (trecho, array = []) => {
    let resultado = []

    for(let palavra of array) 
        if(palavra.includes(trecho))
            resultado.push(palavra)

    return resultado
}

console.log(buscarPalavrasSemelhantes("pro",  ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]))