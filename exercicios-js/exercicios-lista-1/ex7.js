const calcularBhaskara = (a, b, c) => {
    let delta = calcularDelta(a, b, c)
    let x = []

    if(Math.sign(delta) > 0){
        x.push(reduzirXPositivo(a, b, delta))
        x.push(reduzirXNegativo(a, b, delta))

        console.log(x)
    }
    else{
        console.log('Delta é negativo')
    }
}

function calcularDelta(a, b, c) {
    return Math.pow(b, 2) - (4 * a * c)
}

function reduzirXPositivo(a, b, delta){
    return (-b + Math.sqrt(delta)) / 2 * a
}

function reduzirXNegativo(a, b, delta){
    return (-b - Math.sqrt(delta)) / 2 * a
}

calcularBhaskara(3, -5, -12)