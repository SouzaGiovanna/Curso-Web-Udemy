const contarNumerosNegativos = (vetor = []) => {
    let negativos = 0

    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < 0) negativos++
    }
    
    console.log(`Nesse vetor temos ${negativos} números negativos`)
}

contarNumerosNegativos([1, 2, 3, 4, 5, 6, 7, -9, -8, -5, -12])