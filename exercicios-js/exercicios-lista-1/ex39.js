const trocarVetores = (vetorA = [], vetorB = []) => {
    let tamanhoVetores = vetorA.length

    for(let i = 0; i < tamanhoVetores; i++){
        vetorA.push(vetorB[i])
        vetorB.push(vetorA[i])
    }

    vetorA.splice(0, tamanhoVetores)
    vetorB.splice(0, tamanhoVetores)
    vetorB.splice(tamanhoVetores, tamanhoVetores + tamanhoVetores)

    console.log(vetorA, vetorB)
}

trocarVetores([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])