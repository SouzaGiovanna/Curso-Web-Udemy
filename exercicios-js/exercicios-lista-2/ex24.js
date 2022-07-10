const contarCaractere = (caractere, frase = "") => {
    let qtd = 0;

    for(let i = 0; i < frase.length; i++) {
        if(frase[i] === caractere) qtd++
    }

    return qtd
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))