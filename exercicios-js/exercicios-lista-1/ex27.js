let anos

const existeCriancaMenor = (altura1, altura2) => {
    if(altura1 == altura2) return false
    return true
}

const passarAltura = (altura1, taxaCrescimento1, altura2, taxaCrescimento2) => {
    let alturas
    let taxas

    if(altura1 > altura2){
        alturas = [altura1, altura2]
        taxas = [taxaCrescimento1, taxaCrescimento2]
    } 
    else{
        alturas = [altura2, altura1]
        taxas = [taxaCrescimento2, taxaCrescimento1]
    }

    if(taxas[0] < taxas[1]){
        for(let i = 1; i > 0; i++){
            alturas[0] += taxas[0]
            alturas[1] += taxas[1]

            if(alturas[0] == alturas[1] || alturas[0] < alturas[1]){
                anos = i

                return true
            }
        }
    }
    else{
        return false
    }
}

const apresentar = (existeCriancaMenor, ultrapassaraMaior, anos) => {
    if(existeCriancaMenor){
        if(ultrapassaraMaior){
            console.log(`Existe uma criança menor, ela irá ultrapassar a criança maior em ${anos} anos`)
        }
        else{
            console.log(`Existe uma criança menor, mas ela não irá ultrapassar a outra criança`)
        }
    }
    else{
        console.log('As duas crianças são do mesmo tamanho')
    }
}

apresentar(existeCriancaMenor(1.54, 1.34), passarAltura(1.54, 0.02, 1.34, 0.1), anos)