const estaEntre = (num, min, max, inclusivo = false) => {
    let maior = max > min ? max : min;
    let menor = min < max ? min : max;

    if (inclusivo){
        return num >= menor || num <= maior;
    } else {
        return num > menor && num < maior;
    }
}

console.log(estaEntre(10, 100, 0))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))