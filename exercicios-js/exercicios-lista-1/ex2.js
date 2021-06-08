const eTriangulo = (x, y, z) => x + y > z && x - y < z
const eEscaleno = (x, y, z) => { if(x != y && x != z && y != z) return true; else return false }
const eEquilatero = (x, y, z) => {if(x == y && x == z && y == z) return true; else return false }

function descobrirTriangulo(x, y, z){
    if(eTriangulo(x, y, z)){
        if(eEscaleno == true) console.log('Esse triângulo é Escaleno')
        else if(eEquilatero == true) console.log('Esse triângulo é Equilatero')
        else console.log('Esse triângulo é Isósceles')
    }
    else console.log('Não é triângulo')
}

descobrirTriangulo(2, 2, 3)